"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import "./case-study-media.css";

// Media for long-form case studies. Each slot is described in data (see
// src/app/projects/waystream/slots.js). `files` maps a slot item's file name
// (without extension) to the image actually present in `basePath`; items
// without a file render as labelled placeholders.

const MediaContext = createContext({ basePath: "", files: {}, open: () => {} });

export function MediaProvider({ basePath, files, children }) {
  const [active, setActive] = useState(null);
  const open = useCallback((item) => setActive(item), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <MediaContext.Provider value={{ basePath, files, open }}>
      {children}
      {active && (
        <div className="csm-lightbox" role="dialog" aria-modal="true" aria-label={active.alt} onClick={() => setActive(null)}>
          <button type="button" className="csm-lightbox-close" aria-label="Close" onClick={() => setActive(null)}>
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={active.src} alt={active.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </MediaContext.Provider>
  );
}

function Frame({ item, slot, markers }) {
  const { basePath, files, open } = useContext(MediaContext);
  const found = files[item.file];
  const device = item.device || slot.device || "desktop";

  if (!found) {
    return (
      <div className={`csm-frame csm-placeholder csm-frame--${device}`} style={{ aspectRatio: item.ratio }}>
        <div className="csm-placeholder-inner">
          <span className="csm-placeholder-label">
            {slot.label}
            {(slot.optional || item.optional) && <em> · optional</em>}
          </span>
          <strong className="csm-placeholder-title">{item.title || slot.title}</strong>
          {slot.show && <p className="csm-placeholder-show">{slot.show}</p>}
          <code className="csm-placeholder-file">{item.file}.png</code>
        </div>
      </div>
    );
  }

  const src = `${basePath}/${found}`;
  return (
    <button
      type="button"
      className={`csm-frame csm-frame--image csm-frame--${device}`}
      style={{ aspectRatio: item.ratio }}
      onClick={() => open({ src, alt: item.alt })}
      aria-label={`View larger: ${item.alt}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={item.alt} loading="lazy" />
      {markers?.map((m, i) =>
        m.x == null ? null : (
          <span key={i} className="csm-marker" style={{ left: `${m.x}%`, top: `${m.y}%` }} aria-hidden="true">
            {i + 1}
          </span>
        )
      )}
    </button>
  );
}

function ItemCaption({ item, index, numbered }) {
  if (!item.title && !item.caption) return null;
  return (
    <figcaption className="csm-item-caption">
      {numbered && <span className="csm-step-num">{String(index + 1).padStart(2, "0")}</span>}
      <span>
        {item.title && <strong>{item.title}</strong>}
        {item.caption && <span className="csm-item-caption-text">{item.caption}</span>}
      </span>
    </figcaption>
  );
}

function SlotHeader({ slot }) {
  return (
    <div className="csm-slot-header">
      <span className="csm-slot-label">{slot.label}</span>
      <span className="csm-slot-title">{slot.title}</span>
    </div>
  );
}

function Annotations({ items }) {
  if (!items?.length) return null;
  return (
    <ol className="csm-annotations">
      {items.map((note, i) => (
        <li key={i}>
          <span className="csm-annotation-num">{i + 1}</span>
          {typeof note === "string" ? note : note.text}
        </li>
      ))}
    </ol>
  );
}

export function Slot({ slot, variant }) {
  const layout = slot.layout;
  const device = slot.device || "desktop";
  const items = slot.items;

  let body;
  if (layout === "single") {
    const isMobile = device === "mobile";
    body = (
      <div className={`csm-single ${isMobile ? "csm-single--mobile" : ""} ${slot.annotations ? "csm-single--annotated" : ""}`}>
        <figure className="csm-figure">
          <Frame item={items[0]} slot={slot} markers={slot.annotations?.filter((a) => typeof a === "object")} />
        </figure>
        {(slot.annotations || slot.caption) && (
          <div className="csm-single-notes">
            {slot.caption && <p className="csm-caption">{slot.caption}</p>}
            <Annotations items={slot.annotations} />
          </div>
        )}
      </div>
    );
  } else if (layout === "sequence") {
    body = (
      <div
        className={`csm-sequence csm-sequence--${device}`}
        style={{ "--csm-cols": slot.columns || items.length }}
      >
        {items.map((item, i) => (
          <figure className={`csm-figure ${item.span ? `csm-span-${item.span}` : ""}`} key={item.file}>
            <Frame item={item} slot={slot} />
            <ItemCaption item={item} index={i} numbered />
          </figure>
        ))}
      </div>
    );
  } else if (layout === "compare") {
    body = (
      <div className="csm-compare">
        {items.map((item, i) => (
          <figure className={`csm-figure csm-compare-item ${i === 0 ? "csm-compare-item--before" : "csm-compare-item--after"}`} key={item.file}>
            <Frame item={item} slot={slot} />
            <ItemCaption item={item} index={i} />
          </figure>
        ))}
      </div>
    );
  } else if (layout === "feature-grid") {
    const [lead, ...rest] = items;
    body = (
      <div className="csm-feature-grid">
        <figure className="csm-figure csm-feature-lead">
          <Frame item={lead} slot={slot} />
          <ItemCaption item={lead} index={0} />
        </figure>
        <div className="csm-grid" style={{ "--csm-cols": 2 }}>
          {rest.map((item, i) => (
            <figure className="csm-figure" key={item.file}>
              <Frame item={item} slot={slot} />
              <ItemCaption item={item} index={i + 1} />
            </figure>
          ))}
        </div>
      </div>
    );
  } else if (layout === "foundations") {
    // Tall foundations sheets side by side, then wide component sheets.
    const leads = items.filter((item) => item.lead);
    const rest = items.filter((item) => !item.lead);
    body = (
      <div className="csm-foundations">
        <div className="csm-foundations-lead">
          {leads.map((item, i) => (
            <figure className="csm-figure" key={item.file}>
              <Frame item={item} slot={slot} />
              <ItemCaption item={item} index={i} />
            </figure>
          ))}
        </div>
        {rest.map((item, i) => (
          <figure className="csm-figure" key={item.file}>
            <Frame item={item} slot={slot} />
            <ItemCaption item={item} index={i + 1} />
          </figure>
        ))}
      </div>
    );
  } else if (layout === "platforms") {
    body = (
      <div className={`csm-platforms ${items.length === 2 ? "csm-platforms--pair" : ""}`}>
        {items.map((item, i) => (
          <figure className={`csm-figure csm-platform csm-platform--${item.ratio === "9 / 19.5" ? "mobile" : "desktop"}`} key={item.file}>
            <Frame item={{ ...item, device: item.ratio === "9 / 19.5" ? "mobile" : "desktop" }} slot={slot} />
            <ItemCaption item={item} index={i} />
          </figure>
        ))}
      </div>
    );
  } else {
    body = (
      <div
        className={`csm-grid csm-grid--${device} ${slot.compact ? "csm-grid--compact" : ""}`}
        style={{ "--csm-cols": slot.columns || items.length }}
      >
        {items.map((item, i) => (
          <figure className="csm-figure" key={item.file}>
            <Frame item={item} slot={slot} />
            <ItemCaption item={item} index={i} />
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className={`csm-slot csm-slot--${layout} ${variant ? `csm-slot--${variant}` : ""}`}>
      <SlotHeader slot={slot} />
      {body}
      {slot.caption && layout !== "single" && <p className="csm-caption csm-caption--below">{slot.caption}</p>}
    </div>
  );
}

// A simple before → after bar comparison for a single measured result.
export function MetricShift({ label, from, to, note }) {
  return (
    <div className="csm-metric-shift">
      <span className="csm-metric-tag">Measured</span>
      <div className="csm-metric-shift-head">
        <span className="csm-metric-shift-value">
          {from}% <span aria-hidden="true">→</span> {to}%
        </span>
        <span className="csm-metric-shift-label">{label}</span>
      </div>
      <div className="csm-bars" aria-hidden="true">
        <div className="csm-bar-row">
          <span className="csm-bar-name">Before</span>
          <div className="csm-bar-track"><div className="csm-bar csm-bar--before" style={{ width: `${from}%` }} /></div>
          <span className="csm-bar-value">{from}%</span>
        </div>
        <div className="csm-bar-row">
          <span className="csm-bar-name">After</span>
          <div className="csm-bar-track"><div className="csm-bar csm-bar--after" style={{ width: `${to}%` }} /></div>
          <span className="csm-bar-value">{to}%</span>
        </div>
      </div>
      {note && <p className="csm-metric-note">{note}</p>}
    </div>
  );
}

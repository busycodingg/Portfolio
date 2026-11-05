import fs from "node:fs";
import path from "node:path";
import ProjectClient from "./ProjectClient";

const description =
  "A multi-sided platform for live audio streaming: creator, listener and admin experiences, payments, growth and a cross-platform design system.";

export const metadata = {
  title: "Waystream Case Study | Grace",
  description,
  openGraph: {
    title: "Waystream Case Study | Grace",
    description,
    images: ["/projects/waystream/hero.png"],
  },
};

const MEDIA_DIR = "/projects/waystream/case-study";
const IMAGE_EXT = /\.(png|jpe?g|webp|gif|avif)$/i;

// Map each exported screenshot's name (without extension) to its file, so a
// slot shows the real image as soon as the file is dropped into the folder.
function findMedia() {
  const dir = path.join(process.cwd(), "public", MEDIA_DIR);
  if (!fs.existsSync(dir)) return {};
  return Object.fromEntries(
    fs
      .readdirSync(dir)
      .filter((name) => IMAGE_EXT.test(name))
      .map((name) => [name.replace(IMAGE_EXT, ""), name])
  );
}

export default function Page() {
  return <ProjectClient mediaPath={MEDIA_DIR} media={findMedia()} />;
}

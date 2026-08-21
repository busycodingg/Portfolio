import ProjectClient from "./ProjectClient";

export const metadata = {
  title: "Erastus Quartus Projects Case Study — Grace",
  description:
    "A corporate website for a Nigerian construction and structural engineering firm — built from a client-provided company profile into a structured site with its own information architecture and copy.",
  openGraph: {
    title: "Erastus Quartus Projects Case Study — Grace",
    description:
      "A corporate website for a Nigerian construction and structural engineering firm — built from a client-provided company profile into a structured site with its own information architecture and copy.",
    images: ["/projects/erastus-quartus/hero.png"],
  },
};

export default function Page() {
  return <ProjectClient />;
}

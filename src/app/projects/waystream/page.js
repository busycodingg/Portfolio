import ProjectClient from "./ProjectClient";

export const metadata = {
  title: "Waystream Case Study — Grace",
  description:
    "Africa's first audio streaming platform built to give creators, churches, and communities a voice without bandwidth barriers or foreign payment walls.",
  openGraph: {
    title: "Waystream Case Study — Grace",
    description:
      "Africa's first audio streaming platform built to give creators, churches, and communities a voice without bandwidth barriers or foreign payment walls.",
    images: ["/projects/waystream/hero.png"],
  },
};

export default function Page() {
  return <ProjectClient />;
}

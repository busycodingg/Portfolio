import ProjectClient from "./ProjectClient";

export const metadata = {
  title: "Waystream Case Study | Grace",
  description:
    "An audio streaming platform for African creators, churches and communities, built for low bandwidth and local payments.",
  openGraph: {
    title: "Waystream Case Study | Grace",
    description:
      "An audio streaming platform for African creators, churches and communities, built for low bandwidth and local payments.",
    images: ["/projects/waystream/hero.png"],
  },
};

export default function Page() {
  return <ProjectClient />;
}

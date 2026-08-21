import ProjectClient from "./ProjectClient";

export const metadata = {
  title: "Operations Management Platform Case Study — Grace",
  description:
    "Designing an inventory and facility management system for a nonprofit, replacing years of manual processes with a single seamless platform.",
  openGraph: {
    title: "Operations Management Platform Case Study — Grace",
    description:
      "Designing an inventory and facility management system for a nonprofit, replacing years of manual processes with a single seamless platform.",
    images: ["/projects/Logistic/hero.png"],
  },
};

export default function Page() {
  return <ProjectClient />;
}

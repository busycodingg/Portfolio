import ProjectClient from "./ProjectClient";

export const metadata = {
  title: "Operations Management Platform Case Study | Grace",
  description:
    "An inventory and facility management platform for a nonprofit, replacing years of manual processes with one system.",
  openGraph: {
    title: "Operations Management Platform Case Study | Grace",
    description:
      "An inventory and facility management platform for a nonprofit, replacing years of manual processes with one system.",
    images: ["/projects/Logistic/hero.png"],
  },
};

export default function Page() {
  return <ProjectClient />;
}

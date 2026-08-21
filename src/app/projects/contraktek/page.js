import ProjectClient from "./ProjectClient";

export const metadata = {
  title: "Contraktek Case Study — Grace",
  description:
    "A procurement trust platform for Nigeria's construction industry — built to give clients, vendors, and internal teams a shared, legible source of truth for money, materials, and delivery.",
  openGraph: {
    title: "Contraktek Case Study — Grace",
    description:
      "A procurement trust platform for Nigeria's construction industry — built to give clients, vendors, and internal teams a shared, legible source of truth for money, materials, and delivery.",
    images: ["/projects/contraktek/hero.png"],
  },
};

export default function Page() {
  return <ProjectClient />;
}

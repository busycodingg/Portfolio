import ProjectClient from "./ProjectClient";

const description =
  "A website and admin portal for a Lagos children's clinic, built to turn a parent's worry into a booked consultation.";

export const metadata = {
  title: "Whitestone Case Study | Grace",
  description,
  openGraph: {
    title: "Whitestone Case Study | Grace",
    description,
    images: ["/projects/whitestone/hero.jpg"],
  },
};

export default function Page() {
  return <ProjectClient />;
}

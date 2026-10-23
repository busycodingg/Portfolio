import ProjectClient from "./ProjectClient";

const description =
  "A website for a Lagos clinic supporting neurodiverse children, designed and written so parents who aren't sure where to start can understand the services, see the path ahead, and book a free consultation.";

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

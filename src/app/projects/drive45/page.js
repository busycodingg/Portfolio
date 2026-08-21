import ProjectClient from "./ProjectClient";

export const metadata = {
  title: "Drive45 Mobility Case Study — Grace",
  description:
    "Most Nigerians can't afford a vehicle outright. Drive45 changes that through a rent-to-own subscription model, designed from scratch and now putting people in cars across Nigeria.",
  openGraph: {
    title: "Drive45 Mobility Case Study — Grace",
    description:
      "Most Nigerians can't afford a vehicle outright. Drive45 changes that through a rent-to-own subscription model, designed from scratch and now putting people in cars across Nigeria.",
    images: ["/projects/drive45/hero.png"],
  },
};

export default function Page() {
  return <ProjectClient />;
}

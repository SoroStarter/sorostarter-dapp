import Footer from "../common/Footer";
import Hero from "./Hero";
import Highlight from "./Highlight";
import StarterFlow from "./StarterFlow";
import Statistics from "./Statistics";
import Subscribe from "./Subscribe";
import UpcomingProjects from "../../components/UpcomingProjects";
import { projectList } from "../projects/project-list";
import { useLocation } from "react-router-dom";
import Projects2 from "../../components/Projects2";

export default function HomePage() {
  const { pathname } = useLocation();

  console.log("current path is", pathname);
  return (
    <div className="mt-16 ">
      <Hero />
      <Statistics />
      <Highlight />
      <StarterFlow />
      <Projects2 projectList={projectList} />
      {/* <UpcomingProjects projectList={projectList} /> */}
    </div>
  );
}

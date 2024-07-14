import UpcomingProjects from "../../components/UpcomingProjects";
import { Link } from "react-router-dom";
import { projectList } from "./project-list";
import ProjectCard from "../../components/ProjectCard";
import Projects2 from "../../components/Projects2";

export default function Projects() {
  return (
    <div className="mt-16 ">
      {/* <UpcomingProjects projectList={projectList} /> */}
      <Projects2 />
    </div>
  );
}

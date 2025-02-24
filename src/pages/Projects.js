import React from "react";
import { Link } from "react-router-dom";
import Main from "../layouts/Main";

// 컴포넌트들 import
import Projects from "../components/Projects/Projects";
import ProjectAchievements from "../components/Projects/ProjectAchievements";

// 데이터 import
import projects from "../data/projects";
import achievements from "../data/projects/achievements";

// 섹션 정의
const sections = {
  Projects: () => <Projects data={projects} />,
  Achievements: () => <ProjectAchievements data={achievements} />,
};

const ProjectsPage = () => (
  <Main title="Projects">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <div
            className="link-container"
            style={{ display: "flex", gap: "2rem" }}
          >
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default ProjectsPage;

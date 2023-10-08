import React from "react";
import ProjectCard from "./../components/ProjectCard";

export const projectsData = [
  {
    id: 1,
    title: "Rent Workspace Website",
    description:
      "A website that allows users to manage workspace rental data for personal or business use. Internship project at PT. Basicteknologi",
    image: "/images/project1.webp",
    stack: "Laravel, Bootstrap, MySQL",
    gitUrl: "https://github.com/miqbalps/crm-app",
    previewUrl: "",
  },
  {
    id: 2,
    title: "AMS KDC Website",
    description:
      "A website that allows users to manage data assets and mining products of KDC and PT. JIM. Project at CV. Bilga Buana Technology",
    image: "/images/project2.webp",
    stack: "CI 3, Bootstrap, MySQL",
    gitUrl: "",
    previewUrl: "http://kdc.ptjim.cloud/login",
  },
  {
    id: 3,
    title: "My Portfolio Website",
    description:
      "Website that contains the results of my work and that you are currently viewing",
    image: "/images/project3.webp",
    stack: "NextJs, TailwindCss",
    gitUrl: "https://github.com/miqbalps/miqbalps.github.io",
    previewUrl: "",
  },
];

const ProjectPage = () => {
  return (
    <div>
      <h1 className="text-center md:text-start text-4xl text-neutral-800 dark:text-neutral-100 font-bold mb-4">
        Featured Projects
      </h1>
      <h3 className="mb-6">
        Check out my github repository for my other works
      </h3>
      <div className="w-full items-center flex flex-col md:flex-row md:flex-wrap justify-center gap-6 lg:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            stack={project.stack}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;

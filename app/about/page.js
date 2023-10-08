import React from "react";
import {
  TbBriefcase,
  TbSchool,
  TbBrandLaravel,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandBootstrap,
  TbBrandTailwind,
  TbBrandMysql,
  TbBrandPhp,
  TbBrandReact,
  TbBrandNextjs,
} from "react-icons/tb";
import {
  WorkTimeline,
  EducationTimeline,
} from "./../components/TimelineComponent";

function AboutPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-center flex gap-2 lg:text-start text-4xl text-neutral-800 dark:text-neutral-100 font-bold mb-4">
          Technology I Use
        </h1>
        <div className="flex text-4xl ps-6">
          <TbBrandHtml5 />
          <TbBrandCss3 />
          <TbBrandBootstrap />
          <TbBrandTailwind />
          <TbBrandJavascript />
          <TbBrandReact />
          <TbBrandNextjs />
          <TbBrandPhp />
          <TbBrandLaravel />
          <TbBrandMysql />
        </div>
      </div>
      <div>
        <h1 className="text-center flex gap-2 lg:text-start text-4xl text-neutral-800 dark:text-neutral-100 font-bold mb-4">
          <TbBriefcase /> Work Experience
        </h1>
        <WorkTimeline />
      </div>
      <div>
        <h1 className="text-center flex gap-2 lg:text-start text-4xl text-neutral-800 dark:text-neutral-100 font-bold mb-4">
          <TbSchool /> Education
        </h1>
        <EducationTimeline />
      </div>
    </>
  );
}

export default AboutPage;

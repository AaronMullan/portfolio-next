"use client";
import { Card } from "./Card";
import { projectsData } from "../data/projectsData";

export function Cardgrid() {
  return (
    <div
      className={`mb-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3`}
    >
      {projectsData.map((project) => {
        const { title, image, description, siteUrl, codeUrl } = project;
        return (
          <Card
            key={title}
            image={image}
            title={title}
            description={description}
            siteUrl={siteUrl}
            codeUrl={codeUrl}
          />
        );
      })}
    </div>
  );
}

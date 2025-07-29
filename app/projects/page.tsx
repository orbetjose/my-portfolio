import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";
import Card from "app/components/card";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Nextfolio Proyectos",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            year={project.year}
            description={project.description}
            url={project.url}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

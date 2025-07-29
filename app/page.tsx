import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.jpeg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 "
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium ">Orbet Lozada</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Más de 3 años de experiencia como Desarrollador Web. Actualmente formo
          parte del equipo que gestiona y desarrolla componentes web para el
          portal Claro Colombia, también me encargo de dar solución a
          solicitudes y propuestas.
        </p>
        <p>
          Conocimiento en tecnologías web modernas como React, Next.js y
          TailwindCSS. Conozco también sobre PHP, Node.js, Wordpress, Hubstpot,
          Hosting compartidos, entre otros.
        </p>
        <p>
          Trabajo y me esfuerzo dia a dia para mejorar como desarrollador, mi
          meta actual es dar el salto y trabajar y colaborar para una empresa
          que ofrezca soluciones innovadoras y escalables.
        </p>
      </div>
    </section>
  );
}

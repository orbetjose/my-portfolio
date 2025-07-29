export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "PrudentialSAF",
    year: 2023,
    description: "Administradora de Fondos, empresa de grupo Habitat.",
    url: "https://prudentialsaf.com.pe/",
    image: "/projects/pru.webp"
  },
  {
    title: "Aquaspacios",
    year: 2023,
    description: "Empresa especializada en ventas y mantenimiento de jacuzzis",
    url: "https://aquaspacios.pe/",
    image: "/projects/aqua.webp"

  },
  {
    title: "Halona Development",
    year: 2024,
    description: "Empresa constructora de proyectos inmobiliarios",
    url: "https://halonadevelopmentgroup.com/home/",
    image: "/projects/halona.webp"

  },
  {
    title: "Uberrimo Homes",
    year: 2025,
    description: "Empresa constructora de proyectos inmobiliarios",
    url: "https://uberrimohomes.com/",
    image: "/projects/uberrimo.webp"

  },
  {
    title: "Ugaturismo",
    year: 2025,
    description: "Empresa especializada en organización de viajes",
    url: "https://ugaturismo.com/",
    image: "/projects/uga.webp"

  },
  {
    title: "Go Travel",
    year: 2025,
    description: "Empresa especializada en organización de viajes",
    url: "https://gotravel.com.co/",
    image: "/projects/gotravel.webp"

  },
];


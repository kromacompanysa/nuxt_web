export default defineAppConfig({
  navbar: [
    {
      label: "¿Nuestra historia?",
      href: "/about",
      type: "link",
    },
    {
      label: "Soy Paciente",
      type: "dropdown",
      href: "/pacientes",
      items: [
        {
          label: "Periodoncia",
          href: "/pacientes/periodoncia",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Odontología restauradora",
          href: "/pacientes/odontologia-restauradora",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Endodoncia",
          href: "/pacientes/endodoncia",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Ortodoncia",
          href: "/pacientes/ortodoncia",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Estética",
          href: "/pacientes/estetica",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Rehabilitación oral",
          href: "/pacientes/rehabilitacion-oral",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Implantología",
          href: "/pacientes/implantologia",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Cirugía",
          href: "/pacientes/cirugia",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Prótesis",
          href: "/pacientes/protesis",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Odontopediatría",
          href: "/pacientes/odontopediatria",
          image: "/images/grid_01.jpeg",
        },
      ],
    },
    {
      label: "Cursos",
      type: "dropdown",
      href: "/cursos",
      items: [
        {
          label: "Fotografía odontológica",
          href: "/cursos/fotografia-odontologica",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Prótesis completa",
          href: "/cursos/protesis-completa",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Resinas con guía transparente",
          href: "/cursos/resinas-guia-transparente",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Operatoria",
          href: "/cursos/operatoria",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Rehabilitación oral",
          href: "/cursos/rehabilitacion-oral",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Resinas estratificadas",
          href: "/cursos/resinas-estratificadas",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Endodoncia",
          href: "/cursos/endodoncia",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Periodoncia e implantes",
          href: "/cursos/periodoncia-implantes",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Ortodoncia",
          href: "/cursos/ortodoncia",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Odontología digital",
          href: "/cursos/odontologia-digital",
          image: "/images/grid_01.jpeg",
        },
      ],
    },
    {
      label: "Laboratorio Digital",
      type: "dropdown",
      href: "/laboratorio",
      items: [
        {
          label: "Diseño digital",
          href: "/laboratorio/diseno-digital",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Impresión 3D",
          href: "/laboratorio/impresion-3d",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Escaneo intraoral",
          href: "/laboratorio/escaneo-intraoral",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Modelado CAD",
          href: "/laboratorio/modelado-cad",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Simulación oclusal",
          href: "/laboratorio/simulacion-oclusal",
          image: "/images/grid_01.jpeg",
        },
        {
          label: "Planificación digital",
          href: "/laboratorio/planificacion-digital",
          image: "/images/grid_01.jpeg",
        },
      ],
    },
    {
      label: "Contacto",
      href: "/contact",
      type: "link",
    },
    {
      label: "Cart",
      href: "/cart",
      type: "cart",
      badge: 0,
    },
  ],
  gallery: [
    "~/assets/images/grid_01.jpeg",
    "~/assets/images/grid_01.jpeg",
    "~/assets/images/grid_01.jpeg",
    "~/assets/images/grid_01.jpeg",
    "~/assets/images/grid_01.jpeg",
    "~/assets/images/grid_01.jpeg",
  ],
});

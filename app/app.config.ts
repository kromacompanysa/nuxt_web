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
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Odontología restauradora",
          href: "/pacientes/odontologia-restauradora",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Endodoncia",
          href: "/pacientes/endodoncia",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Ortodoncia",
          href: "/pacientes/ortodoncia",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Estética",
          href: "/pacientes/estetica",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Rehabilitación oral",
          href: "/pacientes/rehabilitacion-oral",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Implantología",
          href: "/pacientes/implantologia",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Cirugía",
          href: "/pacientes/cirugia",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Prótesis",
          href: "/pacientes/protesis",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Odontopediatría",
          href: "/pacientes/odontopediatria",
          image: "/images/pre_post_01.jpg",
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
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Prótesis completa",
          href: "/cursos/protesis-completa",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Resinas con guía transparente",
          href: "/cursos/resinas-guia-transparente",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Operatoria",
          href: "/cursos/operatoria",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Rehabilitación oral",
          href: "/cursos/rehabilitacion-oral",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Resinas estratificadas",
          href: "/cursos/resinas-estratificadas",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Endodoncia",
          href: "/cursos/endodoncia",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Periodoncia e implantes",
          href: "/cursos/periodoncia-implantes",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Ortodoncia",
          href: "/cursos/ortodoncia",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Odontología digital",
          href: "/cursos/odontologia-digital",
          image: "/images/pre_post_01.jpg",
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
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Impresión 3D",
          href: "/laboratorio/impresion-3d",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Escaneo intraoral",
          href: "/laboratorio/escaneo-intraoral",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Modelado CAD",
          href: "/laboratorio/modelado-cad",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Simulación oclusal",
          href: "/laboratorio/simulacion-oclusal",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Planificación digital",
          href: "/laboratorio/planificacion-digital",
          image: "/images/pre_post_01.jpg",
        },
      ],
    },
    {
      label: "Contacto",
      href: "/contact",
      type: "link",
    },
    {
      label: "productos",
      href: "/productos",
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
    "~/assets/images/pre_post_01.jpg",
    "~/assets/images/pre_post_01.jpg",
    "~/assets/images/pre_post_01.jpg",
    "~/assets/images/pre_post_01.jpg",
    "~/assets/images/pre_post_01.jpg",
    "~/assets/images/pre_post_01.jpg",
  ],
});

export default defineAppConfig({
  navbar: [
    {
      label: "Nosotros",
      href: "/about",
      type: "link",
    },
    {
      label: "Consultorio",
      type: "dropdown",
      href: "/consultorio",
      items: [
        {
          label: "Periodoncia",
          href: "/consultorio/periodoncia",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Odontología restauradora",
          href: "/consultorio/odontologia-restauradora",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Endodoncia",
          href: "/consultorio/endodoncia",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Ortodoncia",
          href: "/consultorio/ortodoncia",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Estética",
          href: "/consultorio/estetica",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Rehabilitación oral",
          href: "/consultorio/rehabilitacion-oral",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Implantología",
          href: "/consultorio/implantologia",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Cirugía",
          href: "/consultorio/cirugia",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Prótesis",
          href: "/consultorio/protesis",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Odontopediatría",
          href: "/consultorio/odontopediatria",
          image: "/images/pre_post_01.jpg",
        },
      ],
    },
    {
      label: "Academia",
      type: "dropdown",
      href: "/academia",
      items: [
        {
          label: "Fotografía odontológica",
          href: "/academia/fotografia-odontologica",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Prótesis completa",
          href: "/academia/protesis-completa",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Resinas con guía transparente",
          href: "/academia/resinas-guia-transparente",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Operatoria",
          href: "/academia/operatoria",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Rehabilitación oral",
          href: "/academia/rehabilitacion-oral",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Resinas estratificadas",
          href: "/academia/resinas-estratificadas",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Endodoncia",
          href: "/academia/endodoncia",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Periodoncia e implantes",
          href: "/academia/periodoncia-implantes",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Ortodoncia",
          href: "/academia/ortodoncia",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "Odontología digital",
          href: "/academia/odontologia-digital",
          image: "/images/pre_post_01.jpg",
        },
      ],
    },
    {
      label: "Laboratorio",
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
      label: "Productos",
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

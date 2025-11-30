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
      items: [
        { label: "Periodoncia", href: "/pacientes/periodoncia" },
        {
          label: "Odontología restauradora",
          href: "/pacientes/odontologia-restauradora",
        },
        { label: "Endodoncia", href: "/pacientes/endodoncia" },
        { label: "Ortodoncia", href: "/pacientes/ortodoncia" },
        { label: "Estética", href: "/pacientes/estetica" },
        {
          label: "Rehabilitación oral",
          href: "/pacientes/rehabilitacion-oral",
        },
        { label: "Implantología", href: "/pacientes/implantologia" },
        { label: "Cirugía", href: "/pacientes/cirugia" },
        { label: "Prótesis", href: "/pacientes/protesis" },
        { label: "Odontopediatría", href: "/pacientes/odontopediatria" },
      ],
    },
    {
      label: "Cursos",
      type: "dropdown",
      items: [
        {
          label: "Fotografía odontológica",
          href: "/cursos/fotografia-odontologica",
        },
        { label: "Prótesis completa", href: "/cursos/protesis-completa" },
        {
          label: "Resinas con guía transparente",
          href: "/cursos/resinas-guia-transparente",
        },
        { label: "Operatoria", href: "/cursos/operatoria" },
        { label: "Rehabilitación oral", href: "/cursos/rehabilitacion-oral" },
        {
          label: "Resinas estratificadas",
          href: "/cursos/resinas-estratificadas",
        },
        { label: "Endodoncia", href: "/cursos/endodoncia" },
        {
          label: "Periodoncia e implantes",
          href: "/cursos/periodoncia-implantes",
        },
        { label: "Ortodoncia", href: "/cursos/ortodoncia" },
        { label: "Odontología digital", href: "/cursos/odontologia-digital" },
      ],
    },
    {
      label: "Laboratorio Digital",
      type: "dropdown",
      items: [
        { label: "Diseño digital", href: "/laboratorio/diseno-digital" },
        { label: "Impresión 3D", href: "/laboratorio/impresion-3d" },
        { label: "Escaneo intraoral", href: "/laboratorio/escaneo-intraoral" },
        { label: "Modelado CAD", href: "/laboratorio/modelado-cad" },
        {
          label: "Simulación oclusal",
          href: "/laboratorio/simulacion-oclusal",
        },
        {
          label: "Planificación digital",
          href: "/laboratorio/planificacion-digital",
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

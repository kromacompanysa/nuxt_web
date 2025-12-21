export default defineAppConfig({
  navbar: [
    {
      label: "nosotros",
      href: "/nosotros",
      type: "dropdown",
      items: [
        {
          label: "historia",
          type: "link",
          image: "/images/pre_post_01.jpg",
          href: "/nosotros/historia",
        },
        {
          label: "contacto",
          type: "link",
          image: "/images/pre_post_01.jpg",
          href: "/nosotros/contacto",
          email_from: "zultanete@gmail.pe",
          email_to: "jorgeav527@gmail.com",
        },
        {
          label: "ubicacion",
          type: "link",
          image: "/images/pre_post_01.jpg",
          href: "/nosotros/ubicacion",
          mapUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.1912766416547!2d-71.5234735430459!3d-16.409874778330668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b0239f9f507%3A0x8587ee56077b30a2!2sAv.%20Lambramani%20175%2C%20Arequipa%2004002!5e0!3m2!1sen!2spe!4v1764101713789!5m2!1sen!2spe",
          mapLink:
            "https://www.google.com/maps/place/Av.+Lambramani+175,+Arequipa+04002",
        },
      ],
    },
    {
      label: "consultorio",
      type: "dropdown",
      href: "/consultorio",
      items: [
        {
          label: "especialidades",
          href: "/consultorio/especialidades",
          image: "/images/pre_post_01.jpg",
          type: "group",
          items: [
            {
              label: "periodoncia",
              href: "/consultorio/especialidades/periodoncia",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "odontología restauradora",
              href: "/consultorio/especialidades/odontologia-restauradora",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "endodoncia",
              href: "/consultorio/especialidades/endodoncia",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "ortodoncia",
              href: "/consultorio/especialidades/ortodoncia",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "estética",
              href: "/consultorio/especialidades/estetica",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "rehabilitación oral",
              href: "/consultorio/especialidades/rehabilitacion-oral",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "implantología",
              href: "/consultorio/especialidades/implantologia",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "cirugía",
              href: "/consultorio/especialidades/cirugia",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "prótesis",
              href: "/consultorio/especialidades/protesis",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "odontopediatría",
              href: "/consultorio/especialidades/odontopediatria",
              image: "/images/pre_post_01.jpg",
            },
          ],
        },
        {
          label: "seguros",
          href: "/consultorio/seguros",
          image: "/images/pre_post_01.jpg",
          type: "group",
          items: [
            {
              label: "asegurarte",
              href: "/consultorio/seguros/asegurarte",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "asegurado",
              href: "/consultorio/seguros/asegurado",
              image: "/images/pre_post_01.jpg",
            },
          ],
        },
      ],
    },
    {
      label: "academia",
      type: "dropdown",
      href: "/academia",
      items: [
        {
          label: "especialidades",
          href: "/academia/especialidades",
          image: "/images/pre_post_01.jpg",
          type: "group",
          items: [
            {
              label: "fotografía odontológica",
              href: "/academia/especialidades/fotografia-odontologica",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "prótesis completa",
              href: "/academia/especialidades/protesis-completa",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "resinas con guía transparente",
              href: "/academia/especialidades/resinas-guia-transparente",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "operatoria",
              href: "/academia/especialidades/operatoria",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "rehabilitación oral",
              href: "/academia/especialidades/rehabilitacion-oral",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "resinas estratificadas",
              href: "/academia/especialidades/resinas-estratificadas",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "endodoncia",
              href: "/academia/especialidades/endodoncia",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "periodoncia e implantes",
              href: "/academia/especialidades/periodoncia-implantes",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "ortodoncia",
              href: "/academia/especialidades/ortodoncia",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "odontología digital",
              href: "/academia/especialidades/odontologia-digital",
              image: "/images/pre_post_01.jpg",
            },
          ],
        },
        {
          label: "cursos",
          href: "/academia/cursos",
          image: "/images/pre_post_01.jpg",
          type: "group",
          items: [
            {
              label: "curso intensivo",
              href: "/academia/cursos/resinas-intensivo",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "curso práctico de endodoncia",
              href: "/academia/cursos/endodoncia-practica",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "curso de fotografía clínica",
              href: "/academia/cursos/fotografia-clinica",
              image: "/images/pre_post_01.jpg",
            },
          ],
        },
        {
          label: "especiales",
          href: "/academia/especiales",
          image: "/images/pre_post_01.jpg",
          type: "group",
          items: [
            {
              label: "workshops",
              href: "/academia/especiales/workshops",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "certificaciones",
              href: "/academia/especiales/certificaciones",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "recidencia",
              href: "/academia/especiales/recidencia",
              image: "/images/pre_post_01.jpg",
            },
          ],
        },
      ],
    },
    {
      label: "laboratorio",
      type: "dropdown",
      href: "/laboratorio",
      items: [
        {
          label: "especialidades",
          href: "/laboratorio/especialidades",
          image: "/images/pre_post_01.jpg",
          type: "group",
          items: [
            {
              label: "diseño digital",
              href: "/laboratorio/especialidades/diseno-digital",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "impresión 3d",
              href: "/laboratorio/especialidades/impresion-3d",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "escaneo intraoral",
              href: "/laboratorio/especialidades/escaneo-intraoral",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "modelado cad",
              href: "/laboratorio/especialidades/modelado-cad",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "simulacion oclusal",
              href: "/laboratorio/especialidades/simulacion-oclusal",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "planificación digital",
              href: "/laboratorio/especialidades/planificacion-digital",
              image: "/images/pre_post_01.jpg",
            },
          ],
        },
        {
          label: "servicios",
          href: "/laboratorio/servicios",
          image: "/images/pre_post_01.jpg",
          type: "group",
          items: [
            {
              label: "diseño de prótesis",
              href: "/laboratorio/servicios/diseno-protesis",
            },
            {
              label: "guías quirúrgicas",
              href: "/laboratorio/servicios/guias-quirurgicas",
            },
            {
              label: "flujo digital completo",
              href: "/laboratorio/servicios/flujo-digital",
            },
          ],
        },
      ],
    },
    {
      label: "productos",
      href: "/productos",
      type: "dropdown",
      items: [
        {
          label: "proceso",
          type: "link",
          href: "/productos/proceso",
          image: "/images/pre_post_01.jpg",
        },
        {
          label: "terminos",
          type: "link",
          href: "/productos/terminos",
          image: "/images/pre_post_01.jpg",
        },
      ],
    },
    {
      label: "carrito",
      href: "/carrito",
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

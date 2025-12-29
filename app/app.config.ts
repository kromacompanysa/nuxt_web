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
          label: "especialidad",
          href: "/academia/especialidad",
          image: "/images/pre_post_01.jpg",
          type: "group",
          items: [
            {
              label: "fotografía odontológica",
              href: "/academia/especialidad/fotografia-odontologica",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "prótesis completa",
              href: "/academia/especialidad/protesis-completa",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "resinas con guía transparente",
              href: "/academia/especialidad/resinas-guia-transparente",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "operatoria",
              href: "/academia/especialidad/operatoria",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "rehabilitación oral",
              href: "/academia/especialidad/rehabilitacion-oral",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "resinas estratificadas",
              href: "/academia/especialidad/resinas-estratificadas",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "endodoncia",
              href: "/academia/especialidad/endodoncia",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "periodoncia e implantes",
              href: "/academia/especialidad/periodoncia-implantes",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "ortodoncia",
              href: "/academia/especialidad/ortodoncia",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "odontología digital",
              href: "/academia/especialidad/odontologia-digital",
              image: "/images/pre_post_01.jpg",
            },
          ],
        },
        {
          label: "cursos virtuales",
          href: "/academia/cursos-virtuales",
          image: "/images/pre_post_01.jpg",
          type: "group",
          items: [
            {
              label: "curso intensivo virtual",
              href: "/academia/cursos-virtuales/resinas-intensivo",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "curso endodoncia virtual",
              href: "/academia/cursos-virtuales/endodoncia",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "fotografía clínica virtual",
              href: "/academia/cursos-virtuales/fotografia-clinica",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "no sé virtual",
              href: "/academia/cursos-virtuales/no-se",
              image: "/images/pre_post_01.jpg",
            },
          ],
        },
        {
          label: "cursos presenciales",
          href: "/academia/cursos-presenciales",
          image: "/images/pre_post_01.jpg",
          type: "group",
          items: [
            {
              label: "curso intensivo presencial",
              href: "/academia/cursos-presenciales/resinas-intensivo",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "curso endodoncia",
              href: "/academia/cursos-presenciales/endodoncia",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "fotografía clínica presencial",
              href: "/academia/cursos-presenciales/fotografia-clinica",
              image: "/images/pre_post_01.jpg",
            },
            {
              label: "no sé presencial",
              href: "/academia/cursos-presenciales/no-se",
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
          label: "servicios",
          href: "/laboratorio/servicios",
          image: "/images/pre_post_01.jpg",
          type: "group",
          items: [
            {
              label: "impresión",
              href: "/laboratorio/servicios/impresion",
            },
            {
              label: "escaneo",
              href: "/laboratorio/servicios/escaneo",
            },
            {
              label: "diseño 3d",
              href: "/laboratorio/servicios/diseño-3d",
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

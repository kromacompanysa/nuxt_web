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
          content: {
            title: "Nuestra Historia",
            subtitle: "Una trayectoria de excelencia odontológica",
            sections: [
              {
                heading: "Los inicios",
                body: "Kroma nació en Arequipa en 2015 con una visión clara: crear un espacio odontológico donde la tecnología de vanguardia y el trato humano warmth se encontraran. Fundada por un equipo de odontólogos apasionados por la educación continua, la clínica creció rápidamente hasta convertirse en referente regional.",
              },
              {
                heading: "Crecimiento y especialización",
                body: "En 2017 abrimos nuestro segundo consultorio y lanzamos Kroma Academia, un programa de formación continua para profesionales dentales. Cada año, cientos de odontólogos de todo el Perú han completado nuestros programas especializados, elevando el estándar de la práctica odontológica en el país.",
              },
              {
                heading: "Tecnología e innovación",
                body: "Fuimos pioneros en Arequipa en incorporar escaneo digital intraoral y diseño 3D para rehabilitaciones. Nuestro laboratorio propio nos permite ofrecer tiempos de entrega reducidos y control total sobre la calidad de cada pieza fabricada.",
              },
              {
                heading: "Equipo y valores",
                body: "Contamos con un equipo multidisciplinario de más de 15 especialistas que comparten valores fundamentales: atención personalizada, honestidad en el diagnóstico y compromiso con resultados funcionales y estéticos de largo plazo.",
              },
              {
                heading: "Kroma hoy",
                body: "Hoy, Kroma es un ecosistema odontológico integral que combina consulta clínica, laboratorio protésico y academia de formación. Seguimos avanzando con la misma pasión del primer día: devolver sonrisas con calidad, precisión y calidez humana.",
              },
            ],
          },
        },
        {
          label: "contacto",
          type: "link",
          image: "/images/pre_post_01.jpg",
          href: "/nosotros/contacto",
          content: {
            title: "Contáctanos",
            schedule: "Lun - Sáb: 9:00 AM - 7:00 PM",
            address: "Av. Lambramani #175, Arequipa, Arequipa - Perú",
            clinicName: "Consultorio Kroma",
          },
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
    "/images/pre_post_01.jpg",
    "/images/pre_post_02.jpeg",
    "/images/pre_post_03.jpeg",
    "/images/pre_post_01.jpg",
    "/images/pre_post_01.jpg",
    "/images/pre_post_01.jpg",
  ],
  contact: {
    whatsappPhone: "51980102233",
    whatsappMessage: "Hola, quiero información sobre sus servicios 👋",
    emailFrom: "zultanete@gmail.pe",
    emailTo: "jorgeav527@gmail.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.1912766416547!2d-71.5234735430459!3d-16.409874778330668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b0239f9f507%3A0x8587ee56077b30a2!2sAv.%20Lambramani%20175%2C%20Arequipa%2004002!5e0!3m2!1sen!2spe!4v1764101713789!5m2!1sen!2spe",
    mapLink: "https://www.google.com/maps/place/Av.+Lambramani+175,+Arequipa+04002",
  },

  legal: {
    politicasTerminos: {
      title: "Términos de Servicio",
      lastUpdated: "10 de mayo de 2026",
      sections: [
        {
          heading: "1. Aceptación de los términos",
          body: "Al acceder y utilizar este sitio web, usted acepta cumplir con los presentes términos y condiciones en su totalidad. Si no está de acuerdo con alguno de estos términos, le solicitamos que no utilice este sitio.",
        },
        {
          heading: "2. Servicios odontológicos",
          body: "Kroma ofrece servicios de odontología general y especializada. Todos los tratamientos son realizados por profesionales licenciados. Los resultados pueden variar según cada caso clínico, y Kroma no garantiza resultados específicos.",
        },
        {
          heading: "3. Reserva de citas",
          body: "Las citas pueden ser reservadas a través de WhatsApp, teléfono o nuestro formulario en línea. Se solicita puntualidad; retrasos mayores a 15 minutos podrían requerir reprogramación. Cancelaciones deben realizarse con al menos 24 horas de anticipación.",
        },
        {
          heading: "4. Academia y cursos",
          body: "Los cursos ofrecidos por Kroma Academia tienen cupos limitados. El contenido académico es propiedad intelectual de Kroma y está protegido por derechos de autor. Queda prohibida su reproducción sin autorización expresa.",
        },
        {
          heading: "5. Política de pagos",
          body: "Los pagos por servicios y productos deben realizarse según las indicaciones del personal de Kroma. Aceptamos pagos en efectivo, transferencia bancaria y tarjetas de crédito/débito según disponibilidad.",
        },
        {
          heading: "6. Propiedad intelectual",
          body: "Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes y software, es propiedad de Kroma o de sus licenciantes y está protegido por las leyes de propiedad intelectual del Perú.",
        },
        {
          heading: "7. Limitación de responsabilidad",
          body: "Kroma no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso de este sitio web o de los servicios ofrecidos, en la máxima medida permitida por la ley.",
        },
        {
          heading: "8. Modificaciones",
          body: "Kroma se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en este sitio. Se recomienda revisar periódicamente esta sección.",
        },
        {
          heading: "9. Ley aplicable",
          body: "Los presentes términos se rigen por las leyes del Perú. Cualquier controversia será sometida a los tribunales de Arequipa, Perú.",
        },
        {
          heading: "10. Contacto",
          body: "Para consultas sobre estos términos, puede contactarnos a través de nuestro formulario en línea, por WhatsApp o al correo electrónico indicado en la sección de contacto.",
        },
      ],
    },

    politicasReembolso: {
      title: "Política de Reembolso",
      lastUpdated: "10 de mayo de 2026",
      sections: [
        {
          heading: "1. Ámbito de aplicación",
          body: "La presente política aplica a todos los servicios odontológicos, productos y cursos adquiridos a través de Kroma. Esta política cumple con el Código de Protección y Defensa del Consumidor del Perú.",
        },
        {
          heading: "2. Servicios odontológicos",
          body: "Dado que los servicios odontológicos son personalizados según las necesidades de cada paciente, no se realizan reembolsos una vez iniciado el tratamiento. En caso de cancelación con 48 horas de anticipación, se evaluará cada caso de forma individual.",
        },
        {
          heading: "3. Productos",
          body: "Los productos adquiridos (materiales, equipos dentales) pueden ser devueltos dentro de los 7 días hábiles únicamente si presentan defectos de fábrica. El producto debe estar en su empaque original y sin uso. No se acceptan devoluciones de productos personalizados.",
        },
        {
          heading: "4. Cursos y academía",
          body: "Los cursos de Kroma Academia tienen política de reembolso del 100% si la cancelación se realiza 15 días antes del inicio del curso. Entre 7 y 14 días antes, se reembolsará el 50%. Menos de 7 días antes no habrá reembolso. Los cursos virtuales no tienen reembolso una vez iniciado el acceso.",
        },
        {
          heading: "5. Procedimiento de reembolso",
          body: "Para solicitar un reembolso, el cliente debe presentar su solicitud por escrito al correo de contacto indicando el número de comprobante de pago, motivo de la solicitud y datos de contacto. Kroma evaluará la solicitud en un plazo máximo de 10 días hábiles.",
        },
        {
          heading: "6. Tiempos de devolución",
          body: "Una vez aprobada la solicitud de reembolso, la devolución se realizará en un plazo de 15 a 30 días hábiles mediante transferencia bancaria a la cuenta del titular de la compra o al medio de pago original.",
        },
        {
          heading: "7. Casos especiales",
          body: "En situaciones excepcionales como emergencia médica o causa mayor justificada, Kroma evaluará cada caso para ofrecer alternativas como crédito para futuros servicios, cambio de fecha de cita o solución equitativa acordada mutuamente.",
        },
        {
          heading: "8. Cambios en la política",
          body: "Kroma se reserva el derecho de modificar esta política. Los cambios serán comunicados a través del sitio web. Las compras realizadas antes de la fecha de vigencia del cambio se regirán por la política vigente al momento de la transacción.",
        },
      ],
    },

    productosTerminos: {
      title: "Términos y Condiciones de Compra",
      lastUpdated: "10 de mayo de 2026",
      sections: [
        {
          heading: "1. Información del producto",
          body: "Kroma se esforzça por mostrar imágenes y descripciones precisas de todos los productos. Sin embargo, las fotografías son referenciales y pueden diferir ligeramente del producto final debido a variaciones en monitores y procesos de fabricación.",
        },
        {
          heading: "2. Precios",
          body: "Los precios de los productos están indicados en soles peruanos (PEN) e incluyen IGV cuando aplique. Kroma se reserva el derecho de modificar precios sin previo aviso. El precio vigente es el publicado en el momento de la confirmación de la compra.",
        },
        {
          heading: "3. Proceso de compra",
          body: "Para adquirir productos, el cliente debe agregar los items al carrito, revisar su pedido y confirmar la compra. La orden se confirmará vía WhatsApp o correo electrónico. El pedido estará listo para recojo o envío una vez confirmado el pago.",
        },
        {
          heading: "4. Formas de pago",
          body: "Aceptamos pago en efectivo (solo recojo en local), transferencia bancaria y pagos con tarjeta de crédito/débito a través de nuestro link de pago seguro. Los pagos con tarjeta pueden tener recargo según el medio.",
        },
        {
          heading: "5. Envío y entrega",
          body: "Ofrecemos recojo en local sin costo adicional. Para envíos a domicilio en Arequipa, se cobra una tarifa fija por zona. Envíos a otras ciudades se coordinan individualmente. Los tiempos de entrega varían entre 24 y 72 horas según disponibilidad.",
        },
        {
          heading: "6. Garantía",
          body: "Todos los productos cuentan con garantía contra defectos de fábrica. La garantía no cubre daños por mal uso, almacenamiento inadecuado o desgaste normal. El período de garantía se indica en el comprobante de pago de cada producto.",
        },
        {
          heading: "7. Uso responsable",
          body: "Los productos de uso odontológico profesional deben ser adquiridos por profesionales licenciados. Kroma no se responsabiliza por el uso inadecuado de sus productos por personas no calificadas.",
        },
        {
          heading: "8. Privacidad",
          body: "La información personal recopilada durante el proceso de compra se utiliza únicamente para procesar pedidos y mejorar nuestro servicio. No compartimos sus datos con terceros sin su consentimiento, salvo requerimiento legal.",
        },
      ],
    },

    productosProceso: {
      title: "Proceso de Compra",
      lastUpdated: "10 de mayo de 2026",
      steps: [
        {
          number: "01",
          heading: "Explora nuestro catálogo",
          body: "Navega por las categorías de productos. Puedes filtrar por tipo, marca o aplicación. Si tienes dudas sobre un producto específico, contáctanos por WhatsApp para recibir asesoría personalizada.",
        },
        {
          number: "02",
          heading: "Agrega al carrito",
          body: "Selecciona los productos y cantidades que necesitas. Revisa tu carrito antes de confirmar. Los precios shown son por unidad e incluyen IGV.",
        },
        {
          number: "03",
          heading: "Confirma tu pedido",
          body: "Al enviar tu solicitud, un asesor de Kroma se comunicará contigo por WhatsApp para confirmar disponibilidad, totales y acordar el método de pago.",
        },
        {
          number: "04",
          heading: "Realiza el pago",
          body: "Puedes pagar mediante transferencia bancaria, efectivo (recojo en local) o link de pago con tarjeta. Tu pedido se procesa al recibir la confirmación de pago.",
        },
        {
          number: "05",
          heading: "Recibe tu pedido",
          body: "Puedes recoger tu pedido en Av. Lambramani #175, Arequipa, o solicitar envío a domicilio. Los envíos fuera de Arequipa se coordinan individualmente. Recibes tu comprobante de pago junto con el pedido.",
        },
      ],
    },
  },
});

export const PAGES_DATA = {
  HOME: {
    title: "UAR - ESPE",
    subtitle: "Sistema de turnos",
    sliderImages: [
      "/assets/images/home_2.jpg",
      "/assets/images/home_3.jpg",
      "/assets/images/home_4.jpg",
      "/assets/images/home_5.jpg",
      "/assets/images/home_6.jpg",
      "/assets/images/home_7.jpg",
    ],
  },
  APP_SERVICES: {
    title: "Servicios ofrecidos",
    services: [
      {
        url: "/vista-de-turnos",
        title: "Visualización de turnos",
        description: `Esta pantalla brinda una vista general de los turnos asignados, 
      permitiendo a los usuarios ver de manera clara y ordenada el estado de los turnos en tiempo real.`,
        icon: "/assets/images/visualization.png",
      },
      {
        url: "/asignacion-de-turnos",
        title: "Asignación de Turnos",
        description: `Esta pantalla permite obtener un turno de acuerdo a los servicios ofrecidos por la UAR.`,
        icon: "/assets/images/calendar.png",
      },
    ],
  },
  QUEUE_VIEW: {
    title: "Turnos",
    subtitle: "Turnos actuales",
    bgImage: "/assets/images/queue-view.jpg",
  },
  SHIFT_ASSIGNMENT: {
    bgImage: "/assets/images/shift-assignment.jpg",
    services: [
      {
        slug: "informacion-de-titulos",
        name: "Información de títulos",
        description: `
          <p>Se brinda información sobre el calendario de emisión de títulos</p>
        `,
      },
      {
        slug: "counter-atencion",
        name: "Counter atención Certificaciones academicas",
        description: `
          <h2>Procesos: </h2>
          <ul>
            <li>Informacion general</li>
            <li>Certificaciones academicas</li>
            <li>Verificar el estado de un quipux</li>
          </ul>
        `,
      },
      {
        slug: "secretarios-academicos",
        name: "Secretarios académicos",
        description: `
          <h2>Procesos: </h2>
          <ul>
            <li>Reingreso</li>
            <li>Cambio de carrera</li>
            <li>Titulación</li>
            <li>Retiro voluntario</li>
          </ul>
        `,
        options: [
          {
            name: "Abg. Alexandra Duque",
            slug: "alexandra-duque",
          },
          {
            name: "Abg. Marcelo Mejía",
            slug: "marcelo-mejia",
          },
          {
            name: "Abg. Omar Saltos",
            slug: "omar-saltos",
          },
        ],
      },
    ],
  },
};

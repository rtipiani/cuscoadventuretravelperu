// src/data/paquetes-tambopata.ts

export interface Itinerario {
  horarios: string;
  detalle: string | string[];
  incluye: string[];
  noIncluye: string[];
}

export interface Paquete {
  dias: string;
  titulo: string;
  slug: string;
  descripcion: string;
  etiqueta: string;
  imagen: string;
  itinerario?: Itinerario;
}

export const paquetes: Paquete[] = [
  {
    dias: "Full Day",
    titulo: "LAGO SANDOVAL",
    slug: "lago-sandoval",
    descripcion:
      "Explora la Reserva Nacional Tambopata navegando por el río Madre de Dios, caminando por la selva y descubriendo el majestuoso Lago Sandoval. Una experiencia única con fauna, flora y un almuerzo amazónico.",
    etiqueta: "",
    imagen: "/paquetes-puerto-maldonado/lago-sandoval.avif",
    itinerario: {
      horarios: "HORARIO: 9:00 AM – 05:00 PM",
      detalle: [
        "Recepción en oficina y traslado al puerto.",
        "Navegación por el río Madre de Dios hacia la Reserva Nacional Tambopata.",
        "Caminata de 3 km (1 hora aprox.) observando fauna amazónica.",
        "Ingreso al Lago Sandoval en canoas para explorar aves, caimanes y lobos de río.",
        "Almuerzo amazónico en lodge y descanso en hamacas.",
        "Exploración vespertina en canoas observando monos y otras especies.",
        "Retorno a Puerto Maldonado en bote."
      ],
      incluye: [
        "Transporte marítimo de ida y vuelta.",
        "Guía profesional de turismo.",
        "Entrada a la Reserva Nacional Tambopata.",
        "Almuerzo local."
      ],
      noIncluye: [
        "Comidas no mencionadas.",
        "Gastos extras.",
        "Bebidas."
      ]
    }
  },
  {
    dias: "Medio Día",
    titulo: "Tour Pesca de Pirañas en el Río Tambopata",
    slug: "pesca-piranas",
    descripcion:
      "Disfruta de una experiencia única pescando pirañas en el Lago Yacumama, rodeado de aves tropicales, caimanes y un atardecer mágico.",
    etiqueta: "",
    imagen: "/paquetes-puerto-maldonado/pesca-de-piranas.avif",
    itinerario: {
      horarios:
        "HORARIOS: Mañana 5:30 AM – 8:30 AM | Tarde 3:30 PM – 6:30 PM",
      detalle: [
        "Recojo del hotel a las 3:20 PM.",
        "Traslado al Lago Yacumama (25 min desde Puerto Maldonado).",
        "Entrega de cañas ecológicas y carnada para pesca de pirañas.",
        "Caminata de 7 minutos hasta la canoa.",
        "Observación de aves tropicales y caimanes negros.",
        "Pesca de pirañas en lago rodeado de fauna.",
        "Atardecer en el lago con paisajes espectaculares."
      ],
      incluye: [
        "Traslados desde el hotel (ida y vuelta).",
        "Guía profesional de turismo.",
        "Bloqueador solar.",
        "Entradas a los sitios visitados."
      ],
      noIncluye: [
        "Propinas.",
        "Gastos extras."
      ]
    }
  },
  {
    dias: "Full Day",
    titulo: "Collpa de Guacamayos Chuncho",
    slug: "collpa-guacamayos",
    descripcion:
      "Visita la collpa de guacamayos más grande del mundo en Tambopata, observando cientos de aves en su hábitat natural y disfrutando de un desayuno tipo camping.",
    etiqueta: "OFERTA",
    imagen: "/paquetes-puerto-maldonado/collpa-de-guacamayos.avif",
    itinerario: {
      horarios: "HORARIO: 3:30 AM – 04:00 PM",
      detalle: [
        "Recojo de hoteles céntricos y traslado por carretera Interoceánica (2h).",
        "Navegación en bote por 1h30 hasta la Collpa Chuncho.",
        "Observación de loros y guacamayos comiendo arcilla.",
        "Avistamiento de fauna silvestre: capibaras, tapires, venados y ocasionalmente jaguar.",
        "Desayuno tipo camping en la selva.",
        "Retorno al albergue Hacienda Tambopata, almuerzo y caminata por la selva.",
        "Regreso a Puerto Maldonado."
      ],
      incluye: [
        "Recojo desde hoteles céntricos.",
        "Transporte en bote ida y vuelta.",
        "Guía profesional de turismo.",
        "Salvavidas.",
        "Botas de jebe para caminata.",
        "01 desayuno tipo camping.",
        "01 almuerzo.",
        "Botiquín de primeros auxilios.",
        "Seguro SOAT turístico."
      ],
      noIncluye: [
        "Alimentación no mencionada.",
        "Gastos personales."
      ]
    }
  },
  {
    dias: "Full Day",
    titulo: "Isla de los Monos – Kayak – Tirolina",
    slug: "isla-monos-kayak-tirolina",
    descripcion:
      "Combina aventura y naturaleza con kayak en el río Tambopata, tirolina en la selva y la visita a la famosa Isla de los Monos.",
    etiqueta: "",
    imagen: "/paquetes-puerto-maldonado/isla-de-los-monos.avif",
    itinerario: {
      horarios: "HORARIO: 9:00 AM – 05:30 PM",
      detalle: [
        "Recojo del hotel a las 9:00 AM.",
        "Navegación en kayak por 30 min en el río Tambopata.",
        "Avistamiento de tortugas, capibaras y aves autóctonas.",
        "Aventura en tirolina en plena selva.",
        "Almuerzo en restaurante local.",
        "Visita a la Isla de los Monos, hogar de diversas especies.",
        "Retorno a Puerto Maldonado a las 5:30 PM."
      ],
      incluye: [
        "Transporte marítimo ida y vuelta.",
        "Guía profesional de turismo.",
        "Entrada a los lugares a visitar.",
        "Almuerzo local.",
        "Equipo necesario para kayak y tirolina."
      ],
      noIncluye: [
        "Comidas no mencionadas.",
        "Gastos extras."
      ]
    }
  },
  {
    dias: "2D/1N",
    titulo: "Collpa Chuncho de Guacamayos 2D/1N",
    slug: "collpa-chuncho-2d1n",
    descripcion:
      "Explora la selva amazónica en un tour de 2 días, observando caimanes nocturnos, monos y la impresionante collpa de guacamayos Chuncho.",
    etiqueta: "",
    imagen: "/paquetes-puerto-maldonado/chuncho-de-guacamayos.avif",
    itinerario: {
      horarios: "HORARIO: Día 1 9:30 AM – Día 2 04:00 PM",
      detalle: [
        "DÍA 1 – Puerto Maldonado – Lodge – Caimaneo nocturno",
        "Recojo en hotel (9:00 – 9:30 AM).",
        "Traslado terrestre (2h) y navegación en bote (20 min) hasta lodge.",
        "Almuerzo y caminata por el bosque observando monos y aves.",
        "Subida a la torre de Canopy para ver la puesta de sol.",
        "Caminata nocturna y avistamiento de caimanes.",
        "Cena y pernocte en lodge.",
        "",
        "DÍA 2 – Collpa Chuncho – Retorno",
        "Salida 5:00 AM en bote (1h) hacia la collpa de guacamayos.",
        "Observación de guacamayos y loros alimentándose de arcilla.",
        "Visita al museo en punto de control.",
        "Almuerzo en lodge.",
        "Retorno en bote y transporte a Puerto Maldonado."
      ],
      incluye: [
        "Transporte terrestre y marítimo ida y vuelta.",
        "Guía profesional de turismo.",
        "1 noche en lodge.",
        "Entrada a la Reserva Nacional Tambopata.",
        "2 almuerzos, 1 cena, 1 desayuno.",
        "Botas de goma (en temporada de lluvias).",
        "Agua durante excursiones."
      ],
      noIncluye: [
        "Comidas no mencionadas.",
        "Gastos extras.",
        "Seguro de viaje.",
        "Bebidas adicionales."
      ]
    }
  }
];

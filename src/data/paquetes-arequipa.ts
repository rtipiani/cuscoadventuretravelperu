// src/data/paquetes-arequipa.ts

export interface Itinerario {
  horarios: string;
  detalle: string[];
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
    titulo: "Cañón del Colca",
    slug: "canon-del-colca",
    descripcion:
      "Tour al Cañón del Colca desde Arequipa: vive la experiencia de observar el vuelo del cóndor, pueblos andinos y paisajes impresionantes.",
    etiqueta: "RECOMENDADO",
    imagen: "/paquetes-arequipa/colca.avif",
    itinerario: {
      horarios: "HORARIO: 3:30 AM – 05:00 PM",
      detalle: [
        "Recojo entre 3:00 a 3:30 AM desde su hospedaje en el centro histórico.",
        "Traslado a Chivay (3 horas aprox.) y desayuno.",
        "Visita a la Cruz del Cóndor, observación del vuelo del cóndor.",
        "Paradas en miradores y pueblos: Antahuilque, Pinchollo, Maca y Yanque.",
        "Opcional: baños termales o zip line.",
        "12:00 PM Almuerzo buffet en Chivay.",
        "Retorno a Arequipa con paradas en Mirador de los Volcanes, Bofedales de Tocra, Pampa Cañahuas.",
        "Arribo a Arequipa 5:00 PM aprox."
      ],
      incluye: [
        "Recojo del hotel (Centro de Arequipa).",
        "Guía profesional de turismo.",
        "Asistencia permanente.",
        "Desayuno continental.",
        "Movilidad turística."
      ],
      noIncluye: [
        "Boleto Turístico del Colca (Peruano: S/.40, Extranjero: S/.70, Niños Estudiante: S/.5 - S/.20).",
        "Ingreso a baños termales (S/.15).",
        "Regalos y souvenirs.",
        "Snacks y bebidas.",
        "Propinas.",
        "Almuerzo buffet."
      ]
    }
  },
  {
    dias: "Medio Día",
    titulo: "Rafting en el Río Chili",
    slug: "rafting-rio-chili",
    descripcion:
      "Disfruta la adrenalina del rafting en el río Chili con rápidos clase II, III y IV, rodeado de paisajes impresionantes.",
    etiqueta: "",
    imagen: "/paquetes-arequipa/rafting.avif",
    itinerario: {
      horarios: "Duración: 3 horas",
      detalle: [
        "Recojo en punto de encuentro acordado.",
        "Traslado al río Chili (20 min).",
        "Charla de seguridad y entrega de equipos.",
        "Descenso por rápidos clase II, III y IV.",
        "Cada balsa cuenta con guía experto y kayakistas de seguridad.",
        "Observación del cañón del Chili.",
        "Retorno al punto de partida."
      ],
      incluye: [
        "Transporte en minibus (ida y vuelta).",
        "Equipo completo de rafting.",
        "Instructor en español.",
        "Kayak de seguridad.",
        "Guía de rafting.",
        "Recojo del punto acordado."
      ],
      noIncluye: [
        "Fotografías de la experiencia.",
        "Propinas.",
        "Gastos extras.",
        "Snacks.",
        "Seguro de viaje.",
        "Comida."
      ]
    }
  },
  {
    dias: "Full Day",
    titulo: "Cataratas de Capua y Aguas Termales",
    slug: "cataratas-capua",
    descripcion:
      "Explora la Catarata de Capua en Yura y relájate en sus aguas termales en un entorno natural único.",
    etiqueta: "",
    imagen: "/paquetes-arequipa/capua.avif",
    itinerario: {
      horarios: "HORARIO: 6:00 AM – 04:00 PM",
      detalle: [
        "Recojo desde hotel en Arequipa (centro histórico).",
        "Traslado hacia Yura.",
        "Caminata hacia la Catarata de Capua.",
        "Tiempo libre en la catarata para fotos y descanso.",
        "Visita a las Aguas Termales de Yura.",
        "Recorrido por el Centro Histórico de Yura.",
        "Retorno a Arequipa 4:00 PM aprox."
      ],
      incluye: [
        "Recojo desde hotel en Arequipa.",
        "Transporte ida y vuelta.",
        "Guía profesional de turismo.",
        "Botiquín de primeros auxilios."
      ],
      noIncluye: ["Gastos extras.", "Alimentación."]
    }
  },
  {
    dias: "Full Day",
    titulo: "Laguna de Salinas",
    slug: "laguna-de-salinas",
    descripcion:
      "Maravíllate con la Laguna de Salinas, espejos de agua y flamencos andinos en este tour natural cerca de Arequipa.",
    etiqueta: "OFERTA",
    imagen: "/paquetes-arequipa/salinas.avif",
    itinerario: {
      horarios: "HORARIO: 6:30 AM – 04:30 PM",
      detalle: [
        "Recojo desde hotel (zona céntrica).",
        "Parada en mirador de volcanes en Chiguata.",
        "Desayuno en el pueblo de Chiguata.",
        "Paso por Alto Simbral (4200 m.s.n.m.).",
        "Visita a la Laguna de Salinas (aves, espejos de agua, extracción de sal).",
        "Opción de baño en aguas termales de Lojen.",
        "Opción de visita a laguna Uzuña con kayak y pesca.",
        "Almuerzo en Chiguata.",
        "Retorno a Arequipa 5:00 PM aprox."
      ],
      incluye: [
        "Recojo desde hotel.",
        "Transporte compartido.",
        "Guía profesional.",
        "Kit de primeros auxilios."
      ],
      noIncluye: [
        "Alimentación (desayuno y almuerzo).",
        "Entrada a aguas termales.",
        "Boleto mini volcán Lojen (S/.5).",
        "Propinas.",
        "Gastos extra."
      ]
    }
  },
  {
    dias: "Medio Día",
    titulo: "City Tour Arequipa + Monasterio Santa Catalina",
    slug: "city-tour-arequipa",
    descripcion:
      "Recorre la Plaza de Armas, templos coloniales y culmina con el Monasterio de Santa Catalina, joya de Arequipa.",
    etiqueta: "MÁS VENDIDO",
    imagen: "/paquetes-arequipa/citytour.avif",
    itinerario: {
      horarios: "HORARIO: 9:00 AM – 12:00 PM",
      detalle: [
        "Inicio en Plaza de Armas: historia de la Catedral y portales.",
        "Visita a Iglesia de la Compañía de Jesús.",
        "Recorrido por los Claustros de la Compañía.",
        "Visita a Casa Tristán del Pozo.",
        "Plaza e Iglesia de San Francisco.",
        "Ingreso al Monasterio de Santa Catalina.",
        "Retorno al hotel 12:00 PM aprox."
      ],
      incluye: [
        "Recojo desde hotel.",
        "Guía profesional de turismo.",
        "Entrada al Monasterio de Santa Catalina."
      ],
      noIncluye: ["Alimentación.", "Souvenirs.", "Propinas."]
    }
  },
  {
    dias: "Medio Día",
    titulo: "Ruta del Sillar",
    slug: "ruta-del-sillar",
    descripcion:
      "Conoce las canteras de Añashuayco y Culebrillas, el origen del sillar y petroglifos milenarios en un recorrido cultural.",
    etiqueta: "",
    imagen: "/paquetes-arequipa/sillar.avif",
    itinerario: {
      horarios: "HORARIO: 9:00 AM – 1:00 PM",
      detalle: [
        "9:00 AM Salida hacia Cantera de Añashuayco (45 min).",
        "Recorrido por cañón de ignimbrita y megatallado de la Compañía de Jesús.",
        "Interacción con canteros y demostración de tallado.",
        "Traslado a Quebrada de Culebrillas (30 min).",
        "Caminata de 20 min observando petroglifos Wari.",
        "Retorno a Arequipa 1:00 PM."
      ],
      incluye: [
        "Recojo desde hotel.",
        "Guía profesional de turismo.",
        "Transporte turístico."
      ],
      noIncluye: [
        "Entrada Cantera Añashuayco (S/.5).",
        "Entrada Quebrada Culebrillas (S/.5).",
        "Alimentación.",
        "Souvenirs.",
        "Propinas."
      ]
    }
  }
];

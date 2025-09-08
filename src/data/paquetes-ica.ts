// src/data/paquetes-ica.ts

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
        titulo: "Paracas + Huacachina",
        slug: "paracas-huacachina-full-day",
        descripcion:
            "Visita Paracas con sus Islas Ballestas, disfruta de un viñedo en Ica con degustación, el oasis de Huacachina y la experiencia de tubulares y sandboarding.",
        etiqueta: "OFERTA",
        imagen: "/paquetes-ica/paracas.avif",
        itinerario: {
            horarios: "HORARIO: DE 4:30 AM – 9:20 PM",
            detalle: [
                "LIMA – PARACAS: Tomamos la carretera al sur, presentación de la guía, parada para desayuno en ruta.",
                "9:00 AM PARACAS – ISLAS BALLESTAS: Paseo en modernas embarcaciones con chaleco salvavidas. Se aprecia El Candelabro, aves guaneras, lobos marinos y pingüinos de Humboldt.",
                "1:00 PM ALMUERZO – VIÑEDO EN ICA: Recorrido, proceso de vinos y piscos, degustación de Borgoña, Vino de Misa, Amacerados y Pisco.",
                "3:00 PM OASIS HUACACHINA: Oasis natural rodeado de dunas, palmeras y algarrobos.",
                "TUBULARES Y SANDBOARDING: Aventura en carros areneros y tabla en arena.",
                "BODEGA RACIMO DE UVA O EL GARRAFÓN – CHINCHA: Show de música, vinos, amacerados, frejol colado y galleta paciencia."
            ],
            incluye: [
                "Movilidad turística Lima - Paracas - Ica – Chincha - Lima.",
                "Seguro contra accidentes (Soat).",
                "Guía oficial de turismo.",
                "Embarcación a las Islas Ballestas.",
                "Chalecos salvavidas durante el recorrido.",
                "Observación de fauna marina.",
                "Visita al viñedo en Ica.",
                "Degustación de vinos y piscos.",
                "Visita al oasis de la Huacachina.",
                "Degustación de tejas y chocotejas.",
                "Visita al viñedo Racimo de Uva con show de música."
            ],
            noIncluye: ["Propinas.", "Gastos personales.", "Alimentación."]
        }
    },
    {
        dias: "2D/1N",
        titulo: "Paracas + Huacachina 2D/1N",
        slug: "paracas-huacachina-2d1n",
        descripcion:
            "Disfruta de Paracas, las Islas Ballestas, un viñedo en Ica, el oasis de Huacachina con tubulares y sandboarding, más una noche de hotel en Ica.",
        etiqueta: "",
        imagen: "/paquetes-ica/paracas-huacachina.avif",
        itinerario: {
            horarios: "Horario de salida: 4:30 AM",
            detalle: [
                "DÍA 1 – PARACAS + HUACACHINA",
                "4:30 AM LIMA – PARACAS: Carretera al sur, desayuno en ruta.",
                "9:00 AM PARACAS – ISLAS BALLESTAS: Paseo en embarcación con fauna marina.",
                "1:00 PM VIÑEDO EN ICA: Recorrido y degustación de vinos y piscos.",
                "3:00 PM OASIS HUACACHINA: Descanso y deportes de aventura en dunas.",
                "Noche en hotel en Ica.",
                "DÍA 2 – DÍA LIBRE",
                "Desayuno en hotel. Mañana libre. Almuerzo por cuenta del pasajero.",
                "Visita a Bodega Racimo de Uva o El Garrafón en Chincha con show y degustación."
            ],
            incluye: [
                "Movilidad turística Lima - Paracas - Ica – Chincha - Lima.",
                "Seguro contra accidentes (Soat).",
                "Guía oficial de turismo.",
                "Embarcación a las Islas Ballestas.",
                "Visita a viñedo en Ica.",
                "Degustación de vinos, amacerados y piscos.",
                "Visita al oasis Huacachina.",
                "Tubulares y Sandboarding.",
                "Ingresos a Muelle Turístico en Paracas y Huacachina.",
                "Degustación de tejas y chocotejas.",
                "1 Noche de hotel en Ica con desayuno.",
                "Visita a Bodega Racimo de Uva con show."
            ],
            noIncluye: ["Propinas.", "Gastos personales.", "Alimentación."]
        }
    },
    {
        dias: "Full Day",
        titulo: "Nazca – Semiprivado",
        slug: "nazca-full-day",
        descripcion:
            "Sobrevuela las Líneas de Nazca y descubre el misterio de sus geoglifos, además disfruta del oasis de Huacachina y deportes de aventura.",
        etiqueta: "RECOMENDADO",
        imagen: "/paquetes-ica/nazca.avif",
        itinerario: {
            horarios: "HORARIO: 3:30 AM – 10:00 PM",
            detalle: [
                "LIMA – NAZCA: Carretera al sur.",
                "Sobrevuelo de Líneas de Nazca: El Colibrí, Araña, Cóndor, Ballena, Mono y más.",
                "Explicación según estudios de María Reiche.",
                "Almuerzo libre en Nazca.",
                "Visita al Oasis Huacachina con opción a tubulares y sandboarding (adicional)."
            ],
            incluye: [
                "Movilidad turística.",
                "Seguro contra accidentes (Soat).",
                "Guía oficial de turismo.",
                "Sobrevuelo de Líneas de Nazca.",
                "Tasas turísticas para el sobrevuelo.",
                "Visita al oasis Huacachina.",
                "Ingreso a atractivos turísticos.",
                "Botiquín de primeros auxilios."
            ],
            noIncluye: ["Propinas.", "Gastos personales.", "Alimentación."]
        }
    },
    {
        dias: "Full Day",
        titulo: "Nazca con Cruz del Sur",
        slug: "nazca-cruz-del-sur",
        descripcion:
            "Viaja en bus Cruz del Sur a Nazca, realiza el sobrevuelo de las famosas líneas y conoce uno de los misterios más grandes del mundo.",
        etiqueta: "",
        imagen: "/paquetes-ica/nazca-cruz-del-sur.avif",
        itinerario: {
            horarios: "HORARIO: De 11:00 PM a 10:00 PM (salida noche anterior)",
            detalle: [
                "5:30 AM Llegada a Nazca, traslado al aeródromo y desayuno.",
                "Sobrevuelo de Líneas de Nazca: Colibrí, Araña, Cóndor, Ballena, Mono, etc.",
                "Explicación sobre origen y función de los geoglifos.",
                "Almuerzo libre en Nazca.",
                "2:00 PM Retorno a Lima en bus Cruz del Sur."
            ],
            incluye: [
                "Boleto de bus Cruz del Sur Lima – Nazca – Lima.",
                "Transfer In & Out en Nazca.",
                "Sobrevuelo de Líneas de Nazca.",
                "Tasas turísticas para el sobrevuelo."
            ],
            noIncluye: [
                "Gastos personales.",
                "Alimentación.",
                "Tasas turísticas adicionales (77 soles directo en aeródromo)."
            ]
        }
    },
    {
        dias: "2D/1N",
        titulo: "Paracas + Huacachina + Nazca",
        slug: "paracas-huacachina-nazca-2d1n",
        descripcion:
            "Combina Paracas, Huacachina y el sobrevuelo de las Líneas de Nazca en un paquete completo con transporte, aventura y cultura.",
        etiqueta: "MÁS VENDIDO",
        imagen: "/paquetes-ica/paracas-huacachina-nazca.avif",
        itinerario: {
            horarios: "HORARIO: Salida 4:30 AM",
            detalle: [
                "DÍA 1 – PARACAS + HUACACHINA",
                "4:30 AM Salida de Lima hacia Paracas.",
                "9:30 AM Islas Ballestas: Paseo en embarcación.",
                "1:00 PM Viñedo en Ica: Recorrido y degustación de piscos y vinos.",
                "3:00 PM Oasis Huacachina: Paseo y deportes de aventura.",
                "Noche en Nazca – Hotel básico con desayuno.",
                "DÍA 2 – NAZCA",
                "10:00 AM Sobrevuelo de Líneas de Nazca.",
                "Almuerzo por cuenta del pasajero.",
                "2:00 PM Retorno a Lima en bus Cruz del Sur."
            ],
            incluye: [
                "Movilidad turística Lima - Paracas - Ica – Nazca – Lima.",
                "Seguro contra accidentes (Soat).",
                "Guía oficial de turismo.",
                "Embarcación a Islas Ballestas.",
                "Visita al viñedo en Ica.",
                "Degustación de vinos y piscos.",
                "Visita al Oasis Huacachina.",
                "Tubulares y sandboarding.",
                "Boleto de bus Cruz del Sur Ica – Nazca – Lima.",
                "1 noche en hotel con desayuno.",
                "Sobrevuelo de Líneas de Nazca.",
                "Tasas turísticas para sobrevuelo."
            ],
            noIncluye: ["Propinas.", "Gastos personales.", "Alimentación."]
        }
    }
];
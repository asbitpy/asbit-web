// Contenido de los 3 planes — Sección 6 del brief. Copy textual, sin cambios.
import { WA_MESSAGES } from "./site";

export interface Plan {
  id: "byte" | "core" | "stack";
  chip: string;
  nombre: string;
  paraQuien: string;
  incluyeIntro?: string;
  incluye: string[];
  ctaMensaje: string;
  destacado?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: "byte",
    chip: "Para arrancar",
    nombre: "Byte",
    paraQuien:
      "Negocios que todavía no tienen presencia digital profesional y quieren dar el primer paso bien hecho.",
    incluye: [
      "Diseño y desarrollo web profesional",
      "SEO básico",
      "Dominio y servidor gestionados",
      "Mantenimiento mensual",
    ],
    ctaMensaje: WA_MESSAGES.planByte,
  },
  {
    id: "core",
    chip: "Recomendado para crecer",
    nombre: "Core",
    paraQuien:
      "Negocios que ya tienen web o la están por lanzar, y quieren que realmente les traiga clientes de forma constante.",
    incluyeIntro: "Incluye todo lo de Byte, más:",
    incluye: [
      "SEO avanzado con seguimiento mensual",
      "Ayuda opcional en diseño digital",
      "Asesoría digital mensual",
    ],
    ctaMensaje: WA_MESSAGES.planCore,
    destacado: true,
  },
  {
    id: "stack",
    chip: "Presencia + estrategia",
    nombre: "Stack",
    paraQuien:
      "Negocios que quieren su web con funciones a medida y una estrategia digital activa mes a mes.",
    incluyeIntro: "Incluye todo lo de Core, más:",
    incluye: [
      "Funciones personalizadas de desarrollo",
      "Estrategia de contenido mensual",
    ],
    ctaMensaje: WA_MESSAGES.planStack,
  },
];

// Lógica del Diagnóstico rápido — Sección 5 del brief v5.0.
// Tabla de decisión EXACTA de 8 combinaciones (Q1 x Q2 x Q3), incluyendo el
// caso especial "Sí/Sí/No" que no fabrica urgencia falsa. No se agrega
// lógica propia por fuera de esta tabla.

export type Respuesta = "si" | "no";

export interface DiagnosticoAnswers {
  q1: Respuesta; // ¿Tu negocio ya tiene una web propia?
  q2: Respuesta; // ¿Esa web te trae consultas o clientes de forma constante?
  q3: Respuesta; // ¿Hoy contestás manualmente mensajes, turnos o pagos?
}

export type PlanId = "byte" | "core" | "stack";

export interface DiagnosticoResult {
  pilar: "01 Web" | "02 SEO" | "03 Automatización" | null;
  pilarNumero: 1 | 2 | 3 | null;
  plan: PlanId;
  planNombre: "Byte" | "Core" | "Stack";
  copy: string;
  esCasoEspecial: boolean;
}

export const DIAGNOSTICO_PREGUNTAS = [
  {
    id: "q1" as const,
    texto: "¿Tu negocio ya tiene una web propia?",
  },
  {
    id: "q2" as const,
    texto:
      "¿Esa web (o tu presencia actual) te trae consultas o clientes de forma constante?",
  },
  {
    id: "q3" as const,
    texto:
      "¿Hoy contestás manualmente y de forma repetitiva mensajes, turnos o pagos?",
  },
];

export function getDiagnosticoResult(
  answers: DiagnosticoAnswers
): DiagnosticoResult {
  const { q1, q2, q3 } = answers;

  // No / No / No
  if (q1 === "no" && q2 === "no" && q3 === "no") {
    return {
      pilar: "01 Web",
      pilarNumero: 1,
      plan: "byte",
      planNombre: "Byte",
      copy: "Todavía no tenés presencia digital — por ahí se empieza siempre.",
      esCasoEspecial: false,
    };
  }

  // No / No / Sí
  if (q1 === "no" && q2 === "no" && q3 === "si") {
    return {
      pilar: "01 Web",
      pilarNumero: 1,
      plan: "byte",
      planNombre: "Byte",
      copy: "Primero necesitás una web que funcione. La automatización es un gran paso dos.",
      esCasoEspecial: false,
    };
  }

  // No / Sí / No
  if (q1 === "no" && q2 === "si" && q3 === "no") {
    return {
      pilar: "01 Web",
      pilarNumero: 1,
      plan: "byte",
      planNombre: "Byte",
      copy: "Ya conseguís clientes por otro lado — una web profesional te ayuda a consolidarlo.",
      esCasoEspecial: false,
    };
  }

  // No / Sí / Sí
  if (q1 === "no" && q2 === "si" && q3 === "si") {
    return {
      pilar: "01 Web",
      pilarNumero: 1,
      plan: "byte",
      planNombre: "Byte",
      copy: "Tenés demanda pero no web propia. Empezar por ahí, y ya pensando en automatizar después.",
      esCasoEspecial: false,
    };
  }

  // Sí / No / No
  if (q1 === "si" && q2 === "no" && q3 === "no") {
    return {
      pilar: "02 SEO",
      pilarNumero: 2,
      plan: "core",
      planNombre: "Core",
      copy: "Tenés web, pero no te está trayendo clientes. Ahí es donde entra el SEO con seguimiento.",
      esCasoEspecial: false,
    };
  }

  // Sí / No / Sí
  if (q1 === "si" && q2 === "no" && q3 === "si") {
    return {
      pilar: "02 SEO",
      pilarNumero: 2,
      plan: "core",
      planNombre: "Core",
      copy: "Tu web no te trae clientes y además tenés carga manual — el SEO con seguimiento de Core es el primer paso.",
      esCasoEspecial: false,
    };
  }

  // Sí / Sí / No — caso especial: negocio que ya funciona bien.
  // No se fabrica urgencia falsa (regla explícita del brief).
  if (q1 === "si" && q2 === "si" && q3 === "no") {
    return {
      pilar: null,
      pilarNumero: null,
      plan: "stack",
      planNombre: "Stack",
      copy: "Tu presencia digital ya está funcionando. Stack no te resuelve un problema — te ayuda a mantener el ritmo con estrategia de contenido mensual y funciones a medida, para que sigas creciendo en vez de quedarte donde estás.",
      esCasoEspecial: true,
    };
  }

  // Sí / Sí / Sí
  return {
    pilar: "03 Automatización",
    pilarNumero: 3,
    plan: "stack",
    planNombre: "Stack",
    copy: "Tu web ya funciona bien. Ahora te conviene un sistema que automatice lo repetitivo y cobre por vos.",
    esCasoEspecial: false,
  };
}

export function resumenRespuestas(answers: DiagnosticoAnswers): string {
  const map: Record<Respuesta, string> = { si: "Sí", no: "No" };
  return `¿Tiene web? ${map[answers.q1]}. ¿Le trae clientes? ${map[
    answers.q2
  ]}. ¿Carga manual? ${map[answers.q3]}`;
}

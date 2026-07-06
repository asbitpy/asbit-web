"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  DIAGNOSTICO_PREGUNTAS,
  DiagnosticoAnswers,
  Respuesta,
  getDiagnosticoResult,
  resumenRespuestas,
} from "@/lib/diagnostico";
import { diagnosticoMessage, waLink } from "@/lib/site";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

type Step = 0 | 1 | 2 | 3; // 3 = resultado

export default function Diagnostico() {
  const reduced = usePrefersReducedMotion();
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<Partial<DiagnosticoAnswers>>({});
  const [direction, setDirection] = useState(1);

  const questionIds: (keyof DiagnosticoAnswers)[] = ["q1", "q2", "q3"];

  function handleAnswer(value: Respuesta) {
    const id = questionIds[step];
    const next = { ...answers, [id]: value };
    setAnswers(next);
    setDirection(1);
    if (step < 2) {
      setStep((s) => (s + 1) as Step);
    } else {
      setStep(3);
    }
  }

  function handleRestart() {
    setDirection(-1);
    setAnswers({});
    setStep(0);
  }

  const isComplete = step === 3 && answers.q1 && answers.q2 && answers.q3;
  const result = isComplete
    ? getDiagnosticoResult(answers as DiagnosticoAnswers)
    : null;

  // Animación SOLO de entrada, con key dinámica por paso. Se evita
  // AnimatePresence + exit a propósito: con mode="wait" la animación de salida
  // no completaba y bloqueaba el avance del quiz (el estado avanzaba pero la UI
  // quedaba congelada en la 1ra pregunta). Con key dinámica, cada pregunta/
  // resultado se remonta y entra con slide — no puede colgarse.
  const enterAnim = reduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.15 } }
    : {
        initial: { opacity: 0, x: direction > 0 ? 40 : -40 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <section id="diagnostico" className="relative bg-lavender py-20 md:py-28">
      <div className="mx-auto max-w-[640px] px-5 md:px-8">
        <div className="text-center">
          <h2 className="text-[26px] font-bold leading-tight tracking-[-0.02em] text-navy sm:text-[32px] md:text-[38px]">
            Diagnóstico rápido: ¿por dónde empieza tu negocio?
          </h2>
        </div>

        {/* Stepper 01/02/03 reutilizado de La Solución, en tamaño reducido */}
        <div className="mt-10 flex items-center justify-center gap-6 sm:gap-10">
          {["01", "02", "03"].map((num, i) => {
            const answered = step > i || (step === 3 && i < 3);
            const active = step === i;
            const illuminated =
              (isComplete && result?.pilarNumero === i + 1) || answered;
            return (
              <span
                key={num}
                className={`select-none text-[32px] font-bold leading-none transition-all duration-500 sm:text-[40px] ${
                  illuminated
                    ? "text-purple opacity-100"
                    : active
                    ? "text-navy/40 opacity-100"
                    : "text-navy/10 opacity-100"
                }`}
              >
                {num}
              </span>
            );
          })}
        </div>

        <div className="relative mt-10 min-h-[260px] rounded-2xl border border-black/5 bg-white p-6 shadow-[0_8px_40px_rgba(30,17,74,0.08)] sm:p-10">
          {step < 3 ? (
            <motion.div key={`q-${step}`} {...enterAnim}>
              <p className="text-center text-[20px] font-semibold leading-snug text-navy sm:text-[24px] md:text-[27px]">
                {DIAGNOSTICO_PREGUNTAS[step].texto}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={() => handleAnswer("si")}
                  className="touch-target rounded-lg border-[1.5px] border-navy/20 px-8 py-3.5 text-[16px] font-semibold text-navy transition-all hover:border-purple hover:text-purple active:scale-95 sm:min-w-[140px]"
                >
                  Sí
                </button>
                <button
                  type="button"
                  onClick={() => handleAnswer("no")}
                  className="touch-target rounded-lg border-[1.5px] border-navy/20 px-8 py-3.5 text-[16px] font-semibold text-navy transition-all hover:border-purple hover:text-purple active:scale-95 sm:min-w-[140px]"
                >
                  No
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={
                reduced ? { duration: 0.15 } : { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
              }
              className="text-center"
            >
              <p className="text-[14px] font-medium uppercase tracking-wider text-muted">
                Te recomendamos
              </p>
              <p className="mt-2 text-[28px] font-bold tracking-[-0.01em] text-purple sm:text-[34px]">
                Plan {result?.planNombre}
              </p>
              <p className="mx-auto mt-4 max-w-[440px] text-[16px] leading-relaxed text-ink/75 sm:text-[17px]">
                {result?.copy}
              </p>

              <motion.div
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: reduced ? 0 : 0.25 }}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <Button
                  href={waLink(
                    diagnosticoMessage(
                      result?.planNombre ?? "Byte",
                      resumenRespuestas(answers as DiagnosticoAnswers)
                    )
                  )}
                  external
                  variant="primary"
                >
                  Ver mi recomendación
                  <ArrowRight size={18} />
                </Button>
                <button
                  type="button"
                  onClick={handleRestart}
                  className="touch-target text-[14px] font-medium text-muted underline-offset-4 hover:text-purple hover:underline"
                >
                  Volver a empezar
                </button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

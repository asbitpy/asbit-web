"use client";

import { MessageCircle } from "lucide-react";
import { waLink, WA_MESSAGES } from "@/lib/site";

/**
 * Barra fija de WhatsApp en zona de pulgar (mobile), independiente del menú
 * hamburguesa — Sección Nav del brief: "no debe depender de abrir el menú
 * para contactar".
 */
export default function MobileWhatsappBar() {
  return (
    <a
      href={waLink(WA_MESSAGES.mobileBar)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="touch-target fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-purple text-white shadow-[0_8px_28px_rgba(127,58,239,0.5)] transition-transform active:scale-95 md:hidden"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  );
}

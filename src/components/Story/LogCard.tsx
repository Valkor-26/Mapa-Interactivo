"use client";

import { LogEntry } from "@/data/storyData";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogCardProps {
  log: LogEntry;
  index: number;
  isActive: boolean;
  onInView: (id: string) => void;
}

export default function LogCard({ log, index, isActive, onInView }: LogCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-45% 0px -45% 0px",
  });

  useEffect(() => {
    if (isInView) {
      onInView(log.id);
    }
  }, [isInView, log.id, onInView]);

  const logNum = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      ref={ref}
      id={log.id}
      initial={{ opacity: 0.5 }}
      animate={{ 
        opacity: isActive ? 1 : 0.5,
        backgroundColor: isActive ? "rgba(176, 141, 87, 0.1)" : "rgba(0,0,0,0)"
      }}
      className={cn(
        "relative p-10 border-b border-[#b08d57] transition-all duration-400",
        isActive && "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[6px] before:bg-[#8b0000]"
      )}
    >
      <span className="block font-mono-custom text-[#8c7355] text-sm uppercase tracking-widest mb-4">
        LOG_{logNum} // LOCALIZACIÓN_REGISTRADA
      </span>
      
      <h2 className="font-title text-4xl font-bold mb-5 text-[#3e2723] leading-tight">
        {log.title}
      </h2>
      
      <div className="font-mono-custom bg-[rgba(139,0,0,0.05)] text-[#8b0000] px-[18px] py-[12px] border border-[#8b0000] mb-6 text-base inline-block shadow-[2px_2px_0px_rgba(139,0,0,0.2)]">
        Error: {log.error}
      </div>
      
      <p className="font-main leading-relaxed text-xl text-[#3e2723] mb-8 text-justify">
        {log.situacion}
      </p>
      
      <div className="mt-6 pt-5 border-t border-dashed border-[#b08d57]">
        <span className="block font-mono-custom text-sm text-[#8c7355] mb-2.5">
          {">>"} REPRODUCIR_GRABACIÓN.mp3
        </span>
        <audio controls className="w-full h-[45px] sepia-80 hue-rotate-[-10deg]">
          <source src={log.audioFile} type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      </div>
    </motion.div>
  );
}

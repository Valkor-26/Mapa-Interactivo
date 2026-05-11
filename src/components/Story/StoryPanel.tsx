"use client";

import { storyData } from "@/data/storyData";
import LogCard from "./LogCard";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function GlobalViewTrigger({ onInView }: { onInView: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView();
    }
  }, [isInView, onInView]);

  return <div id="final-view-trigger" ref={ref} className="h-10 w-full" />;
}

interface StoryPanelProps {
  activeLogId: string | null;
  onActiveLogChange: (id: string) => void;
}

export default function StoryPanel({ activeLogId, onActiveLogChange }: StoryPanelProps) {
  return (
    <div className="w-full md:w-[40%] md:min-w-[350px] md:max-w-[500px] h-screen overflow-y-auto bg-parchment/85 backdrop-blur-sm border-r-3 border-[#b08d57] shadow-xl z-10 relative pb-[50vh] scrollbar-hide">
      
      <header className="px-10 py-15 border-b-2 border-dashed border-[#b08d57] min-h-screen flex flex-col justify-center text-center">
        <h1 className="font-title text-[#8b0000] text-5xl md:text-6xl mb-2.5 font-bold uppercase tracking-widest">
          LA ODISEA.exe
        </h1>
        <p className="font-mono-custom text-lg text-[#5d4037]">
          System Logs // Misión de Retorno
        </p>
        
        <div className="mt-10 font-title text-xl text-[#8b0000] flex flex-col items-center animate-bounce">
          <span>Desplázate para iniciar</span>
          <ChevronDown className="mt-2" size={32} />
        </div>
      </header>

      <main>
        {storyData.map((log, index) => (
          <LogCard
            key={log.id}
            log={log}
            index={index}
            isActive={activeLogId === log.id}
            onInView={onActiveLogChange}
          />
        ))}
        <GlobalViewTrigger onInView={() => onActiveLogChange('global-view')} />
      </main>

      <footer className="px-10 py-15 text-center border-t-2 border-dashed border-[#b08d57] font-title text-[#8b0000] mt-[50vh] text-2xl">
        <p>FIN DE LA TRANSMISIÓN</p>
        <p className="text-sm mt-2 opacity-70">Root User // Odiseo restablecido.</p>
      </footer>
    </div>
  );
}

"use client";

import { useState } from "react";
import StoryPanel from "@/components/Story/StoryPanel";
import Map from "@/components/Map";

export default function Home() {
  const [activeLogId, setActiveLogId] = useState<string | null>(null);

  return (
    <main className="flex h-screen w-screen overflow-hidden flex-col md:flex-row">
      {/* Story Panel */}
      <StoryPanel 
        activeLogId={activeLogId} 
        onActiveLogChange={setActiveLogId} 
      />

      {/* Map Container */}
      <div className="flex-grow h-[40vh] md:h-screen relative order-first md:order-last">
        <Map activeLogId={activeLogId} />
      </div>

    </main>
  );
}

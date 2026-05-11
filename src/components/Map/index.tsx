import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#e8dcc4] flex items-center justify-center font-title text-[#3e2723]">CARGANDO SISTEMA CARTOGRÁFICO...</div>
});

export default Map;

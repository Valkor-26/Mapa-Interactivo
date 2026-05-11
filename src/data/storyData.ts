export interface LogEntry {
  id: string;
  title: string;
  error: string;
  situacion: string;
  audioFile: string;
  lat: number;
  lng: number;
  zoom: number;
  mapImage?: string;
}

export const storyData: LogEntry[] = [
  {
    id: "log-1",
    title: "1. Troya (Hissarlik, Turquía)",
    error: "SOFTWARE_LEGADO_OBSOLETO",
    situacion: "Después de 10 años intentando romper el cortafuegos (firewall) de Troya, el proyecto finalmente se cierra. El \"Caballo de Troya\" fue un Exploit de día cero que Odiseo inyectó en el servidor central.",
    audioFile: "/audio/audio1.mp3",
    lat: 39.9575,
    lng: 26.2389,
    zoom: 12,
    mapImage: "/images/trojan_horse.svg"
  },
  {
    id: "log-2",
    title: "2. Ismaro (Maroneia, Grecia)",
    error: "EXTRACCIÓN_DE_DATOS_NO_AUTORIZADA",
    situacion: "Odiseo intenta extraer datos de un servidor local de los Cicones sin usar una VPN. El sistema detecta la intrusión y lanza un contraataque masivo que elimina varios de sus nodos.",
    audioFile: "/audio/audio2.mp3",
    lat: 40.9000,
    lng: 25.5167,
    zoom: 11,
    mapImage: "/images/cicones.svg"
  },
  {
    id: "log-3",
    title: "3. Isla de Yerba (Túnez) - Lotófagos",
    error: "BUCLE_INFINITO / AGOTAMIENTO_DE_RECURSOS",
    situacion: "La tripulación entra en una plataforma de VR adictiva y quedan atrapados en un bucle infinito. El software consume toda la RAM, haciendo que olviden la \"tarea principal\".",
    audioFile: "/audio/audio3.mp3",
    lat: 33.8075,
    lng: 10.8451,
    zoom: 10,
    mapImage: "/images/lotus.svg"
  },
  {
    id: "log-4",
    title: "4. Costa de Sicilia - El Cíclope",
    error: "FALLO_DE_AUTENTICACIÓN_BIOMÉTRICA",
    situacion: "Polifemo es un sistema de seguridad de un solo lente. Odiseo usa un ataque de Spoofing cambiando su usuario a \"Nadie\". El sistema entra en pánico y no puede validar quién sale del recinto.",
    audioFile: "/audio/audio4.mp3",
    lat: 37.7510,
    lng: 14.9934,
    zoom: 10,
    mapImage: "/images/cyclops.png"
  },
  {
    id: "log-5",
    title: "5. Islas Eolias - Eolo",
    error: "CORRUPCIÓN_DE_ARCHIVO_COMPRIMIDO (Bomba_ZIP)",
    situacion: "Eolo entrega un archivo comprimido con vientos de navegación. Los compañeros lo abren creyendo que es Bitcoin; el descomprimido masivo satura el procesador y reinicia la posición del sistema.",
    audioFile: "/audio/audio5.mp3",
    lat: 38.5333,
    lng: 14.9000,
    zoom: 10,
    mapImage: "/images/wind.png"
  },
  {
    id: "log-6",
    title: "6. Porto Pozzo - Lestrigones",
    error: "ATAQUE_DDoS (Capa_Física)",
    situacion: "Una lluvia de rocas gigantes que funciona como un ataque de Denegación de Servicio masivo que destruye 11 de los 12 servidores (barcos). Solo sobrevive el Mainframe de Odiseo.",
    audioFile: "/audio/audio6.mp3",
    lat: 41.2000,
    lng: 9.2833,
    zoom: 12,
    mapImage: "/images/laestrygonians.svg"
  },
  {
    id: "log-7",
    title: "7. Monte Circeo - Circe",
    error: "CABALLO_DE_TROYA / SOBRESCRITURA_DE_PERFIL",
    situacion: "Circe envía un enlace de Phishing. Al hacer clic, el malware sobreescribe los perfiles y los convierte en \"Cerdos.exe\". Odiseo usa un Antivirus (Moly) del soporte técnico de Hermes.",
    audioFile: "/audio/audio7.mp3",
    lat: 41.2333,
    lng: 13.0833,
    zoom: 12,
    mapImage: "/images/pig.png"
  },
  {
    id: "log-8",
    title: "8. Lago Averno - El Inframundo",
    error: "RECUPERACIÓN_DE_BASE_DE_DATOS_HEREDADA",
    situacion: "Odiseo accede a servidores \"muertos\" (la Deep Web) para consultar la caché de archivos eliminados de Tiresias.",
    audioFile: "/audio/audio8.mp3",
    lat: 40.8333,
    lng: 14.0833,
    zoom: 13,
    mapImage: "/images/hades.svg"
  },
  {
    id: "log-9",
    title: "9. Estrecho de Messina - Escila y Caribdis",
    error: "PÉRDIDA_DE_PAQUETES vs. DESBORDAMIENTO_DE_BÚFER",
    situacion: "Escila es un error de Packet Loss (6 paquetes por ciclo). Caribdis es un Buffer Overflow que amenaza con tragar todo el sistema operativo.",
    audioFile: "/audio/audio9.mp3",
    lat: 38.2500,
    lng: 15.6333,
    zoom: 11,
    mapImage: "/images/scylla.png"
  },
  {
    id: "log-10",
    title: "10. Isla de Sicilia - Helio",
    error: "RECLAMO_POR_DERECHOS_DE_AUTOR / VIOLACIÓN_DE_TÉRMINOS",
    situacion: "La tripulación consume activos digitales protegidos. El dueño del copyright se queja al administrador (Zeus), quien lanza un Kernel Panic (rayo) que destruye el hardware.",
    audioFile: "/audio/audio10.mp3",
    lat: 37.5000,
    lng: 14.0000,
    zoom: 8,
    mapImage: "/images/helios.svg"
  },
  {
    id: "log-11",
    title: "11. Estrecho de Gibraltar - Calipso",
    error: "DEPENDENCIA_DE_PROVEEDOR (Vendor Lock-in)",
    situacion: "Odiseo queda atrapado en un ecosistema propietario cerrado. Tiene todo lo que necesita, pero no puede exportar sus datos ni migrar a otra plataforma.",
    audioFile: "/audio/audio11.mp3",
    lat: 35.9667,
    lng: -5.3667,
    zoom: 10,
    mapImage: "/images/calypso.svg"
  },
  {
    id: "log-12",
    title: "12. Isla de Corfú - Feacios",
    error: "RESTAURACIÓN_DEL_SISTEMA / RESPALDO_EN_LA_NUBE",
    situacion: "Odiseo llega con datos corruptos. Los Feacios actúan como una nube de respaldo; le proporcionan una nueva interfaz y conexión de fibra óptica para subir su perfil a Ítaca.",
    audioFile: "/audio/audio12.mp3",
    lat: 39.6167,
    lng: 19.9167,
    zoom: 10,
    mapImage: "/images/ship.png"
  },
  {
    id: "log-13",
    title: "13. Isla de Ítaca - El Regreso",
    error: "AUTENTICACIÓN_MULTIFACTOR_REQUERIDA",
    situacion: "Ítaca está llena de bots (pretendientes). Odiseo pasa una prueba de hardware (el arco) que solo su clave privada puede firmar para recuperar privilegios de Root.",
    audioFile: "/audio/audio13.mp3",
    lat: 38.3667,
    lng: 20.6833,
    zoom: 12,
    mapImage: "/images/ithaca.svg"
  }
];

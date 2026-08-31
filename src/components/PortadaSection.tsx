import React from 'react';
import { SectionId } from '../types';
import { SectionFooter } from './SectionFooter';

interface PortadaSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const PortadaSection: React.FC<PortadaSectionProps> = ({ onNavigate }) => {
  return (
    <section id="portada" className="space-y-8 animate-fadeIn">
      {/* Encabezados y Banner Hero */}
      <header className="space-y-3">
        <div className="inline-flex items-center gap-2 bg-[#1c1f2e] text-amber-500 border border-amber-500/40 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide">
          <span>✦</span>
          <span>Enciclopedia Completa & Portal Informativo</span>
          <span>✦</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-500 tracking-tight">
          DRAGON BALL Z ENCICLOPEDIA
        </h2>
        
        {/* Uso explícito de <p> y <br> para estructura textual */}
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Bienvenido a la guía definitiva y enciclopedia completa del universo de Dragon Ball Z.<br />
          Descubre información detallada sobre razas guerreras, fichas de personajes legendarios, todas las sagas narrativas, lista de episodios, películas oficiales, análisis en el blog y el perfil técnico del desarrollador.
        </p>

        {/* Botones de acción rápida */}
        <div className="flex flex-wrap gap-3 pt-2">
          <button 
            id="btn-explorar-sagas"
            onClick={() => onNavigate('sagas')}
            className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-5 py-2.5 rounded-md text-sm transition-all duration-200 shadow-md hover:shadow-amber-500/20 cursor-pointer"
          >
            Explorar Sagas Principales
          </button>
          
          <button 
            id="btn-ver-personajes"
            onClick={() => onNavigate('personajes')}
            className="bg-transparent hover:bg-amber-500/10 text-amber-400 border border-amber-500/50 hover:border-amber-400 font-bold px-5 py-2.5 rounded-md text-sm transition-all duration-200 cursor-pointer"
          >
            Ver Personajes
          </button>

          <button 
            id="btn-ver-blog"
            onClick={() => onNavigate('blog')}
            className="bg-[#1c1f2e] hover:bg-[#252a3f] text-neutral-200 border border-[#2a2e43] font-semibold px-4 py-2.5 rounded-md text-sm transition-all duration-200 cursor-pointer"
          >
            📰 Leer Blog
          </button>

          <button 
            id="btn-ver-cv"
            onClick={() => onNavigate('cv')}
            className="bg-gradient-to-r from-amber-500/20 to-sky-500/20 hover:from-amber-500/30 hover:to-sky-500/30 text-amber-300 border border-amber-500/30 font-semibold px-4 py-2.5 rounded-md text-sm transition-all duration-200 cursor-pointer"
          >
            👨‍💻 Ver CV Técnico
          </button>
        </div>
      </header>

      {/* Categorías Destacadas */}
      <section className="space-y-4">
        <h3 className="text-amber-500 text-lg font-bold tracking-wide border-b border-[#2a2e43] pb-2 flex items-center gap-2">
          <span>📁</span>
          <span>CATEGORÍAS DESTACADAS</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            id="card-cat-personajes"
            onClick={() => onNavigate('personajes')}
            className="bg-[#1c1f2e] border border-[#2a2e43] hover:border-amber-500/60 p-4 rounded-lg flex items-center gap-3.5 cursor-pointer transition-all duration-200 hover:translate-y-[-2px] group"
          >
            <div className="text-3xl p-2.5 bg-[#12141c] rounded-md border border-[#2a2e43] group-hover:border-amber-500/40">
              ⚔️
            </div>
            <div>
              <h4 className="text-white font-bold text-sm group-hover:text-amber-400 transition-colors">Personajes</h4>
              <p className="text-neutral-400 text-xs mt-0.5">Héroes, villanos y estadísticas</p>
            </div>
          </div>

          <div 
            id="card-cat-sagas"
            onClick={() => onNavigate('sagas')}
            className="bg-[#1c1f2e] border border-[#2a2e43] hover:border-amber-500/60 p-4 rounded-lg flex items-center gap-3.5 cursor-pointer transition-all duration-200 hover:translate-y-[-2px] group"
          >
            <div className="text-3xl p-2.5 bg-[#12141c] rounded-md border border-[#2a2e43] group-hover:border-amber-500/40">
              🔥
            </div>
            <div>
              <h4 className="text-white font-bold text-sm group-hover:text-amber-400 transition-colors">Sagas</h4>
              <p className="text-neutral-400 text-xs mt-0.5">Los 4 grandes arcos épicos</p>
            </div>
          </div>

          <div 
            id="card-cat-episodios"
            onClick={() => onNavigate('episodios')}
            className="bg-[#1c1f2e] border border-[#2a2e43] hover:border-amber-500/60 p-4 rounded-lg flex items-center gap-3.5 cursor-pointer transition-all duration-200 hover:translate-y-[-2px] group"
          >
            <div className="text-3xl p-2.5 bg-[#12141c] rounded-md border border-[#2a2e43] group-hover:border-amber-500/40">
              📺
            </div>
            <div>
              <h4 className="text-white font-bold text-sm group-hover:text-amber-400 transition-colors">Episodios</h4>
              <p className="text-neutral-400 text-xs mt-0.5">291 episodios clasificados</p>
            </div>
          </div>

          <div 
            id="card-cat-peliculas"
            onClick={() => onNavigate('peliculas')}
            className="bg-[#1c1f2e] border border-[#2a2e43] hover:border-amber-500/60 p-4 rounded-lg flex items-center gap-3.5 cursor-pointer transition-all duration-200 hover:translate-y-[-2px] group"
          >
            <div className="text-3xl p-2.5 bg-[#12141c] rounded-md border border-[#2a2e43] group-hover:border-amber-500/40">
              🎬
            </div>
            <div>
              <h4 className="text-white font-bold text-sm group-hover:text-amber-400 transition-colors">Películas</h4>
              <p className="text-neutral-400 text-xs mt-0.5">15 películas del universo DBZ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformaciones Legendarias Destacadas */}
      <section className="space-y-4">
        <h3 className="text-amber-500 text-lg font-bold tracking-wide border-b border-[#2a2e43] pb-2 flex items-center gap-2">
          <span>⚡</span>
          <span>TRANSFORMACIONES LEGENDARIAS</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            onClick={() => onNavigate('transformaciones')}
            className="bg-[#1c1f2e] border border-[#2a2e43] hover:border-amber-400/70 p-4 rounded-lg cursor-pointer transition-all hover:bg-[#222538]"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-amber-500 text-black text-[10px] font-black px-2 py-0.5 rounded">SSJ 1</span>
              <span className="text-amber-400 text-xs font-semibold">x50 Multiplicador</span>
            </div>
            <h4 className="text-white font-bold text-sm">Super Saiyajin</h4>
            <p className="text-neutral-400 text-xs mt-1">El despertar del guerrero legendario.</p>
          </div>

          <div 
            onClick={() => onNavigate('transformaciones')}
            className="bg-[#1c1f2e] border border-[#2a2e43] hover:border-amber-400/70 p-4 rounded-lg cursor-pointer transition-all hover:bg-[#222538]"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-amber-400 text-black text-[10px] font-black px-2 py-0.5 rounded">SSJ 2</span>
              <span className="text-amber-300 text-xs font-semibold">x100 Multiplicador</span>
            </div>
            <h4 className="text-white font-bold text-sm">Super Saiyajin 2</h4>
            <p className="text-neutral-400 text-xs mt-1">Destellos bioeléctricos y furia pura.</p>
          </div>

          <div 
            onClick={() => onNavigate('transformaciones')}
            className="bg-[#1c1f2e] border border-[#2a2e43] hover:border-yellow-400/70 p-4 rounded-lg cursor-pointer transition-all hover:bg-[#222538]"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded">SSJ 3</span>
              <span className="text-yellow-300 text-xs font-semibold">x400 Multiplicador</span>
            </div>
            <h4 className="text-white font-bold text-sm">Super Saiyajin 3</h4>
            <p className="text-neutral-400 text-xs mt-1">Poder desbordante que sacude la Tierra.</p>
          </div>

          <div 
            onClick={() => onNavigate('transformaciones')}
            className="bg-[#1c1f2e] border border-red-500/40 hover:border-red-500 p-4 rounded-lg cursor-pointer transition-all hover:bg-[#222538]"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded">SSG</span>
              <span className="text-red-400 text-xs font-semibold">Ki Divino</span>
            </div>
            <h4 className="text-red-400 font-bold text-sm">Super Saiyajin Dios</h4>
            <p className="text-neutral-400 text-xs mt-1">La serenidad y velocidad de una deidad.</p>
          </div>
        </div>
      </section>

      {/* Aplicación del requisito 5: Etiqueta <pre> con Scouter Reading y Código */}
      <section className="space-y-3 bg-[#151721] border border-[#222534] p-5 rounded-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-amber-500 font-bold text-sm flex items-center gap-2">
            <span>📡</span>
            <span>RASTREADOR SAIYAJIN (SCOUTER DIGITAL) — LECTURA DE TELEMETRÍA KI</span>
          </h3>
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
            CAPSULE_CORP_OS v4.2
          </span>
        </div>
        <p className="text-xs text-neutral-400">
          Ejemplo de registro preformateado con la etiqueta HTML5 <code>&lt;pre&gt;</code> para visualización monospace directa:
        </p>

        <pre className="bg-[#0e1017] text-emerald-400 p-4 rounded-md font-mono text-xs overflow-x-auto border border-emerald-900/40 leading-tight">
{`================================================================================
SCOUTER TELEMETRY SCAN // SECTOR TIERRA (NORTH CITY DESERT)
================================================================================
ID GUERRERO            RAZA            ESTADO ACTUAL           KI DETECTADO
--------------------------------------------------------------------------------
SON GOKU               Saiyajin        Base / Calma            9.240.000 u
VEGETA IV              Saiyajin        Base / Enfocado         8.950.000 u
PICCOLO JR.            Namekiano       Meditación              3.400.000 u
SON GOHAN              Híbrido Saiy.   Latente                 1.200.000 u (¡Alerta Pico!)
FREEZER (MECHA)        Demonio Frío    100% Mecanizado        140.000.000 u (¡PELIGRO CRÍTICO!)
================================================================================
STATUS: Sistema listo. Rastreador no presenta sobrecalentamiento de circuitos.`}
        </pre>
      </section>

      {/* El Universo en Números */}
      <section className="space-y-4 pt-2">
        <h3 className="text-amber-500 text-lg font-bold tracking-wide border-b border-[#2a2e43] pb-2 flex items-center gap-2">
          <span>📊</span>
          <span>EL UNIVERSO EN NÚMEROS</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-[#1c1f2e] border border-[#2a2e43] p-4 rounded-lg text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-500 font-mono">291</span>
            <span className="text-xs text-neutral-400">Episodios de TV</span>
          </div>
          
          <div className="bg-[#1c1f2e] border border-[#2a2e43] p-4 rounded-lg text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-500 font-mono">15</span>
            <span className="text-xs text-neutral-400">Películas Oficiales</span>
          </div>

          <div className="bg-[#1c1f2e] border border-[#2a2e43] p-4 rounded-lg text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-500 font-mono">4</span>
            <span className="text-xs text-neutral-400">Sagas Principales</span>
          </div>

          <div className="bg-[#1c1f2e] border border-[#2a2e43] p-4 rounded-lg text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-500 font-mono">50+</span>
            <span className="text-xs text-neutral-400">Guerreros y Dioses</span>
          </div>
        </div>
      </section>

      {/* Pie de página de la sección con <hr> (Requisito 7) */}
      <SectionFooter sectionName="Portada Principal" onNavigate={onNavigate} />
    </section>
  );
};

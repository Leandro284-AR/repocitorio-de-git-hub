import React from 'react';
import { SAGAS_DATA } from '../data/dbzData';
import { SectionFooter } from './SectionFooter';
import { SectionId } from '../types';

interface SagasSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const SagasSection: React.FC<SagasSectionProps> = ({ onNavigate }) => {
  return (
    <section id="sagas" className="space-y-6 animate-fadeIn">
      {/* Encabezado */}
      <header className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-500 tracking-tight">
          GRANDES SAGAS NARRATIVAS DE DRAGON BALL Z
        </h2>
        {/* Uso explícito de <p> y <br> */}
        <p className="text-neutral-300 text-sm leading-relaxed max-w-3xl">
          Contenedor enciclopédico donde encontrarás todos los arcos argumentales de la serie.<br />
          Desde la invasión de los Saiyajin a la Tierra hasta la legendaria batalla mágica contra Majin Boo.
        </p>
      </header>

      {/* Listado de Sagas */}
      <div className="space-y-5">
        {SAGAS_DATA.map((saga) => (
          <article
            key={saga.id}
            id={saga.id}
            className="bg-[#1c1f2e] border border-[#2a2e43] p-5 sm:p-6 rounded-lg space-y-4 shadow-sm hover:border-[#383d58] transition-all"
          >
            <div 
              className="border-l-4 pl-3.5 space-y-1"
              style={{ borderColor: saga.accentColor }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 
                  className="font-bold text-lg sm:text-xl tracking-wide"
                  style={{ color: saga.accentColor }}
                >
                  {saga.title}
                </h3>
                <span className="bg-[#12141c] text-neutral-300 border border-[#2a2e43] px-2.5 py-1 rounded text-xs font-mono">
                  {saga.episodes} · {saga.years}
                </span>
              </div>
              <p className="text-xs text-amber-400/90 font-medium">
                Antagonistas clave: <span className="text-neutral-200">{saga.villain}</span>
              </p>
            </div>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              {saga.desc}
            </p>

            {/* Momentos Destacados */}
            <div className="space-y-2 bg-[#12141c] p-3.5 rounded border border-[#222534]">
              <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                Momentos & Batallas Decisivas:
              </h4>
              <ul className="list-disc list-inside text-xs text-neutral-300 space-y-1">
                {saga.highlights.map((h, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* Pie de página con <hr> (Requisito 7) */}
      <SectionFooter sectionName="Sagas Principales" onNavigate={onNavigate} />
    </section>
  );
};

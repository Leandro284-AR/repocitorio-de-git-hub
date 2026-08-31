import React from 'react';
import { TRANSFORMATIONS_DATA } from '../data/dbzData';
import { SectionFooter } from './SectionFooter';
import { SectionId } from '../types';

interface TransformacionesSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const TransformacionesSection: React.FC<TransformacionesSectionProps> = ({ onNavigate }) => {
  return (
    <section id="transformaciones" className="space-y-6 animate-fadeIn">
      {/* Encabezado */}
      <header className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-500 tracking-tight">
          PROGRESIÓN DE TRANSFORMACIONES SAIYAJIN
        </h2>
        {/* Uso explícito de <p> y <br> */}
        <p className="text-neutral-300 text-sm leading-relaxed max-w-3xl">
          Esta es la categoría en la que encontrarás todos los artículos sobre las metamorfosis, estados divinos y fases evolutivas alcanzadas por los guerreros.<br />
          Descubre los multiplicadores de fuerza física, auras de ki, debuts y usuarios conocidos.
        </p>
      </header>

      {/* Grid de Transformaciones */}
      <div className="space-y-4">
        {TRANSFORMATIONS_DATA.map((trans) => (
          <article
            key={trans.id}
            id={`trans-${trans.id}`}
            className="bg-[#1c1f2e] border border-[#2a2e43] hover:border-amber-500/50 p-5 rounded-lg space-y-3 transition-all"
            style={{ borderLeftColor: trans.auraColor, borderLeftWidth: '4px' }}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs shadow-md ${trans.badgeColor || 'bg-amber-500 text-black'}`}
                >
                  {trans.badge}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                    <span>{trans.name}</span>
                    {trans.isDivine && (
                      <span className="bg-red-950 text-red-400 border border-red-800 text-[10px] px-2 py-0.5 rounded font-mono font-bold">
                        Divino
                      </span>
                    )}
                  </h3>
                  <p className="text-neutral-400 text-xs mt-0.5">
                    Debut: <span className="text-neutral-300 font-medium">{trans.debut}</span>
                  </p>
                </div>
              </div>

              <div className="bg-[#12141c] border border-[#2a2e43] px-3 py-1.5 rounded text-xs font-mono text-amber-400 font-bold">
                {trans.multiplier}
              </div>
            </div>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              {trans.desc}
            </p>

            <div className="bg-[#12141c] p-2.5 rounded border border-[#222534] text-xs">
              <span className="text-neutral-400 font-semibold">Usuarios que la dominan: </span>
              <span className="text-neutral-200">{trans.users.join(' · ')}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Bloque preformateado de multiplicadores */}
      <div className="bg-[#151721] border border-[#222534] p-4 rounded-lg space-y-2">
        <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wider flex items-center gap-2">
          <span>⚡</span>
          <span>ESCALA MATEMÁTICA DE MULTIPLICADORES OFICIALES (FORMATO PRE)</span>
        </h4>
        <pre className="bg-[#0e1017] text-amber-300 p-3 rounded font-mono text-xs overflow-x-auto border border-amber-500/20 leading-relaxed">
{`+--------------------+---------------------+---------------------------------+
| FORMA SAIYAJIN     | FACTOR BASE         | CONDICIÓN DE DESPERTAR          |
+--------------------+---------------------+---------------------------------+
| Base               | 1.0x                | Estado natural de reposo        |
| Kaio-ken (x2..x20) | 2.0x a 20.0x        | Control vital de ki (Kaio-sama) |
| Super Saiyajin 1   | 50.0x               | Furia extrema de corazón puro   |
| Super Saiyajin 2   | 100.0x (2x de SSJ1) | Traspasar el muro del SSJ1      |
| Super Saiyajin 3   | 400.0x (4x de SSJ2) | Extracción de ki celular oculto |
| SSJ Dios           | Escala Deidad       | Ritual de 5 Saiyajins de luz    |
| SSJ Blue           | SSG + Super Saiyajin| Control de ki divino sereno     |
+--------------------+---------------------+---------------------------------+`}
        </pre>
      </div>

      {/* Pie de página con <hr> (Requisito 7) */}
      <SectionFooter sectionName="Transformaciones Legendarias" onNavigate={onNavigate} />
    </section>
  );
};

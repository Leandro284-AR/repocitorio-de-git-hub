import React, { useState } from 'react';
import { RACES_DATA } from '../data/dbzData';
import { SectionFooter } from './SectionFooter';
import { SectionId } from '../types';

interface RazasSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const RazasSection: React.FC<RazasSectionProps> = ({ onNavigate }) => {
  const [selectedRace, setSelectedRace] = useState<string | null>(null);

  const filteredRaces = selectedRace 
    ? RACES_DATA.filter(r => r.id === selectedRace)
    : RACES_DATA;

  return (
    <section id="razas" className="space-y-6 animate-fadeIn">
      {/* Encabezado principal de la sección */}
      <header className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-500 tracking-tight">
          RAZAS DEL UNIVERSO DRAGON BALL Z
        </h2>
        {/* Uso explícito de <p> y <br> */}
        <p className="text-neutral-300 text-sm leading-relaxed max-w-3xl">
          Esta es la categoría enciclopédica en la que encontrarás todos los artículos detallados sobre las razas biológicas, mutaciones y construcciones cibernéticas que habitan el Universo 7.<br />
          Explora sus orígenes planetarios, rasgos genéticos distintivos y sus guerreros más representativos.
        </p>
      </header>

      {/* Filtros rápidos de raza */}
      <div className="flex flex-wrap gap-2 pt-1">
        <button
          onClick={() => setSelectedRace(null)}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
            selectedRace === null 
              ? 'bg-amber-500 text-neutral-950 font-bold' 
              : 'bg-[#1c1f2e] text-neutral-300 border border-[#2a2e43] hover:border-amber-500/50'
          }`}
        >
          Todas las Razas ({RACES_DATA.length})
        </button>
        {RACES_DATA.map(r => (
          <button
            key={r.id}
            onClick={() => setSelectedRace(r.id)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
              selectedRace === r.id 
                ? 'bg-amber-500 text-neutral-950 font-bold' 
                : 'bg-[#1c1f2e] text-neutral-300 border border-[#2a2e43] hover:border-amber-500/50'
            }`}
          >
            {r.name.split('(')[0].trim()}
          </button>
        ))}
      </div>

      {/* Listado de Tarjetas de Razas */}
      <div className="space-y-4">
        {filteredRaces.map((race) => (
          <article 
            key={race.id}
            id={`raza-${race.id}`}
            className="bg-[#1c1f2e] border border-[#2a2e43] border-l-4 border-l-amber-500 p-5 rounded-lg space-y-4 shadow-sm hover:border-[#383d58] transition-all"
          >
            <div className="flex items-center gap-3">
              <span className={`w-8 h-8 rounded-md flex items-center justify-center font-black text-sm shadow-sm ${race.badgeColor || 'bg-amber-500 text-black'}`}>
                {race.badge}
              </span>
              <div>
                <h3 className="text-amber-500 font-bold text-lg leading-none">
                  {race.name}
                </h3>
                <p className="text-neutral-400 text-xs mt-1">
                  Origen: <span className="text-neutral-300 font-medium">{race.origin}</span>
                </p>
              </div>
            </div>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              {race.desc}
            </p>

            {/* Miembros conocidos */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Miembros conocidos
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {race.knownMembers.map((member, idx) => (
                  <span 
                    key={idx}
                    className="bg-[#12141c] border border-[#2a2e43] text-neutral-300 px-2.5 py-1 rounded text-xs hover:border-amber-500/40 transition-colors"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>

            {/* Rasgos distintivos */}
            <div className="space-y-1.5 pt-1">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Rasgos distintivos & Biología
              </h4>
              <ul className="list-disc list-inside text-xs text-neutral-300 space-y-1 pl-1">
                {race.distinctiveTraits.map((trait, idx) => (
                  <li key={idx} className="leading-normal">
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* Aplicación de etiqueta <pre> con esquema taxonómico */}
      <div className="bg-[#151721] border border-[#222534] p-4 rounded-lg space-y-2">
        <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wider flex items-center gap-2">
          <span>🧬</span>
          <span>TAXONOMÍA Y ESCALA BIOLÓGICA DE ESPECIES (FORMATO PREFORMATEADO)</span>
        </h4>
        <p className="text-xs text-neutral-400">
          Estructura de compatibilidad genética y multiplicación energética:
        </p>
        <pre className="bg-[#0e1017] text-neutral-300 p-3 rounded font-mono text-xs overflow-x-auto border border-[#222534] leading-relaxed">
{`+-------------------------------------------------------------------------+
| ESQUEMA BIOLÓGICO Y FACTOR DE COMPATIBILIDAD GENÉTICA                   |
+----------------------+--------------------+-----------------------------+
| RAZA 1               | RAZA 2             | RESULTADO GENÉTICO          |
+----------------------+--------------------+-----------------------------+
| Saiyajin Puro        | Terrícola Humano   | Híbrido con Potencial x100  |
| Namekiano (Guerrero) | Namekiano (Dragón) | Fusión Asimilativa Unificada|
| Bio-Androide (Cell)  | ADN Saiy/Namek/Free| Regeneración + Zenkai Máximo|
| Demonio Frío         | Mutación Natural   | Multi-metamorfosis regresiva|
+----------------------+--------------------+-----------------------------+`}
        </pre>
      </div>

      {/* Pie de página de la sección con <hr> (Requisito 7) */}
      <SectionFooter sectionName="Razas del Universo" onNavigate={onNavigate} />
    </section>
  );
};

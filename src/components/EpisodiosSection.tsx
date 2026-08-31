import React, { useState } from 'react';
import { EPISODES_DATA } from '../data/dbzData';
import { SectionFooter } from './SectionFooter';
import { SectionId } from '../types';

interface EpisodiosSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const EpisodiosSection: React.FC<EpisodiosSectionProps> = ({ onNavigate }) => {
  const [sagaFilter, setSagaFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredEpisodes = EPISODES_DATA.filter((ep) => {
    const matchesSaga = sagaFilter === 'all' || ep.saga === sagaFilter;
    const matchesSearch = 
      ep.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ep.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `episodio ${ep.number}`.includes(searchTerm.toLowerCase());

    return matchesSaga && matchesSearch;
  });

  return (
    <section id="episodios" className="space-y-6 animate-fadeIn">
      {/* Encabezado */}
      <header className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-500 tracking-tight">
          GUÍA DE EPISODIOS CLAVE DE DRAGON BALL Z
        </h2>
        {/* Uso explícito de <p> y <br> */}
        <p className="text-neutral-300 text-sm leading-relaxed max-w-3xl">
          Listado de los 291 capítulos fundamentales y momentos decisivos en la historia animada.<br />
          Filtra por arco narrativo o busca capítulos específicos para revivir los combates más emocionantes.
        </p>
      </header>

      {/* Controles de Búsqueda y Filtros */}
      <div className="bg-[#1c1f2e] border border-[#2a2e43] p-4 rounded-lg space-y-3">
        <input
          type="text"
          placeholder="Buscar episodio por título, número o resumen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#12141c] border border-[#2a2e43] focus:border-amber-500 text-white placeholder-neutral-500 text-xs sm:text-sm px-3.5 py-2.5 rounded-md outline-none"
        />

        <div className="flex flex-wrap gap-2 pt-1">
          {['all', 'Saiyajin', 'Freezer', 'Cell', 'Majin Boo'].map((saga) => (
            <button
              key={saga}
              onClick={() => setSagaFilter(saga)}
              className={`px-3 py-1.5 rounded text-xs font-semibold cursor-pointer transition-colors ${
                sagaFilter === saga 
                  ? 'bg-amber-500 text-black font-bold' 
                  : 'bg-[#12141c] text-neutral-300 border border-[#2a2e43] hover:border-amber-500/50'
              }`}
            >
              {saga === 'all' ? 'Todas las Sagas' : `Saga ${saga}`}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Episodios */}
      <div className="space-y-3">
        {filteredEpisodes.map((ep) => (
          <article
            key={ep.number}
            id={`ep-${ep.number}`}
            className="bg-[#1c1f2e] border border-[#2a2e43] hover:border-amber-500/50 p-4 rounded-lg flex gap-4 items-start transition-all"
          >
            <div className="w-12 h-12 rounded bg-[#12141c] border border-[#2a2e43] flex flex-col items-center justify-center shrink-0">
              <span className="text-[10px] text-neutral-400">EP</span>
              <span className="text-amber-500 font-bold font-mono text-sm leading-none">{ep.number}</span>
            </div>

            <div className="space-y-1 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-white font-bold text-sm sm:text-base">
                  {ep.title}
                </h3>
                <span className="text-[10px] bg-[#12141c] text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded font-medium">
                  Saga {ep.saga}
                </span>
              </div>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                {ep.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Pie de página con <hr> (Requisito 7) */}
      <SectionFooter sectionName="Episodios Clave" onNavigate={onNavigate} />
    </section>
  );
};

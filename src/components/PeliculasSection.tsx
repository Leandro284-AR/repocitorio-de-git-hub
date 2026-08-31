import React from 'react';
import { MOVIES_DATA } from '../data/dbzData';
import { SectionFooter } from './SectionFooter';
import { SectionId } from '../types';

interface PeliculasSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const PeliculasSection: React.FC<PeliculasSectionProps> = ({ onNavigate }) => {
  return (
    <section id="peliculas" className="space-y-6 animate-fadeIn">
      {/* Encabezado */}
      <header className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-500 tracking-tight">
          PELÍCULAS OFICIALES DE DRAGON BALL Z (1989 - 2015)
        </h2>
        {/* Uso explícito de <p> y <br> */}
        <p className="text-neutral-300 text-sm leading-relaxed max-w-3xl">
          Listado cronológico de las 15 películas producidas para cine que expanden el multiverso de Dragon Ball Z.<br />
          Conoce a villanos legendarios como Cooler, Broly, Janemba y el Dios de la Destrucción Beerus.
        </p>
      </header>

      {/* Grid de Películas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MOVIES_DATA.map((movie) => (
          <article
            key={movie.number}
            id={`pelicula-${movie.number}`}
            className="bg-[#1c1f2e] border border-[#2a2e43] hover:border-amber-500/50 p-5 rounded-lg space-y-3 flex flex-col justify-between transition-all hover:translate-y-[-2px]"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="bg-amber-500 text-neutral-950 font-black text-xs px-2.5 py-0.5 rounded">
                  Película #{movie.number}
                </span>
                <span className="text-neutral-400 text-xs font-mono">
                  Año {movie.year} {movie.duration && `· ${movie.duration}`}
                </span>
              </div>

              <h3 className="text-white font-bold text-base sm:text-lg">
                {movie.title}
              </h3>

              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                {movie.desc}
              </p>
            </div>

            <div className="bg-[#12141c] p-2.5 rounded border border-[#222534] text-xs">
              <span className="text-amber-400 font-semibold">Villano Principal: </span>
              <span className="text-neutral-200">{movie.villain}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Pie de página con <hr> (Requisito 7) */}
      <SectionFooter sectionName="Películas Oficiales" onNavigate={onNavigate} />
    </section>
  );
};

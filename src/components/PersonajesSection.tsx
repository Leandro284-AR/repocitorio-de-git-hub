import React, { useState } from 'react';
import { CHARACTERS_DATA } from '../data/dbzData';
import { SectionFooter } from './SectionFooter';
import { Character, SectionId } from '../types';

interface PersonajesSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const PersonajesSection: React.FC<PersonajesSectionProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<'all' | 'hero' | 'villain'>('all');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const filteredCharacters = CHARACTERS_DATA.filter((char) => {
    const matchesSearch = 
      char.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      char.race.toLowerCase().includes(searchTerm.toLowerCase()) ||
      char.specialTechniques.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesRole = roleFilter === 'all' || char.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  return (
    <section id="personajes" className="space-y-6 animate-fadeIn">
      {/* Encabezado principal */}
      <header className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-500 tracking-tight">
          PERSONAJES PRINCIPALES DE DRAGON BALL Z
        </h2>
        {/* Uso explícito de <p> y <br> */}
        <p className="text-neutral-300 text-sm leading-relaxed max-w-3xl">
          Listado enciclopédico de los héroes legendarios, rivales y tiranos intergalácticos.<br />
          Consulta sus técnicas secretas, arcos de debut, orígenes raciales y aproximaciones de poder de combate.
        </p>
      </header>

      {/* Barra de Búsqueda y Filtros */}
      <div className="bg-[#1c1f2e] border border-[#2a2e43] p-4 rounded-lg space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              id="input-buscar-personaje"
              type="text"
              placeholder="Buscar por nombre, técnica (ej: Kamehameha, Final Flash) o raza..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#12141c] border border-[#2a2e43] focus:border-amber-500 text-white placeholder-neutral-500 text-xs sm:text-sm px-3.5 py-2.5 rounded-md outline-none transition-colors"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 text-neutral-400 hover:text-white text-xs cursor-pointer"
              >
                ✕ Limpiar
              </button>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setRoleFilter('all')}
              className={`px-3 py-2 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
                roleFilter === 'all' 
                  ? 'bg-amber-500 text-neutral-950 font-bold' 
                  : 'bg-[#12141c] text-neutral-300 border border-[#2a2e43] hover:border-amber-500/40'
              }`}
            >
              Todos ({CHARACTERS_DATA.length})
            </button>
            
            <button
              onClick={() => setRoleFilter('hero')}
              className={`px-3 py-2 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
                roleFilter === 'hero' 
                  ? 'bg-emerald-600 text-white font-bold' 
                  : 'bg-[#12141c] text-neutral-300 border border-[#2a2e43] hover:border-emerald-500/40'
              }`}
            >
              🛡️ Guerreros Z ({CHARACTERS_DATA.filter(c => c.role === 'hero').length})
            </button>

            <button
              onClick={() => setRoleFilter('villain')}
              className={`px-3 py-2 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
                roleFilter === 'villain' 
                  ? 'bg-red-600 text-white font-bold' 
                  : 'bg-[#12141c] text-neutral-300 border border-[#2a2e43] hover:border-red-500/40'
              }`}
            >
              ⚔️ Villanos ({CHARACTERS_DATA.filter(c => c.role === 'villain').length})
            </button>
          </div>
        </div>
      </div>

      {/* Resultados de Personajes */}
      {filteredCharacters.length === 0 ? (
        <div className="bg-[#1c1f2e] border border-[#2a2e43] p-8 rounded-lg text-center space-y-2">
          <p className="text-amber-500 font-bold text-base">No se encontraron guerreros con esos términos.</p>
          <p className="text-neutral-400 text-xs">Intenta buscar "Goku", "Saiyajin", "Freezer" o limpia el filtro.</p>
          <button
            onClick={() => { setSearchTerm(''); setRoleFilter('all'); }}
            className="mt-2 bg-amber-500 text-neutral-950 px-4 py-1.5 rounded text-xs font-bold cursor-pointer"
          >
            Restablecer búsqueda
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCharacters.map((char) => (
            <article
              key={char.id}
              id={`personaje-${char.id}`}
              className="bg-[#1c1f2e] border border-[#2a2e43] hover:border-amber-500/60 p-4 sm:p-5 rounded-lg flex flex-col justify-between space-y-3 transition-all hover:translate-y-[-2px] shadow-sm relative group"
            >
              {/* Badge de Rol */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-lg bg-[#12141c] border border-[#2a2e43] flex items-center justify-center text-2xl shadow-inner group-hover:scale-105 transition-transform"
                    style={{ borderColor: char.accentColor + '66' }}
                  >
                    <span>{char.avatarIcon}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg group-hover:text-amber-400 transition-colors">
                      {char.name}
                    </h3>
                    <p className="text-neutral-400 text-xs flex items-center gap-2">
                      <span>{char.race}</span>
                      {char.japaneseName && (
                        <span className="text-neutral-500 font-mono text-[11px]">({char.japaneseName})</span>
                      )}
                    </p>
                  </div>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                  char.role === 'hero' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-red-950 text-red-300 border border-red-800'
                }`}>
                  {char.role === 'hero' ? 'Héroe' : 'Villano'}
                </span>
              </div>

              {/* Descripción */}
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                {char.desc}
              </p>

              {/* Debut */}
              <div className="bg-[#12141c] p-2.5 rounded border border-[#222534] text-xs space-y-1">
                <div className="flex justify-between items-center text-neutral-400">
                  <span>Debut oficial:</span>
                  <span className="text-amber-400 font-semibold">{char.debut}</span>
                </div>
                {char.powerLevelEstimate && (
                  <div className="flex justify-between items-center text-neutral-400">
                    <span>Nivel estimado:</span>
                    <span className="text-emerald-400 font-mono text-[11px]">{char.powerLevelEstimate}</span>
                  </div>
                )}
              </div>

              {/* Técnicas */}
              <div className="space-y-1 pt-1">
                <h4 className="text-[11px] font-bold text-amber-500/90 uppercase tracking-wider">
                  Técnicas Especiales:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {char.specialTechniques.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-[#151721] text-neutral-300 border border-[#2a2e43] px-2 py-0.5 rounded text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botón de Ficha Detallada */}
              <div className="pt-2">
                <button
                  onClick={() => setSelectedCharacter(char)}
                  className="w-full bg-[#151721] hover:bg-amber-500 hover:text-black text-amber-400 border border-amber-500/30 hover:border-amber-500 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer"
                >
                  Ver Ficha de Combate Completa 🔍
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Modal / Detalle de Personaje */}
      {selectedCharacter && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#181a24] border border-amber-500/50 rounded-xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setSelectedCharacter(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white text-lg bg-[#222534] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-3">
              <div className="text-4xl p-3 bg-[#12141c] border border-amber-500/40 rounded-lg">
                {selectedCharacter.avatarIcon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-500">
                  {selectedCharacter.name}
                </h3>
                <p className="text-xs text-neutral-400">
                  {selectedCharacter.race} · {selectedCharacter.role === 'hero' ? 'Defensor de la Tierra' : 'Amenaza Galáctica'}
                </p>
              </div>
            </div>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              {selectedCharacter.desc}
            </p>

            <div className="space-y-2 text-xs bg-[#12141c] p-3.5 rounded-lg border border-[#2a2e43]">
              <h4 className="text-amber-400 font-bold uppercase text-[11px]">Registro de Combate:</h4>
              <p><strong className="text-neutral-300">Debut:</strong> {selectedCharacter.debut}</p>
              <p><strong className="text-neutral-300">Rango de Poder:</strong> <span className="font-mono text-emerald-400">{selectedCharacter.powerLevelEstimate || 'Clasificado'}</span></p>
              <p><strong className="text-neutral-300">Técnicas Clave:</strong> {selectedCharacter.specialTechniques.join(', ')}</p>
            </div>

            {/* Bloque preformateado de técnica en modal */}
            <div className="space-y-1">
              <h5 className="text-[11px] font-bold text-neutral-400 uppercase">Cálculo de Ki de Técnica:</h5>
              <pre className="bg-[#0e1017] text-amber-300 p-2.5 rounded text-[11px] font-mono border border-amber-500/20">
{`KI_FORMULA: Base_Power * Tech_Multiplier
TECH_NAME : ${selectedCharacter.specialTechniques[0]}
STATUS    : 100% Carga Concentrada lista para disparo.`}
              </pre>
            </div>

            <button
              onClick={() => setSelectedCharacter(null)}
              className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 py-2 rounded-md font-bold text-xs transition-colors cursor-pointer"
            >
              Cerrar Ficha
            </button>
          </div>
        </div>
      )}

      {/* Pie de página de la sección con <hr> (Requisito 7) */}
      <SectionFooter sectionName="Personajes Principales" onNavigate={onNavigate} />
    </section>
  );
};

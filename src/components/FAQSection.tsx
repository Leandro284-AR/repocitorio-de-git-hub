import React, { useState } from 'react';
import { FAQS_DATA } from '../data/dbzData';
import { SectionFooter } from './SectionFooter';
import { SectionId } from '../types';

interface FAQSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [openIds, setOpenIds] = useState<string[]>([FAQS_DATA[0].id]);

  const toggleAccordion = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = categoryFilter === 'all' || faq.category === categoryFilter;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', 'Historia y Canon', 'Poder y Combate', 'Películas', 'Técnicas y Fusiones', 'Objetos Místicos'];

  return (
    <section id="faq" className="space-y-6 animate-fadeIn">
      {/* Encabezado */}
      <header className="space-y-2">
        <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider">
          <span>❓</span>
          <span>Centro de Ayuda & Respuestas Frecuentes</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-500 tracking-tight">
          PREGUNTAS FRECUENTES (FAQ)
        </h2>

        {/* Uso explícito de <p> y <br> */}
        <p className="text-neutral-300 text-sm leading-relaxed max-w-3xl">
          Resolvemos las dudas y controversias más comunes sobre la historia, escala de poderes y continuidad de Dragon Ball Z.<br />
          Haz clic en cada pregunta para desplegar la respuesta documentada con datos oficiales de las guías y entrevistas.
        </p>
      </header>

      {/* Buscador y Filtro por Categorías */}
      <div className="bg-[#1c1f2e] border border-[#2a2e43] p-4 rounded-lg space-y-3">
        <input
          type="text"
          placeholder="Buscar duda (ej: ¿Qué significa la Z?, ¿Multiplicador SSJ?, ¿Películas canon?)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#12141c] border border-[#2a2e43] focus:border-amber-500 text-white placeholder-neutral-500 text-xs sm:text-sm px-3.5 py-2.5 rounded-md outline-none"
        />

        <div className="flex flex-wrap gap-2 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded text-xs font-semibold cursor-pointer transition-colors ${
                categoryFilter === cat 
                  ? 'bg-amber-500 text-neutral-950 font-bold' 
                  : 'bg-[#12141c] text-neutral-300 border border-[#2a2e43] hover:border-amber-500/50'
              }`}
            >
              {cat === 'all' ? 'Todas las Categorías' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Acordeón de Preguntas Frecuentes */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <article
              key={faq.id}
              id={`faq-${faq.id}`}
              className="bg-[#1c1f2e] border border-[#2a2e43] hover:border-amber-500/50 rounded-lg overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer bg-[#1c1f2e] hover:bg-[#222538] transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-amber-500 bg-[#12141c] border border-amber-500/30 px-2 py-0.5 rounded">
                    {faq.category}
                  </span>
                  <h3 className="text-white font-bold text-sm sm:text-base pt-1">
                    {faq.question}
                  </h3>
                </div>
                <span className={`text-amber-500 font-bold text-lg transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {isOpen && (
                <div className="p-4 sm:p-5 pt-0 border-t border-[#222534] bg-[#151721] space-y-3 animate-fadeIn">
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                  
                  {faq.detail && (
                    <div className="bg-[#12141c] border-l-2 border-amber-500 p-3 rounded-r text-xs text-neutral-400 italic">
                      <strong>Dato adicional:</strong> {faq.detail}
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Pie de página con <hr> (Requisito 7) */}
      <SectionFooter sectionName="Preguntas Frecuentes" onNavigate={onNavigate} />
    </section>
  );
};

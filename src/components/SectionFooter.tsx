import React from 'react';
import { SectionId } from '../types';

interface SectionFooterProps {
  sectionName: string;
  onNavigate?: (target: SectionId) => void;
}

export const SectionFooter: React.FC<SectionFooterProps> = ({ sectionName, onNavigate }) => {
  return (
    <footer id={`footer-${sectionName.toLowerCase().replace(/\s+/g, '-')}`} className="mt-12 pt-6 pb-4">
      {/* Requisito 7: Etiqueta HR obligatoria en el pie de página de cada sección */}
      <hr className="border-t border-amber-500/30 my-6" />
      
      <div className="bg-[#151721] border border-[#222534] rounded-lg p-5 text-center text-xs text-neutral-400 space-y-3">
        <div className="flex items-center justify-center gap-2">
          <span className="text-amber-500 text-base">🟠</span>
          <h4 className="text-amber-500 font-bold text-sm tracking-wider uppercase">
            Dragon Ball Z Enciclopedia · Sección: {sectionName}
          </h4>
        </div>
        
        <p className="max-w-2xl mx-auto text-neutral-400 leading-relaxed">
          Proyecto educativo y divulgativo desarrollado por estudiantes de Escuela Secundaria Técnica especializada en Informática.
          <br />
          Contenido conceptual basado en la obra original de <strong>Akira Toriyama</strong> · © Bird Studio / Shueisha / Toei Animation.
        </p>

        {onNavigate && (
          <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 pt-2 border-t border-[#222534] text-neutral-400">
            <button 
              onClick={() => onNavigate('portada')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Portada
            </button>
            <span>·</span>
            <button 
              onClick={() => onNavigate('personajes')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Personajes
            </button>
            <span>·</span>
            <button 
              onClick={() => onNavigate('sagas')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Sagas
            </button>
            <span>·</span>
            <button 
              onClick={() => onNavigate('blog')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Blog
            </button>
            <span>·</span>
            <button 
              onClick={() => onNavigate('cv')} 
              className="text-amber-400/90 font-medium hover:text-amber-300 transition-colors cursor-pointer"
            >
              CV Técnico
            </button>
            <span>·</span>
            <button 
              onClick={() => onNavigate('faq')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <span>·</span>
            <button 
              onClick={() => onNavigate('quienes-somos')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Quiénes Somos
            </button>
          </nav>
        )}

        <p className="text-[11px] text-neutral-400 pt-1">
          © {new Date().getFullYear()} DBZ Enciclopedia · Todos los derechos reservados · Código HTML5 semántico & CSS con Tailwind
        </p>
      </div>
    </footer>
  );
};

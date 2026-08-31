import React from 'react';
import { SectionFooter } from './SectionFooter';
import { SectionId } from '../types';

interface QuienesSomosSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const QuienesSomosSection: React.FC<QuienesSomosSectionProps> = ({ onNavigate }) => {
  return (
    <section id="quienes-somos" className="space-y-8 animate-fadeIn">
      {/* Encabezado */}
      <header className="space-y-2 border-b border-[#2a2e43] pb-5">
        <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider">
          <span>👥</span>
          <span>Institucional & Acerca del Proyecto</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-500 tracking-tight">
          QUIÉNES SOMOS · PROYECTO EDUCATIVO DE INFORMÁTICA
        </h2>

        {/* Uso explícito de <p> y <br> */}
        <p className="text-neutral-300 text-sm leading-relaxed max-w-3xl">
          Conoce el origen, objetivos y equipo de desarrollo detrás de la Enciclopedia Web de Dragon Ball Z.<br />
          Un proyecto integrador nacido en las aulas de una Escuela de Educación Secundaria Técnica especializada en Informática.
        </p>
      </header>

      {/* Tarjetas de Misión y Visión */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="bg-[#1c1f2e] border border-[#2a2e43] p-6 rounded-lg space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl p-2 bg-[#12141c] rounded border border-amber-500/30">🎯</span>
            <h3 className="text-amber-500 font-bold text-lg">
              Nuestra Misión Educativa
            </h3>
          </div>
          <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
            Consolidar los conocimientos adquiridos en las materias de Programación Web, Algoritmos, Estructuras de Datos y Arquitectura de Computadoras mediante la construcción de un portal real, dinámico y accesible para la comunidad aficionada al anime.
          </p>
        </article>

        <article className="bg-[#1c1f2e] border border-[#2a2e43] p-6 rounded-lg space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl p-2 bg-[#12141c] rounded border border-amber-500/30">💡</span>
            <h3 className="text-amber-500 font-bold text-lg">
              Visión y Metodología
            </h3>
          </div>
          <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
            Promover las buenas prácticas del desarrollo web estándar: maquetación semántica con HTML5, accesibilidad WCAG AA, jerarquías de encabezados claras, diseño responsivo para móviles y código limpio y mantenible.
          </p>
        </article>
      </div>

      {/* Perfil del Desarrollador / Estudiante */}
      <section className="bg-[#1c1f2e] border border-[#2a2e43] p-6 sm:p-8 rounded-lg space-y-4">
        <h3 className="text-xl font-bold text-amber-500 flex items-center gap-2">
          <span>👨‍💻</span>
          <span>Desarrollador Principal & Autor</span>
        </h3>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-[#151721] p-5 rounded-lg border border-[#222534]">
          <div className="w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center font-extrabold text-xl shrink-0 shadow-lg shadow-amber-500/20">
            LM
          </div>
          
          <div className="space-y-1 flex-1">
            <h4 className="text-white font-bold text-lg">
              Leandro Daniel Martínez
            </h4>
            <p className="text-amber-400 text-xs font-semibold">
              Estudiante Técnico en Informática · Escuela de Educación Secundaria Técnica
            </p>
            {/* Uso de <p> y <br> */}
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed pt-1">
              Estudiante de ciclo superior con orientación en Programación y Redes.<br />
              Creador y administrador del contenido, diseño gráfico, scripts de optimización y arquitectura técnica de la enciclopedia.
            </p>
          </div>

          <button
            onClick={() => onNavigate('cv')}
            className="bg-amber-500 hover:bg-amber-400 text-neutral-950 px-4 py-2 rounded text-xs font-bold transition-colors cursor-pointer shrink-0"
          >
            Ver CV Completo 📄
          </button>
        </div>
      </section>

      {/* Arquitectura del Sistema con <pre> (Requisito 5) */}
      <section className="bg-[#151721] border border-[#222534] p-5 rounded-lg space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-amber-500 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
            <span>🛠️</span>
            <span>STACK TECNOLÓGICO Y ARQUITECTURA DEL SITIO (&lt;pre&gt;)</span>
          </h3>
          <span className="text-[11px] font-mono text-neutral-400">ESTÁNDARES WEB W3C</span>
        </div>

        <p className="text-xs text-neutral-400">
          Resumen de las tecnologías y etiquetas estructurales implementadas en este proyecto:
        </p>

        {/* Requisito 5: Etiqueta <pre> */}
        <pre className="bg-[#0e1017] text-emerald-400 p-4 rounded-md font-mono text-xs overflow-x-auto border border-[#222534] leading-relaxed">
{`================================================================================
ARQUITECTURA DE SOFTWARE · DBZ ENCICLOPEDIA WEB (ESCUELA TÉCNICA)
================================================================================
[CAPA DE PRESENTACIÓN] : React 19 + TypeScript + Vite + Tailwind CSS v4
[ESTRUCTURA SEMÁNTICA]: HTML5 (header, nav, main, section, article, footer, hr)
[ETIQUETAS REQUERIDAS]: <pre> (bloques preformateados), <br> (saltos), <p> (párrafos)
[JERARQUÍA TÍTULOS]   : Niveles H1 -> H2 -> H3 -> H4 -> H5 en Blog y CV
[PIES DE PÁGINA]      : <footer> individual en cada sección con etiqueta <hr>
[RESPONSIVIDAD]       : Diseño fluido adaptado para Smartphones, Tablets y PC
================================================================================`}
        </pre>
      </section>

      {/* Pie de página con <hr> (Requisito 7) */}
      <SectionFooter sectionName="Quiénes Somos" onNavigate={onNavigate} />
    </section>
  );
};

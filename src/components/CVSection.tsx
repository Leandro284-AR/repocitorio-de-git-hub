import React, { useState } from 'react';
import { CV_DATA } from '../data/dbzData';
import { SectionFooter } from './SectionFooter';
import { SectionId } from '../types';

interface CVSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const CVSection: React.FC<CVSectionProps> = ({ onNavigate }) => {
  const [printMode, setPrintMode] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="cv" className="space-y-8 animate-fadeIn">
      {/* Barra de control superior para imprimir / cambiar vista */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#1c1f2e] border border-[#2a2e43] p-4 rounded-lg">
        <div>
          <span className="text-amber-500 font-bold text-xs uppercase tracking-wider block">
            📄 Sección Curricular Independiente
          </span>
          <p className="text-xs text-neutral-400">
            Perfil de Estudiante de Escuela Técnica Especializada en Informática.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setPrintMode(!printMode)}
            className="bg-[#12141c] hover:bg-[#252a3f] text-neutral-200 border border-[#2a2e43] px-3.5 py-1.5 rounded text-xs font-semibold cursor-pointer transition-colors"
          >
            {printMode ? '👁️ Modo Oscuro DBZ' : '📄 Modo CV Blanco Formal'}
          </button>

          <button
            onClick={handlePrint}
            className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-4 py-1.5 rounded text-xs cursor-pointer transition-colors shadow-sm"
          >
            🖨️ Imprimir / Guardar PDF
          </button>
        </div>
      </div>

      {/* =========================================================================
          CONTENEDOR DEL CV CON JERARQUÍA ESTRICTA DE ENCABEZADOS (H1, H2, H3, H4, H5)
          Y ETIQUETAS SOLICITADAS: <p>, <br>, <pre> (Requisitos 4 y 5)
          ========================================================================= */}
      <div 
        id="cv-printable-container"
        className={`p-6 sm:p-10 rounded-xl border transition-all space-y-8 ${
          printMode 
            ? 'bg-white text-neutral-900 border-neutral-300 shadow-xl' 
            : 'bg-[#1c1f2e] text-neutral-200 border-[#2a2e43] shadow-md'
        }`}
      >
        
        {/* =====================================================================
            NIVEL DE ENCABEZADO 1 (H1): Nombre Principal del Postulante
            ===================================================================== */}
        <header className={`border-b pb-6 space-y-3 ${printMode ? 'border-neutral-300' : 'border-[#2a2e43]'}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                printMode ? 'text-neutral-950' : 'text-amber-500'
              }`}>
                {CV_DATA.fullName}
              </h1>

              {/* NIVEL DE ENCABEZADO 2 (H2): Título Profesional y Especialidad */}
              <h2 className={`text-lg sm:text-xl font-semibold mt-1 ${
                printMode ? 'text-amber-700' : 'text-amber-400'
              }`}>
                {CV_DATA.title}
              </h2>
            </div>

            <div className={`text-xs space-y-1 sm:text-right ${printMode ? 'text-neutral-600' : 'text-neutral-400'}`}>
              {/* Uso explícito de <p> y <br> para datos de contacto estructurados */}
              <p className="leading-relaxed">
                📍 <strong>Ubicación:</strong> {CV_DATA.location}<br />
                📧 <strong>Correo:</strong> <a href={`mailto:${CV_DATA.email}`} className="hover:underline">{CV_DATA.email}</a><br />
                📞 <strong>Teléfono:</strong> {CV_DATA.phone}<br />
                💻 <strong>GitHub:</strong> <span className="font-mono text-[11px]">{CV_DATA.github}</span>
              </p>
            </div>
          </div>

          <div className={`p-3.5 rounded-lg text-xs sm:text-sm leading-relaxed ${
            printMode ? 'bg-neutral-100 border border-neutral-200' : 'bg-[#151721] border border-[#222534] text-neutral-300'
          }`}>
            <span className="font-bold text-amber-500 mr-1">Especialidad Formativa:</span>
            {CV_DATA.specialty}
          </div>
        </header>

        {/* =====================================================================
            SECCIÓN 1: PERFIL PROFESIONAL (H3)
            ===================================================================== */}
        <section id="cv-perfil" className="space-y-2">
          <h3 className={`text-lg sm:text-xl font-bold uppercase tracking-wide border-b pb-1.5 flex items-center gap-2 ${
            printMode ? 'text-neutral-900 border-neutral-300' : 'text-amber-500 border-[#2a2e43]'
          }`}>
            <span>👤</span>
            <span>1. Perfil Profesional & Resumen Técnico</span>
          </h3>

          {/* Uso explícito de <p> y <br> */}
          <p className={`text-xs sm:text-sm leading-relaxed ${printMode ? 'text-neutral-700' : 'text-neutral-300'}`}>
            {CV_DATA.profileSummary}
          </p>
        </section>

        {/* =====================================================================
            SECCIÓN 2: EDUCACIÓN Y FORMACIÓN ACADÉMICA TÉCNICA (H3)
            ===================================================================== */}
        <section id="cv-educacion" className="space-y-4">
          <h3 className={`text-lg sm:text-xl font-bold uppercase tracking-wide border-b pb-1.5 flex items-center gap-2 ${
            printMode ? 'text-neutral-900 border-neutral-300' : 'text-amber-500 border-[#2a2e43]'
          }`}>
            <span>🎓</span>
            <span>2. Formación Académica & Escuela Técnica</span>
          </h3>

          <div className="space-y-4">
            {CV_DATA.education.map((edu, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-lg border space-y-2 ${
                  printMode ? 'bg-neutral-50 border-neutral-200' : 'bg-[#151721] border-[#222534]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  {/* Encabezado H4: Título de la Institución Educativa */}
                  <h4 className={`text-sm sm:text-base font-bold ${
                    printMode ? 'text-neutral-950' : 'text-white'
                  }`}>
                    {edu.institution}
                  </h4>
                  
                  {/* Encabezado H5: Periodo de Cursada */}
                  <h5 className={`text-xs font-mono font-semibold ${
                    printMode ? 'text-amber-700' : 'text-amber-400'
                  }`}>
                    {edu.period} · {edu.location}
                  </h5>
                </div>

                <p className={`text-xs font-semibold ${printMode ? 'text-neutral-800' : 'text-amber-300'}`}>
                  {edu.degree} — <span className="font-normal text-neutral-400">({edu.status})</span>
                </p>

                <ul className={`list-disc list-inside text-xs space-y-1 pl-1 ${
                  printMode ? 'text-neutral-700' : 'text-neutral-300'
                }`}>
                  {edu.details.map((det, dIdx) => (
                    <li key={dIdx} className="leading-relaxed">
                      {det}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================================
            SECCIÓN 3: EXPERIENCIA LABORAL Y PRÁCTICAS PROFESIONALIZANTES (H3)
            ===================================================================== */}
        <section id="cv-experiencia" className="space-y-4">
          <h3 className={`text-lg sm:text-xl font-bold uppercase tracking-wide border-b pb-1.5 flex items-center gap-2 ${
            printMode ? 'text-neutral-900 border-neutral-300' : 'text-amber-500 border-[#2a2e43]'
          }`}>
            <span>💼</span>
            <span>3. Experiencia Laboral & Prácticas de Laboratorio</span>
          </h3>

          <div className="space-y-4">
            {CV_DATA.experience.map((exp, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-lg border space-y-2.5 ${
                  printMode ? 'bg-neutral-50 border-neutral-200' : 'bg-[#151721] border-[#222534]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  {/* Encabezado H4: Puesto / Rol Desempeñado */}
                  <h4 className={`text-sm sm:text-base font-bold ${
                    printMode ? 'text-neutral-950' : 'text-white'
                  }`}>
                    {exp.role}
                  </h4>

                  {/* Encabezado H5: Periodo y Contexto */}
                  <h5 className={`text-xs font-mono font-semibold ${
                    printMode ? 'text-amber-700' : 'text-amber-400'
                  }`}>
                    {exp.period} · {exp.type}
                  </h5>
                </div>

                <p className={`text-xs font-semibold ${printMode ? 'text-neutral-600' : 'text-neutral-400'}`}>
                  Entorno: <span className={printMode ? 'text-neutral-900' : 'text-neutral-200'}>{exp.companyOrContext}</span>
                </p>

                <ul className={`list-disc list-inside text-xs space-y-1.5 pl-1 ${
                  printMode ? 'text-neutral-700' : 'text-neutral-300'
                }`}>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================================
            SECCIÓN 4: HABILIDADES TÉCNICAS Y COMPETENCIAS (H3)
            ===================================================================== */}
        <section id="cv-habilidades" className="space-y-4">
          <h3 className={`text-lg sm:text-xl font-bold uppercase tracking-wide border-b pb-1.5 flex items-center gap-2 ${
            printMode ? 'text-neutral-900 border-neutral-300' : 'text-amber-500 border-[#2a2e43]'
          }`}>
            <span>⚙️</span>
            <span>4. Habilidades Técnicas & Tecnologías Dominadas</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CV_DATA.skills.map((skillCat, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-lg border space-y-3 ${
                  printMode ? 'bg-neutral-50 border-neutral-200' : 'bg-[#151721] border-[#222534]'
                }`}
              >
                {/* Encabezado H4: Categoría de Habilidades */}
                <h4 className={`text-xs sm:text-sm font-bold uppercase tracking-wide border-b pb-1 ${
                  printMode ? 'text-amber-800 border-neutral-300' : 'text-amber-400 border-[#2a2e43]'
                }`}>
                  {skillCat.category}
                </h4>

                <div className="space-y-2">
                  {skillCat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className={printMode ? 'text-neutral-800' : 'text-neutral-200'}>{skill.name}</span>
                        <span className={`font-mono text-[11px] font-bold ${printMode ? 'text-neutral-600' : 'text-amber-400'}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`h-1.5 w-full rounded-full overflow-hidden ${printMode ? 'bg-neutral-200' : 'bg-[#12141c]'}`}>
                        <div 
                          className="h-full bg-amber-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================================
            SECCIÓN 5: PROYECTOS DESTACADOS (H3)
            ===================================================================== */}
        <section id="cv-proyectos" className="space-y-4">
          <h3 className={`text-lg sm:text-xl font-bold uppercase tracking-wide border-b pb-1.5 flex items-center gap-2 ${
            printMode ? 'text-neutral-900 border-neutral-300' : 'text-amber-500 border-[#2a2e43]'
          }`}>
            <span>🚀</span>
            <span>5. Proyectos Técnicos Desarrollados</span>
          </h3>

          <div className="space-y-3">
            {CV_DATA.projects.map((proj, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-lg border space-y-2 ${
                  printMode ? 'bg-neutral-50 border-neutral-200' : 'bg-[#151721] border-[#222534]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  {/* Encabezado H4: Nombre del Proyecto */}
                  <h4 className={`text-sm sm:text-base font-bold ${
                    printMode ? 'text-neutral-950' : 'text-white'
                  }`}>
                    {proj.name}
                  </h4>
                  
                  {/* Encabezado H5: Rol y Año */}
                  <h5 className={`text-xs font-mono font-semibold ${
                    printMode ? 'text-amber-700' : 'text-amber-400'
                  }`}>
                    {proj.role} · {proj.period}
                  </h5>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${printMode ? 'text-neutral-700' : 'text-neutral-300'}`}>
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className={`text-[11px] px-2 py-0.5 rounded font-mono ${
                        printMode ? 'bg-neutral-200 text-neutral-800' : 'bg-[#12141c] text-neutral-300 border border-[#2a2e43]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================================
            SECCIÓN 6: CÓDIGO Y SCRIPT DE AUDITORÍA TÉCNICA CON ETIQUETA <pre> (Requisitos 4 y 5)
            ===================================================================== */}
        <section id="cv-script-tecnico" className="space-y-3">
          <h3 className={`text-lg sm:text-xl font-bold uppercase tracking-wide border-b pb-1.5 flex items-center gap-2 ${
            printMode ? 'text-neutral-900 border-neutral-300' : 'text-amber-500 border-[#2a2e43]'
          }`}>
            <span>💻</span>
            <span>6. Muestra de Código Técnico de Automatización (&lt;pre&gt;)</span>
          </h3>

          <p className={`text-xs ${printMode ? 'text-neutral-600' : 'text-neutral-400'}`}>
            Script en Python y Bash desarrollado por el estudiante para auditar conectividad de redes y parámetros de hardware en los laboratorios de la escuela técnica:
          </p>

          {/* Requisito 5: Etiqueta <pre> con código técnico real */}
          <pre className={`p-4 rounded-lg font-mono text-xs overflow-x-auto border leading-relaxed ${
            printMode 
              ? 'bg-neutral-900 text-emerald-400 border-neutral-400' 
              : 'bg-[#0e1017] text-emerald-400 border-[#222534]'
          }`}>
            {CV_DATA.technicalScript}
          </pre>
        </section>

        {/* =====================================================================
            SECCIÓN 7: CERTIFICACIONES E IDIOMAS (H3, H4)
            ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Certificaciones */}
          <section className="space-y-3">
            <h3 className={`text-base font-bold uppercase tracking-wide border-b pb-1 flex items-center gap-2 ${
              printMode ? 'text-neutral-900 border-neutral-300' : 'text-amber-500 border-[#2a2e43]'
            }`}>
              <span>📜</span>
              <span>Certificaciones</span>
            </h3>

            <div className="space-y-2">
              {CV_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="text-xs space-y-0.5">
                  <h4 className={`font-bold ${printMode ? 'text-neutral-900' : 'text-neutral-200'}`}>
                    {cert.title}
                  </h4>
                  <p className={printMode ? 'text-neutral-600' : 'text-neutral-400'}>
                    Emisor: {cert.issuer} ({cert.year})
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Idiomas */}
          <section className="space-y-3">
            <h3 className={`text-base font-bold uppercase tracking-wide border-b pb-1 flex items-center gap-2 ${
              printMode ? 'text-neutral-900 border-neutral-300' : 'text-amber-500 border-[#2a2e43]'
            }`}>
              <span>🌐</span>
              <span>Idiomas</span>
            </h3>

            <div className="space-y-2">
              {CV_DATA.languages.map((lang, idx) => (
                <div key={idx} className="text-xs space-y-0.5">
                  <h4 className={`font-bold ${printMode ? 'text-neutral-900' : 'text-neutral-200'}`}>
                    {lang.language}
                  </h4>
                  <p className={printMode ? 'text-neutral-600' : 'text-neutral-400'}>
                    Nivel: {lang.level}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>

      {/* Pie de página de la sección con <hr> (Requisito 7) */}
      <SectionFooter sectionName="Curriculum Vitae Técnico" onNavigate={onNavigate} />
    </section>
  );
};

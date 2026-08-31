import React, { useState } from 'react';
import { COURSE_DATA } from '../data/dbzData';
import { SectionFooter } from './SectionFooter';
import { SectionId } from '../types';

interface CursoSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const CursoSection: React.FC<CursoSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'guia' | 'info' | 'inscripcion'>('guia');
  const [expandedTopic, setExpandedTopic] = useState<string>(COURSE_DATA.topics[0].id);
  const [completedSubtopics, setCompletedSubtopics] = useState<string[]>([]);
  const [inscripcionEnviada, setInscripcionEnviada] = useState(false);
  const [alumnoNombre, setAlumnoNombre] = useState('');
  const [alumnoEmail, setAlumnoEmail] = useState('');

  const toggleSubtopicCompletion = (subtopicTitle: string) => {
    setCompletedSubtopics(prev =>
      prev.includes(subtopicTitle)
        ? prev.filter(t => t !== subtopicTitle)
        : [...prev, subtopicTitle]
    );
  };

  const handleInscripcion = (e: React.FormEvent) => {
    e.preventDefault();
    setInscripcionEnviada(true);
    setTimeout(() => {
      setInscripcionEnviada(false);
      setAlumnoNombre('');
      setAlumnoEmail('');
    }, 4000);
  };

  return (
    <section id="curso-estudio" className="space-y-8 animate-fadeIn">
      {/* =========================================================================
          ENCABEZADO DE SECCIÓN PRINCIPAL (Nivel H2)
          ========================================================================= */}
      <header className="space-y-3 border-b border-[#2a2e43] pb-6">
        <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider">
          <span>🎓</span>
          <span>Programa Académico & Taller de Formación Online</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-amber-500 tracking-tight">
          CURSO Y GUÍA DE ESTUDIO EN LÍNEA: DRAGON BALL Z
        </h2>

        {/* Uso explícito de <p> y <br> */}
        <p className="text-neutral-300 text-sm leading-relaxed max-w-4xl">
          Bienvenido al centro de formación académica y análisis narrativo del universo de Akira Toriyama.<br />
          Organizado con una rigurosa jerarquía temática de <strong>Temas Principales (&lt;h3&gt;)</strong>, <strong>Subtemas (&lt;h4&gt;)</strong> y <strong>Detalles de Estudio (&lt;h5&gt;)</strong> para facilitar el aprendizaje continuo.
        </p>

        {/* Ficha Rápida del Curso */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="bg-[#1c1f2e] border border-[#2a2e43] p-3 rounded-md">
            <span className="text-[10px] text-neutral-400 font-mono block">CÓDIGO CURSO:</span>
            <span className="text-xs font-bold text-amber-400">{COURSE_DATA.code}</span>
          </div>
          <div className="bg-[#1c1f2e] border border-[#2a2e43] p-3 rounded-md">
            <span className="text-[10px] text-neutral-400 font-mono block">DURACIÓN:</span>
            <span className="text-xs font-bold text-white">{COURSE_DATA.duration}</span>
          </div>
          <div className="bg-[#1c1f2e] border border-[#2a2e43] p-3 rounded-md">
            <span className="text-[10px] text-neutral-400 font-mono block">MODALIDAD:</span>
            <span className="text-xs font-bold text-white">Online Asincrónica</span>
          </div>
          <div className="bg-[#1c1f2e] border border-[#2a2e43] p-3 rounded-md">
            <span className="text-[10px] text-neutral-400 font-mono block">CERTIFICACIÓN:</span>
            <span className="text-xs font-bold text-emerald-400">Oficial Incluida</span>
          </div>
        </div>

        {/* Selector de Vistas del Curso */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setActiveTab('guia')}
            className={`px-4 py-2 rounded-md text-xs font-bold cursor-pointer transition-all ${
              activeTab === 'guia'
                ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                : 'bg-[#1c1f2e] text-neutral-300 border border-[#2a2e43] hover:border-amber-500/50'
            }`}
          >
            📖 Guía de Estudio Online (Requisito 2)
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`px-4 py-2 rounded-md text-xs font-bold cursor-pointer transition-all ${
              activeTab === 'info'
                ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                : 'bg-[#1c1f2e] text-neutral-300 border border-[#2a2e43] hover:border-amber-500/50'
            }`}
          >
            📋 Objetivos & Metodología
          </button>
          <button
            onClick={() => setActiveTab('inscripcion')}
            className={`px-4 py-2 rounded-md text-xs font-bold cursor-pointer transition-all ${
              activeTab === 'inscripcion'
                ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                : 'bg-[#1c1f2e] text-neutral-300 border border-[#2a2e43] hover:border-amber-500/50'
            }`}
          >
            ✍️ Inscripción al Aula Virtual
          </button>
        </div>
      </header>

      {/* =========================================================================
          VISTA 1: GUÍA DE ESTUDIO EN LÍNEA (JERARQUÍA COMPLETA H3 -> H4 -> H5)
          ========================================================================= */}
      {activeTab === 'guia' && (
        <div className="space-y-8">
          <div className="bg-[#151721] border border-[#222534] p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-amber-400">
                Progreso del Alumno en la Guía de Estudio:
              </p>
              <p className="text-[11px] text-neutral-400">
                Marca los subtemas a medida que completes las lecturas y ejercicios de autoevaluación.
              </p>
            </div>
            <div className="bg-[#1c1f2e] border border-[#2a2e43] px-3 py-1.5 rounded text-xs font-mono font-bold text-amber-500">
              {completedSubtopics.length} / 5 Subtemas Completados
            </div>
          </div>

          {/* Listado de Temas Principales (H3) */}
          <div className="space-y-6">
            {COURSE_DATA.topics.map((topic) => {
              const isExpanded = expandedTopic === topic.id;
              return (
                <article
                  key={topic.id}
                  id={topic.id}
                  className="bg-[#1c1f2e] border border-[#2a2e43] rounded-lg overflow-hidden shadow-sm"
                >
                  {/* =============================================================
                      TEMA PRINCIPAL (NIVEL H3 OBLIGATORIO)
                      ============================================================= */}
                  <header className="p-5 sm:p-6 bg-[#181a24] border-b border-[#222534]">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        {topic.badge} · {topic.duration}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">
                        Nivel: {topic.level}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-amber-500 tracking-tight">
                      {topic.topicTitle}
                    </h3>

                    {/* Uso de <p> y <br> */}
                    <p className="text-neutral-300 text-xs sm:text-sm mt-2 leading-relaxed">
                      {topic.description}
                    </p>

                    <button
                      onClick={() => setExpandedTopic(isExpanded ? '' : topic.id)}
                      className="mt-4 text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{isExpanded ? '▲ Ocultar Subtemas y Guía de Estudio' : '▼ Desplegar Subtemas y Detalles de Estudio'}</span>
                    </button>
                  </header>

                  {/* Contenido expandible con Subtemas (H4) y Detalles (H5) */}
                  {isExpanded && (
                    <div className="p-5 sm:p-6 space-y-6 bg-[#151721] animate-fadeIn">
                      {topic.subtopics.map((subtopic, subIdx) => {
                        const isDone = completedSubtopics.includes(subtopic.subtopicTitle);
                        return (
                          <div
                            key={subIdx}
                            className="bg-[#1c1f2e] border border-[#2a2e43] rounded-lg p-5 space-y-4"
                          >
                            {/* =========================================================
                                SUBTEMA DEL CURSO (NIVEL H4 OBLIGATORIO)
                                ========================================================= */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#222534] pb-3">
                              <div className="space-y-1">
                                <span className="text-[10px] font-mono text-neutral-400">
                                  TIEMPO SUGERIDO: {subtopic.estimatedMinutes}
                                </span>
                                <h4 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                                  <span className="text-amber-500">📌</span>
                                  <span>{subtopic.subtopicTitle}</span>
                                </h4>
                              </div>

                              <button
                                onClick={() => toggleSubtopicCompletion(subtopic.subtopicTitle)}
                                className={`px-3 py-1.5 rounded text-xs font-bold cursor-pointer transition-colors shrink-0 ${
                                  isDone
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-[#12141c] text-neutral-400 border border-[#2a2e43] hover:text-white'
                                }`}
                              >
                                {isDone ? '✓ Subtema Estudiado' : '○ Marcar como Estudiado'}
                              </button>
                            </div>

                            {/* Resumen del Subtema usando <p> y <br> */}
                            <p 
                              className="text-neutral-300 text-xs sm:text-sm leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: subtopic.summary }}
                            />

                            {/* =========================================================
                                DETALLES DE ESTUDIO (NIVEL H5 OBLIGATORIO)
                                ========================================================= */}
                            <div className="space-y-4 pt-2">
                              {subtopic.details.map((detail, detIdx) => (
                                <div
                                  key={detIdx}
                                  className="bg-[#12141c] border-l-2 border-amber-500 p-4 rounded-r-md space-y-3"
                                >
                                  <h5 className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wide">
                                    {detail.studyTitle}
                                  </h5>

                                  <p className="text-neutral-300 text-xs leading-relaxed">
                                    {detail.content}
                                  </p>

                                  {/* Puntos Clave de Estudio */}
                                  <div className="space-y-1.5 pt-1">
                                    <span className="text-[10px] font-mono text-amber-500 font-bold uppercase block">
                                      Puntos Clave a Memorizar:
                                    </span>
                                    <ul className="space-y-1 text-xs text-neutral-400 list-disc list-inside">
                                      {detail.keyPoints.map((kp, kpIdx) => (
                                        <li key={kpIdx}>{kp}</li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Pregunta de Autoevaluación */}
                                  <div className="bg-[#181a24] p-3 rounded border border-[#222534] text-xs text-neutral-300 space-y-1">
                                    <span className="text-[10px] font-bold text-amber-400 uppercase">
                                      ❓ Pregunta de Autoevaluación del Módulo:
                                    </span>
                                    <p className="italic text-neutral-300 font-medium">
                                      "{detail.evaluationQuestion}"
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Bloque Preformateado <pre> con el Esquema del Plan de Estudios (Requisito 5) */}
          <div className="bg-[#151721] border border-[#222534] p-5 rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-amber-500 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <span>📑</span>
                <span>PLANIFICACIÓN SINTÉTICA DEL CURSO ONLINE (&lt;pre&gt;)</span>
              </h3>
              <span className="text-[11px] font-mono text-neutral-400">PLAN ACADÉMICO 2026</span>
            </div>

            <p className="text-xs text-neutral-400">
              Esquema de carga horaria y ponderación de exámenes en formato preformateado:
            </p>

            <pre className="bg-[#0e1017] text-amber-300/90 p-4 rounded-md font-mono text-xs overflow-x-auto border border-[#222534] leading-relaxed">
{`================================================================================
CRONOGRAMA Y EVALUACIÓN DEL CURSO · DRAGON BALL Z (CÓDIGO: DBZ-ACA-401)
================================================================================
[MÓDULO 1]: Cosmología, Mitología y Macrocosmos       | 08 Hs | Peso Nota: 20%
[MÓDULO 2]: Biomecánica del Ki y Fisiología Saiyajin    | 12 Hs | Peso Nota: 25%
[MÓDULO 3]: Estructura Dramática y Arquetipos Villanos | 14 Hs | Peso Nota: 30%
[MÓDULO 4]: Monografía Analítica y Examen Final         | 10 Hs | Peso Nota: 25%
--------------------------------------------------------------------------------
TOTAL CARGA HORARIA: 64 Horas Cátedra | NOTA MÍNIMA DE APROBACIÓN: 7/10
================================================================================`}
            </pre>
          </div>
        </div>
      )}

      {/* =========================================================================
          VISTA 2: OBJETIVOS Y METODOLOGÍA DEL CURSO
          ========================================================================= */}
      {activeTab === 'info' && (
        <div className="space-y-6">
          <div className="bg-[#1c1f2e] border border-[#2a2e43] p-6 rounded-lg space-y-4">
            <h3 className="text-lg font-bold text-amber-500 flex items-center gap-2">
              <span>🎯</span>
              <span>Objetivos Pedagógicos Generales</span>
            </h3>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              El curso tiene como finalidad brindar al estudiante una comprensión analítica integral de los recursos narrativos, visuales y mitológicos que consolidaron el fenómeno cultural de Dragon Ball Z.
            </p>

            <ul className="space-y-2 pt-2">
              {COURSE_DATA.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1c1f2e] border border-[#2a2e43] p-6 rounded-lg space-y-3">
              <h3 className="text-base font-bold text-amber-500 flex items-center gap-2">
                <span>📚</span>
                <span>Requisitos de Admisión</span>
              </h3>
              <ul className="space-y-2 text-xs text-neutral-300">
                {COURSE_DATA.prerequisites.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1c1f2e] border border-[#2a2e43] p-6 rounded-lg space-y-3">
              <h3 className="text-base font-bold text-amber-500 flex items-center gap-2">
                <span>🏆</span>
                <span>Titulación Obtenida</span>
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Al completar la totalidad de los módulos y aprobar el trabajo monográfico final con calificación igual o superior a 7 (siete), el alumno recibirá el <strong>{COURSE_DATA.certificate}</strong> emitido por el Laboratorio de Informática Educativa.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VISTA 3: FORMULARIO DE INSCRIPCIÓN
          ========================================================================= */}
      {activeTab === 'inscripcion' && (
        <div className="bg-[#1c1f2e] border border-[#2a2e43] p-6 sm:p-8 rounded-lg max-w-2xl mx-auto space-y-6">
          <header className="space-y-2 text-center">
            <h3 className="text-xl font-black text-amber-500">
              Formulario de Inscripción al Aula Virtual
            </h3>
            {/* Uso de <p> y <br> */}
            <p className="text-neutral-300 text-xs sm:text-sm">
              Completa tus datos para matricularte de manera 100% gratuita en la edición vigente del curso.<br />
              Recibirás el acceso a las guías interactivas y material bibliográfico en tu correo.
            </p>
          </header>

          <form onSubmit={handleInscripcion} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-neutral-300">Nombre y Apellido:</label>
              <input
                type="text"
                required
                placeholder="Ej: Juan Pérez"
                value={alumnoNombre}
                onChange={(e) => setAlumnoNombre(e.target.value)}
                className="w-full bg-[#12141c] border border-[#2a2e43] focus:border-amber-500 text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-md outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-neutral-300">Correo Electrónico:</label>
              <input
                type="email"
                required
                placeholder="tu@correo.com"
                value={alumnoEmail}
                onChange={(e) => setAlumnoEmail(e.target.value)}
                className="w-full bg-[#12141c] border border-[#2a2e43] focus:border-amber-500 text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-md outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-neutral-300">Turno de Tutoría Virtual:</label>
              <select className="w-full bg-[#12141c] border border-[#2a2e43] focus:border-amber-500 text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-md outline-none cursor-pointer">
                <option>Turno Mañana (09:00 a 11:00 hs)</option>
                <option>Turno Tarde (14:00 a 16:00 hs)</option>
                <option>Modalidad 100% Asincrónica (A tu propio ritmo)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold py-3 rounded-md text-xs sm:text-sm transition-colors cursor-pointer shadow-md"
            >
              Confirmar Inscripción Gratuita 🎓
            </button>

            {inscripcionEnviada && (
              <div className="p-3.5 bg-emerald-950/90 border border-emerald-700 rounded text-emerald-300 text-xs font-bold text-center animate-fadeIn">
                ✓ ¡Inscripción procesada con éxito! Te hemos enviado la confirmación al aula virtual.
              </div>
            )}
          </form>
        </div>
      )}

      {/* Pie de página con etiqueta <hr> obligatoria (Requisito 7) */}
      <SectionFooter sectionName="Curso y Guía de Estudio Online" onNavigate={onNavigate} />
    </section>
  );
};

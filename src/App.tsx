import React, { useState, useEffect } from 'react';
import { SectionId } from './types';
import { PortadaSection } from './components/PortadaSection';
import { RazasSection } from './components/RazasSection';
import { PersonajesSection } from './components/PersonajesSection';
import { TransformacionesSection } from './components/TransformacionesSection';
import { SagasSection } from './components/SagasSection';
import { EpisodiosSection } from './components/EpisodiosSection';
import { PeliculasSection } from './components/PeliculasSection';
import { CursoSection } from './components/CursoSection';
import { BlogSection } from './components/BlogSection';
import { CVSection } from './components/CVSection';
import { FAQSection } from './components/FAQSection';
import { QuienesSomosSection } from './components/QuienesSomosSection';
import { ContactoSection } from './components/ContactoSection';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('portada');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Manejar cambio de sección con scroll automático al tope
  const handleNavigate = (target: SectionId) => {
    setActiveSection(target);
    setMobileMenuOpen(false);
    
    // Scroll al tope del área de contenido
    const mainArea = document.getElementById('main-content-area');
    if (mainArea) {
      mainArea.scrollTop = 0;
    }
  };

  // Escuchar teclado para accesibilidad (Escape cierra menú móvil)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems: { id: SectionId; label: string; icon: string; badge?: string }[] = [
    { id: 'portada', label: 'Portada', icon: '🏠' },
    { id: 'razas', label: 'Razas', icon: '🧬' },
    { id: 'personajes', label: 'Personajes', icon: '⚔️' },
    { id: 'transformaciones', label: 'Transformaciones', icon: '⚡' },
    { id: 'sagas', label: 'Sagas', icon: '🔥' },
    { id: 'episodios', label: 'Episodios', icon: '📺' },
    { id: 'peliculas', label: 'Películas', icon: '🎬' },
    { id: 'curso', label: 'Curso & Guía de Estudio', icon: '🎓', badge: 'Req 2' },
    { id: 'blog', label: 'Blog & Artículos', icon: '📰', badge: 'Req 3' },
    { id: 'cv', label: 'CV Técnico (Informática)', icon: '👨‍💻', badge: 'Req 4' },
    { id: 'faq', label: 'Preguntas Frecuentes', icon: '❓' },
    { id: 'quienes-somos', label: 'Quiénes Somos', icon: '👥' },
    { id: 'contacto', label: 'Contáctanos', icon: '📬' },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#12141c] text-[#e0e0e0] overflow-hidden font-sans">
      
      {/* =========================================================================
          BARRA SUPERIOR DE ENCABEZADO GLOBAL (SITE HEADER)
          ========================================================================= */}
      <header className="h-16 bg-[#181a24] border-b border-[#222534] flex items-center justify-between px-4 sm:px-6 z-40 shrink-0 shadow-md">
        <div className="flex items-center gap-3">
          {/* Botón Hamburguesa para Móviles */}
          <button
            id="menu-toggle"
            aria-label="Abrir menú lateral de navegación"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-amber-500 hover:text-amber-400 p-2 text-xl focus:outline-none cursor-pointer rounded bg-[#1c1f2e] border border-[#2a2e43]"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          {/* Logo y Título Principal del Encabezado */}
          <div 
            onClick={() => handleNavigate('portada')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform border border-amber-400/40">
              ⭐
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-xl font-black text-amber-500 tracking-wider group-hover:text-amber-400 transition-colors leading-tight uppercase">
                  DRAGON BALL Z ENCICLOPEDIA
                </h1>
                <span className="hidden lg:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/40">
                  W3C HTML5
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-medium hidden sm:block">
                Portal Educativo &bull; Escuela Secundaria Técnica en Informática &bull; Salta, Argentina
              </p>
            </div>
          </div>
        </div>

        {/* Accesos directos y destacados en la barra superior de encabezado */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => handleNavigate('curso')}
            className={`text-xs px-3 py-1.5 rounded-md font-semibold transition-all cursor-pointer hidden md:flex items-center gap-1.5 ${
              activeSection === 'curso'
                ? 'bg-amber-500 text-neutral-950 font-bold'
                : 'bg-[#1c1f2e] text-neutral-300 border border-[#2a2e43] hover:border-amber-500/50'
            }`}
          >
            <span>🎓</span>
            <span>Curso Online</span>
          </button>

          <button
            onClick={() => handleNavigate('blog')}
            className={`text-xs px-3 py-1.5 rounded-md font-semibold transition-all cursor-pointer hidden sm:flex items-center gap-1.5 ${
              activeSection === 'blog'
                ? 'bg-amber-500 text-neutral-950 font-bold'
                : 'bg-[#1c1f2e] text-neutral-300 border border-[#2a2e43] hover:border-amber-500/50'
            }`}
          >
            <span>📰</span>
            <span>Blog</span>
          </button>

          <button
            onClick={() => handleNavigate('cv')}
            className={`text-xs px-3 py-1.5 rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSection === 'cv'
                ? 'bg-amber-500 text-neutral-950 font-bold shadow-sm'
                : 'bg-amber-500/10 text-amber-400 border border-amber-500/40 hover:bg-amber-500/20'
            }`}
          >
            <span>👨‍💻</span>
            <span>CV Técnico</span>
          </button>
        </div>
      </header>

      {/* =========================================================================
          DISTRIBUCIÓN PRINCIPAL (MAIN LAYOUT: SIDEBAR + MAIN CONTENT AREA)
          ========================================================================= */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Overlay para móviles cuando el sidebar está abierto */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-xs"
          />
        )}

        {/* =====================================================================
            MENÚ LATERAL (SIDEBAR DE NAVEGACIÓN)
            ===================================================================== */}
        <nav
          id="sidebar"
          aria-label="Menú principal de secciones"
          className={`
            fixed md:static top-16 bottom-0 left-0 z-40
            w-64 bg-[#151721] border-r border-[#222534]
            flex flex-col justify-between overflow-y-auto
            transition-transform duration-300 ease-in-out shrink-0
            ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          <div className="py-3 px-2 space-y-1">
            <div className="px-3 py-2 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
              Navegación de Secciones
            </div>

            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      id={`nav-link-${item.id}`}
                      onClick={() => handleNavigate(item.id)}
                      className={`
                        w-full text-left px-3.5 py-2.5 rounded-md text-xs sm:text-sm font-medium
                        flex items-center justify-between transition-all cursor-pointer
                        ${
                          isActive
                            ? 'bg-[#1c1f2e] text-amber-400 font-bold border-l-4 border-amber-500 shadow-sm'
                            : 'text-neutral-300 hover:bg-[#1c1f2e]/70 hover:text-white border-l-4 border-transparent'
                        }
                      `}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>

                      {item.badge && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Pie del Sidebar */}
          <div className="p-4 border-t border-[#222534] bg-[#12141c]/50 text-xs text-neutral-400 space-y-1">
            <p className="font-bold text-amber-500/90 text-[11px]">DBZ ENCICLOPEDIA</p>
            <p className="text-[10px]">Proyecto Escuela Técnica en Informática</p>
            <p className="text-[10px]">© Toei Animation · Akira Toriyama</p>
          </div>
        </nav>

        {/* =====================================================================
            ÁREA DE CONTENIDO PRINCIPAL (MAIN CONTENT AREA)
            ===================================================================== */}
        <main
          id="main-content-area"
          className="flex-1 overflow-y-auto bg-[#181a24] p-4 sm:p-6 md:p-8"
        >
          <div className="max-w-6xl mx-auto pb-10">
            {activeSection === 'portada' && <PortadaSection onNavigate={handleNavigate} />}
            {activeSection === 'razas' && <RazasSection onNavigate={handleNavigate} />}
            {activeSection === 'personajes' && <PersonajesSection onNavigate={handleNavigate} />}
            {activeSection === 'transformaciones' && <TransformacionesSection onNavigate={handleNavigate} />}
            {activeSection === 'sagas' && <SagasSection onNavigate={handleNavigate} />}
            {activeSection === 'episodios' && <EpisodiosSection onNavigate={handleNavigate} />}
            {activeSection === 'peliculas' && <PeliculasSection onNavigate={handleNavigate} />}
            {activeSection === 'curso' && <CursoSection onNavigate={handleNavigate} />}
            {activeSection === 'blog' && <BlogSection onNavigate={handleNavigate} />}
            {activeSection === 'cv' && <CVSection onNavigate={handleNavigate} />}
            {activeSection === 'faq' && <FAQSection onNavigate={handleNavigate} />}
            {activeSection === 'quienes-somos' && <QuienesSomosSection onNavigate={handleNavigate} />}
            {activeSection === 'contacto' && <ContactoSection onNavigate={handleNavigate} />}
          </div>
        </main>
      </div>

    </div>
  );
}

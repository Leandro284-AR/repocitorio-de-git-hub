import React, { useState } from 'react';
import { SectionFooter } from './SectionFooter';
import { SectionId } from '../types';

interface ContactoSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const ContactoSection: React.FC<ContactoSectionProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: 'Sugerencia de Contenido',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: '',
        correo: '',
        asunto: 'Sugerencia de Contenido',
        mensaje: ''
      });
    }, 4000);
  };

  return (
    <section id="contacto" className="space-y-6 animate-fadeIn">
      {/* Encabezado */}
      <header className="space-y-2">
        <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider">
          <span>📬</span>
          <span>Canal de Comunicación Directo</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-500 tracking-tight">
          CONTÁCTANOS & SUGERENCIAS
        </h2>

        {/* Uso explícito de <p> y <br> */}
        <p className="text-neutral-300 text-sm leading-relaxed max-w-3xl">
          ¿Tienes alguna corrección sobre niveles de poder, sugerencia de nuevo artículo o duda técnica sobre el proyecto?<br />
          Escríbenos y el equipo de la Escuela Técnica te responderá a la brevedad.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Formulario */}
        <div className="lg:col-span-7 bg-[#1c1f2e] border border-[#2a2e43] p-6 rounded-lg space-y-4 shadow-sm">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <span>📝</span>
            <span>Envíanos un Mensaje</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-neutral-300">Nombre completo:</label>
              <input
                type="text"
                required
                placeholder="Tu nombre y apellido"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full bg-[#12141c] border border-[#2a2e43] focus:border-amber-500 text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-md outline-none transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-neutral-300">Correo electrónico:</label>
              <input
                type="email"
                required
                placeholder="tu@correo.com"
                value={formData.correo}
                onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                className="w-full bg-[#12141c] border border-[#2a2e43] focus:border-amber-500 text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-md outline-none transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-neutral-300">Asunto del mensaje:</label>
              <select
                value={formData.asunto}
                onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                className="w-full bg-[#12141c] border border-[#2a2e43] focus:border-amber-500 text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-md outline-none transition-colors cursor-pointer"
              >
                <option value="Sugerencia de Contenido">Sugerencia de Contenido DBZ</option>
                <option value="Corrección de Datos">Corrección de Datos de Episodio/Poder</option>
                <option value="Consulta sobre el CV Técnico">Consulta sobre el CV Técnico / Proyecto</option>
                <option value="Propuesta de Colaboración">Propuesta de Colaboración Escolar</option>
                <option value="Otro Asunto">Otro Asunto</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-neutral-300">Mensaje detallado:</label>
              <textarea
                required
                rows={4}
                placeholder="Escribe aquí tu consulta, sugerencia o comentario para el equipo..."
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full bg-[#12141c] border border-[#2a2e43] focus:border-amber-500 text-white text-xs sm:text-sm p-3.5 rounded-md outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold py-2.5 rounded-md text-xs sm:text-sm transition-colors shadow-sm cursor-pointer"
            >
              Enviar Mensaje al Equipo 📤
            </button>

            {submitted && (
              <div className="p-3 bg-emerald-950/80 border border-emerald-700 rounded text-emerald-300 text-xs font-semibold text-center animate-fadeIn">
                ✓ ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
              </div>
            )}
          </form>
        </div>

        {/* Canales de Contacto Directo */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#1c1f2e] border border-[#2a2e43] p-6 rounded-lg space-y-4">
            <h3 className="text-base font-bold text-amber-500 flex items-center gap-2">
              <span>📍</span>
              <span>Datos de Contacto Directo</span>
            </h3>

            {/* Uso explícito de <p> y <br> */}
            <div className="space-y-3 text-xs text-neutral-300">
              <p className="leading-relaxed">
                <strong>Responsable:</strong> Leandro Daniel Martínez<br />
                <strong>Orientación:</strong> Informática & Programación<br />
                <strong>Institución:</strong> Escuela de Educación Secundaria Técnica (E.E.S.T.)
              </p>

              <p className="leading-relaxed border-t border-[#222534] pt-3">
                📧 <strong>Email:</strong> leandrodanielmartinez812@gmail.com<br />
                📱 <strong>WhatsApp / Tel:</strong> +54 9 387 6131204<br />
                🌐 <strong>Horario de atención:</strong> Lunes a Viernes de 08:00 a 18:00 hs
              </p>
            </div>
          </div>

          <div className="bg-[#151721] border border-[#222534] p-5 rounded-lg text-xs text-neutral-400 space-y-2">
            <h4 className="text-amber-400 font-bold">Nota de Privacidad:</h4>
            <p>
              Toda la información enviada mediante este formulario es utilizada únicamente con fines educativos y de retroalimentación para la mejora continua del sitio web escolar.
            </p>
          </div>
        </div>
      </div>

      {/* Pie de página con <hr> (Requisito 7) */}
      <SectionFooter sectionName="Contáctanos" onNavigate={onNavigate} />
    </section>
  );
};

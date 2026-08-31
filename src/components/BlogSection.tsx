import React, { useState } from 'react';
import { BLOG_POSTS_DATA } from '../data/dbzData';
import { BlogPost, BlogComment, SectionId } from '../types';
import { SectionFooter } from './SectionFooter';

interface BlogSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavigate }) => {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS_DATA);
  const [selectedPostId, setSelectedPostId] = useState<string>(BLOG_POSTS_DATA[0].id);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  
  // Estado para nuevo comentario
  const [newAuthor, setNewAuthor] = useState('');
  const [newContent, setNewContent] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  const selectedPost = posts.find(p => p.id === selectedPostId) || posts[0];

  const filteredPosts = categoryFilter === 'all' 
    ? posts 
    : posts.filter(p => p.category === categoryFilter);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newContent.trim()) return;

    const newCommentObj: BlogComment = {
      id: `comment-${Date.now()}`,
      author: newAuthor.trim(),
      avatar: '💬',
      date: 'Hoy (Reciente)',
      content: newContent.trim(),
      likes: 0
    };

    setPosts(prevPosts => 
      prevPosts.map(p => {
        if (p.id === selectedPost.id) {
          return {
            ...p,
            comments: [newCommentObj, ...p.comments]
          };
        }
        return p;
      })
    );

    setNewAuthor('');
    setNewContent('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 4000);
  };

  const handleLikeComment = (commentId: string) => {
    setPosts(prevPosts => 
      prevPosts.map(p => {
        if (p.id === selectedPost.id) {
          return {
            ...p,
            comments: p.comments.map(c => c.id === commentId ? { ...c, likes: c.likes + 1 } : c)
          };
        }
        return p;
      })
    );
  };

  return (
    <section id="blog" className="space-y-8 animate-fadeIn">
      {/* =========================================================================
          NIVEL DE ENCABEZADO 1 Y 2: Estructura de la Página Principal del Blog
          ========================================================================= */}
      <header className="space-y-2 border-b border-[#2a2e43] pb-5">
        <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider">
          <span>📰</span>
          <span>Sección Blog & Artículos Especializados</span>
        </div>

        {/* Encabezado H2 Principal del Blog */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-500 tracking-tight">
          BLOG DE ANÁLISIS, HISTORIA Y TEORÍAS DE DRAGON BALL Z
        </h2>
        
        {/* Uso explícito de etiquetas <p> y <br> para estructura requerida */}
        <p className="text-neutral-300 text-sm leading-relaxed max-w-3xl">
          Espacio editorial con ensayos detallados, análisis de animación, desglose de líneas temporales y debates de la comunidad.<br />
          Estructurado rigurosamente con múltiples niveles de encabezados semánticos (H1, H2, H3, H4, H5) para optimizar la jerarquía de lectura y la accesibilidad.
        </p>

        {/* Filtro de Categorías del Blog */}
        <div className="flex flex-wrap items-center gap-2 pt-3">
          <span className="text-xs text-neutral-400 font-semibold">Filtrar por categoría:</span>
          {['all', 'Análisis & Tributo', 'Biología & Ki', 'Ciencia Ficción & Teorías'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1 rounded text-xs font-semibold cursor-pointer transition-colors ${
                categoryFilter === cat 
                  ? 'bg-amber-500 text-neutral-950 font-bold' 
                  : 'bg-[#1c1f2e] text-neutral-300 border border-[#2a2e43] hover:border-amber-500/50'
              }`}
            >
              {cat === 'all' ? 'Todas' : cat}
            </button>
          ))}
        </div>
      </header>

      {/* Grid del Blog: Selector de Artículos y Visor del Artículo Activo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Columna Izquierda: Índice de Entradas del Blog (H3 para entradas) */}
        <aside className="lg:col-span-4 space-y-4">
          <div className="bg-[#151721] border border-[#222534] p-4 rounded-lg">
            <h3 className="text-amber-500 text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>📚</span>
              <span>ENTRADAS DEL BLOG ({filteredPosts.length})</span>
            </h3>

            <div className="space-y-3">
              {filteredPosts.map((post) => {
                const isSelected = post.id === selectedPost.id;
                return (
                  <article
                    key={post.id}
                    id={`blog-entry-card-${post.id}`}
                    onClick={() => setSelectedPostId(post.id)}
                    className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
                      isSelected 
                        ? 'bg-[#1c1f2e] border-amber-500 shadow-md shadow-amber-500/10' 
                        : 'bg-[#12141c] border-[#222534] hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1.5">
                      <span className="bg-[#151721] text-amber-400 px-2 py-0.5 rounded border border-[#2a2e43]">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Nivel H3 para Títulos de Entradas en la Lista */}
                    <h3 className={`text-sm font-bold leading-snug transition-colors ${
                      isSelected ? 'text-amber-400' : 'text-neutral-200 hover:text-white'
                    }`}>
                      {post.title}
                    </h3>

                    <p className="text-neutral-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {post.summary}
                    </p>

                    <div className="mt-2.5 pt-2 border-t border-[#222534] flex items-center justify-between text-[11px] text-neutral-500">
                      <span>{post.date}</span>
                      <span>💬 {post.comments.length} comentarios</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Columna Derecha: Contenido Completo del Artículo Seleccionado */}
        <div className="lg:col-span-8 space-y-6">
          <article 
            id={`articulo-activo-${selectedPost.id}`}
            className="bg-[#1c1f2e] border border-[#2a2e43] rounded-lg p-6 sm:p-8 space-y-6 shadow-md"
          >
            {/* Cabecera del Artículo */}
            <header className="space-y-3 border-b border-[#2a2e43] pb-5">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="bg-amber-500 text-neutral-950 font-bold px-2.5 py-0.5 rounded">
                  {selectedPost.category}
                </span>
                <span className="text-neutral-400">· Publicado el {selectedPost.date}</span>
                <span className="text-neutral-400">· {selectedPost.readTime}</span>
              </div>

              {/* Nivel H3/H2: Título Principal de la Entrada del Blog */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {selectedPost.title}
              </h3>

              {/* Subtítulo de la Entrada */}
              <p className="text-amber-400/90 text-sm sm:text-base font-medium italic">
                {selectedPost.subtitle}
              </p>

              {/* Ficha de Autor */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold text-sm">
                  LM
                </div>
                <div>
                  <h4 className="text-neutral-200 font-bold text-xs">
                    Por: {selectedPost.author}
                  </h4>
                  <p className="text-neutral-400 text-[11px]">
                    {selectedPost.authorRole}
                  </p>
                </div>
              </div>
            </header>

            {/* Resumen destacado */}
            <div className="bg-[#151721] border-l-4 border-l-amber-500 p-4 rounded-r-lg">
              <p className="text-neutral-200 text-xs sm:text-sm italic leading-relaxed">
                <strong>Resumen del Artículo:</strong> {selectedPost.summary}
              </p>
            </div>

            {/* Secciones de Contenido del Artículo con H4 y H5 */}
            <div className="space-y-6">
              {selectedPost.contentSections.map((sec, idx) => (
                <section key={idx} className="space-y-3">
                  {/* Encabezado H4 para Subsecciones del Artículo */}
                  <h4 className="text-lg font-bold text-amber-500 tracking-wide border-b border-[#2a2e43]/60 pb-1.5">
                    {sec.heading}
                  </h4>

                  {/* Encabezado H5 para Subtítulo de Sección */}
                  {sec.subheading && (
                    <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      {sec.subheading}
                    </h5>
                  )}

                  {/* Párrafos del artículo con etiquetas <p> y <br> */}
                  <div className="space-y-2.5">
                    {sec.paragraphs.map((pText, pIdx) => (
                      <p key={pIdx} className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                        {pText}
                      </p>
                    ))}
                  </div>

                  {/* Callout si existe */}
                  {sec.callout && (
                    <blockquote className="bg-[#12141c] border-l-2 border-amber-400 px-4 py-3 rounded-r text-xs text-amber-300 italic">
                      {sec.callout}
                    </blockquote>
                  )}

                  {/* Bloque preformateado <pre> (Requisito 5 en el Blog) */}
                  {sec.codeOrPreSnippet && (
                    <div className="space-y-1 pt-1">
                      <span className="text-[11px] font-mono text-neutral-400">
                        [TABLA DE DATOS PREFORMATEADA - &lt;pre&gt;]:
                      </span>
                      <pre className="bg-[#0e1017] text-emerald-400 p-3.5 rounded-md font-mono text-xs overflow-x-auto border border-[#222534] leading-relaxed">
                        {sec.codeOrPreSnippet}
                      </pre>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Tags del post */}
            <div className="pt-4 border-t border-[#2a2e43] flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-neutral-400 font-semibold mr-1">Etiquetas:</span>
              {selectedPost.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="bg-[#12141c] text-neutral-300 border border-[#2a2e43] px-2.5 py-1 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* =========================================================================
                SECCIÓN DE COMENTARIOS: Estructurada con Encabezados H4 y H5 (Requisito 3)
                ========================================================================= */}
            <section id="seccion-comentarios" className="pt-6 border-t border-[#2a2e43] space-y-6">
              <div className="flex items-center justify-between">
                {/* Encabezado H4 para la Sección de Comentarios */}
                <h4 className="text-lg font-bold text-amber-500 flex items-center gap-2">
                  <span>💬</span>
                  <span>SECCIÓN DE COMENTARIOS DE LA COMUNIDAD ({selectedPost.comments.length})</span>
                </h4>
                <span className="text-xs text-neutral-400">Participación activa</span>
              </div>

              {/* Formulario para agregar nuevo comentario */}
              <form onSubmit={handleAddComment} className="bg-[#151721] border border-[#222534] p-4 rounded-lg space-y-3">
                <h5 className="text-xs font-bold text-neutral-200 uppercase tracking-wider">
                  Deja tu opinión sobre este artículo:
                </h5>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-300">Tu Nombre o Alias:</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Trunks del Futuro / Juan Pérez"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full bg-[#12141c] border border-[#2a2e43] focus:border-amber-500 text-white text-xs px-3 py-2 rounded outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-300">Comentario o análisis:</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Escribe tu reflexión sobre este tema de Dragon Ball Z..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full bg-[#12141c] border border-[#2a2e43] focus:border-amber-500 text-white text-xs p-3 rounded outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-4 py-2 rounded text-xs transition-colors cursor-pointer"
                >
                  Publicar Comentario 🚀
                </button>

                {commentSuccess && (
                  <p className="text-emerald-400 text-xs font-semibold animate-fadeIn">
                    ✓ ¡Comentario publicado exitosamente en la entrada!
                  </p>
                )}
              </form>

              {/* Lista de comentarios existentes con H5 para los autores */}
              <div className="space-y-3">
                {selectedPost.comments.map((comment) => (
                  <div 
                    key={comment.id}
                    className="bg-[#151721] border border-[#222534] p-4 rounded-lg space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{comment.avatar}</span>
                        {/* Encabezado H5 para el nombre del comentarista */}
                        <h5 className="text-xs font-bold text-amber-400">
                          {comment.author}
                        </h5>
                      </div>
                      <span className="text-[11px] text-neutral-500">{comment.date}</span>
                    </div>

                    <p className="text-neutral-300 text-xs leading-relaxed pl-6">
                      {comment.content}
                    </p>

                    <div className="flex items-center gap-3 pl-6 pt-1 text-[11px]">
                      <button
                        type="button"
                        onClick={() => handleLikeComment(comment.id)}
                        className="text-neutral-400 hover:text-amber-400 flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        👍 Me gusta ({comment.likes})
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>

      {/* Pie de página de la sección con <hr> (Requisito 7) */}
      <SectionFooter sectionName="Blog de Artículos" onNavigate={onNavigate} />
    </section>
  );
};

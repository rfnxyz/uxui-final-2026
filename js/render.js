/* =========================================================
   Renderiza el contenido de js/contenido.js en la página
   y gestiona el diálogo de casos de estudio.
   ========================================================= */
(function () {
  'use strict';

  var D = window.CONTENIDO;
  if (!D) { return; }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function li(texto) {
    return '<li>' + esc(texto) + '</li>';
  }

  function $(id) {
    return document.getElementById(id);
  }

  function renderPrincipios() {
    var c = $('principios-lista');
    if (!c) { return; }
    c.innerHTML = D.principios.map(function (p) {
      return '<article class="card"><h3>' + esc(p.titulo) + '</h3><p>' + esc(p.descripcion) + '</p></article>';
    }).join('');
  }

  function renderServicios() {
    var c = $('servicios-lista');
    if (!c) { return; }
    c.innerHTML = D.servicios.map(function (s) {
      return '<article class="card"><h3>' + esc(s.titulo) + '</h3>' +
        '<p>' + esc(s.descripcion) + '</p>' +
        '<ul class="tags tags--compact">' + s.herramientas.map(li).join('') + '</ul></article>';
    }).join('');
  }

  function renderExperiencia() {
    var c = $('experiencia-lista');
    if (!c) { return; }
    c.innerHTML = D.experiencia.map(function (e) {
      return '<li class="job"><div class="job__head"><h3>' + esc(e.rol) + '</h3>' +
        '<p class="job__period"><time>' + esc(e.periodo) + '</time></p></div>' +
        '<p class="job__org">' + esc(e.organizacion) + '</p>' +
        '<ul>' + e.logros.map(li).join('') + '</ul></li>';
    }).join('');
  }

  function renderTestimonios() {
    var c = $('testimonios-lista');
    if (!c) { return; }
    c.innerHTML = D.testimonios.map(function (t) {
      return '<figure class="testimonial"><blockquote><p>“' + esc(t.texto) + '”</p></blockquote>' +
        '<figcaption><span class="avatar" aria-hidden="true">' + esc(t.iniciales) + '</span>' +
        '<span><cite>' + esc(t.nombre) + '</cite><small>' + esc(t.cargo) + '</small></span></figcaption></figure>';
    }).join('');
  }

  function renderCasos() {
    var c = $('casos-lista');
    if (!c) { return; }
    c.innerHTML = D.proyectos.map(function (p) {
      var clase = p.metricas.length === 1 ? ' metrics--single' : '';
      var metricas = p.metricas.map(function (m) {
        return '<div class="metric"><dt>' + esc(m.etiqueta) + '</dt><dd>' + esc(m.valor) + '</dd></div>';
      }).join('');
      return '<article class="case">' +
        '<div class="case__media"><img src="' + esc(p.imagen.src) + '" loading="lazy" width="' + p.imagen.width +
        '" height="' + p.imagen.height + '" alt="' + esc(p.imagen.alt) + '"></div>' +
        '<p class="case__meta"><span>' + esc(p.categoria) + '</span><span>' + p.año + '</span></p>' +
        '<h3>' + esc(p.titulo) + '</h3>' +
        '<p>' + esc(p.resumen) + '</p>' +
        '<dl class="metrics' + clase + '">' + metricas + '</dl>' +
        '<ul class="tags case__tags" aria-label="Herramientas del proyecto">' + p.herramientas.map(li).join('') + '</ul>' +
        '<div class="case__footer"><span class="case__more">Detalle completo</span>' +
        '<button class="btn btn--small" type="button" data-case="' + esc(p.id) + '">Ver caso ' +
        '<span aria-hidden="true">→</span><span class="sr-only"> de ' + esc(p.nombreCorto) + '</span></button>' +
        '</div></article>';
    }).join('');
  }

  function construirCaso(p) {
    var c = p.caso;
    return '<p class="section-label">' + esc(p.categoria) + ' · ' + p.año + '</p>' +
      '<h2 id="caso-titulo">' + esc(p.titulo) + '</h2>' +
      '<h3>Problema</h3><p>' + esc(c.problema) + '</p>' +
      '<h3>Proceso</h3><ul>' + c.proceso.map(li).join('') + '</ul>' +
      '<h3>Solución</h3><p>' + esc(c.solucion) + '</p>' +
      '<h3>Resultado</h3><p>' + esc(c.resultado) + '</p>' +
      '<h3>Aprendizaje</h3><p>' + esc(c.aprendizaje) + '</p>' +
      '<ul class="tags" aria-label="Herramientas del proyecto">' + p.herramientas.map(li).join('') + '</ul>' +
      '<p><a class="btn btn--small" href="' + esc(p.enlace.url) + '" target="_blank" rel="noopener noreferrer">' +
      esc(p.enlace.texto) + ' <span aria-hidden="true">↗</span>' +
      '<span class="sr-only"> (se abre en una pestaña nueva)</span></a></p>';
  }

  function iniciarDialogo() {
    var dialog = $('caso-dialog');
    var lista = $('casos-lista');
    if (!dialog || !lista || typeof dialog.showModal !== 'function') { return; }

    var body = dialog.querySelector('.case-dialog__body');
    var closeBtn = dialog.querySelector('.case-dialog__close');
    var trigger = null;

    lista.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-case]');
      if (!btn) { return; }
      var id = btn.getAttribute('data-case');
      var proyecto = D.proyectos.filter(function (p) { return p.id === id; })[0];
      if (!proyecto) { return; }
      body.innerHTML = construirCaso(proyecto);
      trigger = btn;
      dialog.showModal();
    });

    closeBtn.addEventListener('click', function () { dialog.close(); });

    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) { dialog.close(); }
    });

    dialog.addEventListener('close', function () {
      if (trigger) { trigger.focus(); }
    });
  }

  renderPrincipios();
  renderServicios();
  renderExperiencia();
  renderTestimonios();
  renderCasos();
  iniciarDialogo();
})();
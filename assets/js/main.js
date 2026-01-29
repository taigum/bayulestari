// Lazy-load hero background images via data-bg to avoid render-blocking
document.querySelectorAll('[data-bg]').forEach(el => {
  const src = el.getAttribute('data-bg');
  const img = new Image();
  img.src = src;
  img.onload = () => { el.style.backgroundImage = `url('${src}')`; };
});

// Lightbox (shared)
(() => {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  let items = [], idx = 0;

  function open(i) { idx = i; update(); lb.classList.remove('hidden'); lb.focus(); }
  function close() { lb.classList.add('hidden'); }
  function update() { img.src = items[idx].src; img.alt = items[idx].alt; cap.textContent = items[idx].caption || ""; }

  document.addEventListener('keydown', e => {
    if (lb.classList.contains('hidden')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') { idx = (idx + 1) % items.length; update(); }
    if (e.key === 'ArrowLeft') { idx = (idx - 1 + items.length) % items.length; update(); }
  });

  // Expose minimal API
  window.Lightbox = {
    init(list) { items = list; },
    open
  };
})();
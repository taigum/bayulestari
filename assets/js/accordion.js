// Accessible FAQ accordion
document.querySelectorAll('.faq button').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    const panel = btn.nextElementSibling;
    panel.hidden = expanded;
  });
});
// Accessible accordion for images
document.querySelectorAll('.accordion button').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    // Collapse all others
    document.querySelectorAll('.accordion button').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.hidden = true;
    });
    // Expand clicked one if it was not already expanded
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.hidden = false;
    }
  });
});
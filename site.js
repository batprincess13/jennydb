(() => {
  const scenarios = [...document.querySelectorAll('.scenario-stage')];
  const tabs = [...document.querySelectorAll('.scenario-tabs button')];
  let scenarioIndex = 0;
  function showScenario(index, focus = false) {
    if (!scenarios.length) return;
    scenarioIndex = (index + scenarios.length) % scenarios.length;
    scenarios.forEach((panel, i) => {
      const active = i === scenarioIndex;
      panel.hidden = !active;
      panel.setAttribute('aria-live', active ? 'polite' : 'off');
      panel.tabIndex = active ? 0 : -1;
    });
    tabs.forEach((tab, i) => {
      const active = i === scenarioIndex;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    if (focus) scenarios[scenarioIndex].focus({preventScroll:true});
  }
  tabs.forEach((tab, i) => tab.addEventListener('click', () => showScenario(i)));
  scenarios.forEach((panel, i) => {
    const buttons = panel.querySelectorAll('.scenario-controls button');
    buttons[0]?.addEventListener('click', () => showScenario(i - 1, true));
    buttons[1]?.addEventListener('click', () => showScenario(i + 1, true));
  });

  const cards = [...document.querySelectorAll('.testimonial-card')];
  const dots = [...document.querySelectorAll('.testimonial-dots button')];
  const arrows = [...document.querySelectorAll('.testimonial-arrows button')];
  let testimonialIndex = 0;
  function showTestimonial(index, focus = false) {
    if (!cards.length) return;
    testimonialIndex = (index + cards.length) % cards.length;
    cards.forEach((card, i) => {
      const active = i === testimonialIndex;
      card.hidden = !active;
      card.setAttribute('aria-live', active ? 'polite' : 'off');
      card.tabIndex = active ? 0 : -1;
    });
    dots.forEach((dot, i) => {
      const active = i === testimonialIndex;
      dot.classList.toggle('active', active);
      if (active) dot.setAttribute('aria-current','true'); else dot.removeAttribute('aria-current');
    });
    if (focus) cards[testimonialIndex].focus({preventScroll:true});
  }
  dots.forEach((dot, i) => dot.addEventListener('click', () => showTestimonial(i)));
  arrows[0]?.addEventListener('click', () => showTestimonial(testimonialIndex - 1, true));
  arrows[1]?.addEventListener('click', () => showTestimonial(testimonialIndex + 1, true));
})();

// Builds page — class filter. Language-agnostic (reads data-* from the DOM).

const chips = document.querySelectorAll<HTMLElement>('.bfilter button');
const cards = document.querySelectorAll<HTMLElement>('.buildcard');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter || 'all';
    chips.forEach((c) => c.classList.toggle('is-active', c === chip));
    cards.forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.class !== filter;
    });
  });
});

import '@fontsource-variable/inter';
import '@fontsource-variable/fraunces';
import '@fontsource-variable/fraunces/wght-italic.css';
import './styles.css';

// Header border/shadow once the page scrolls.
const header = document.querySelector<HTMLElement>('.site-header');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu.
const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const setMenu = (open: boolean) => {
  toggle?.setAttribute('aria-expanded', String(open));
  mobileNav?.classList.toggle('hidden', !open);
};
toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
mobileNav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
window.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

// Keep the current section when switching language.
document.querySelectorAll<HTMLAnchorElement>('a.lang-link').forEach((a) =>
  a.addEventListener('click', () => {
    if (location.hash) a.href = a.pathname + location.hash;
  }),
);

// Gentle reveal-on-scroll (CSS only animates when the user allows motion).
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('is-visible'));
}

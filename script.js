const root = document.documentElement;
const cursorGlow = document.querySelector(".cursor-glow");
const revealEls = document.querySelectorAll(".reveal");
const depthEls = document.querySelectorAll("[data-depth]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
);

revealEls.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
  revealObserver.observe(el);
});

function updateScroll() {
  const scrollable = document.body.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  root.style.setProperty("--scroll", progress.toFixed(4));

  depthEls.forEach((el) => {
    const depth = Number(el.dataset.depth || 0);
    const rect = el.getBoundingClientRect();
    const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
    el.style.transform = `translate3d(0, ${centerOffset * depth * -0.08}px, 0)`;
  });
}

function updatePointer(event) {
  if (!cursorGlow) return;
  root.style.setProperty("--mx", `${event.clientX}px`);
  root.style.setProperty("--my", `${event.clientY}px`);
}

window.addEventListener("scroll", updateScroll, { passive: true });
window.addEventListener("resize", updateScroll);
window.addEventListener("pointermove", updatePointer, { passive: true });
updateScroll();

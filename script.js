const root = document.documentElement;
const cursorGlow = document.querySelector(".cursor-glow");
const revealEls = document.querySelectorAll(".reveal");
const depthEls = document.querySelectorAll("[data-depth]");
const githubFeed = document.querySelector("[data-github-feed]");

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

function formatRepoDate(value) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

async function loadLatestRepos() {
  if (!githubFeed) return;

  try {
    const response = await fetch("https://api.github.com/users/0xNexuz/repos?sort=updated&per_page=6", {
      headers: { Accept: "application/vnd.github+json" },
    });

    if (!response.ok) return;

    const repos = await response.json();
    const visibleRepos = repos
      .filter((repo) => !repo.fork)
      .slice(0, 5);

    if (!visibleRepos.length) return;

    githubFeed.innerHTML = visibleRepos
      .map((repo) => {
        const language = repo.language || "Public repo";
        const updated = repo.pushed_at || repo.updated_at;
        return `
          <a class="latest-item" href="${repo.html_url}" target="_blank" rel="noreferrer">
            <span>${repo.name}</span>
            <small>${language} / updated ${formatRepoDate(updated)}</small>
          </a>
        `;
      })
      .join("");
  } catch {
    // Keep the static fallback items visible if GitHub is unavailable.
  }
}

loadLatestRepos();

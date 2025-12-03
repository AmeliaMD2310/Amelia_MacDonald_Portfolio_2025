/* -------------------------------------------------
   Hover Light Follows Cursor
--------------------------------------------------- */
const cursorLight = document.querySelector('.cursor-light');
document.addEventListener('mousemove', (e) => {
  cursorLight.style.left = `${e.clientX}px`;
  cursorLight.style.top = `${e.clientY}px`;
});


/* -------------------------------------------------
   Fade-in Sections + Highlight Active Nav Link
--------------------------------------------------- */
const sections = document.querySelectorAll('.section-observe');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');

      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${id}`
          );
        });
      }
    });
  },
  { threshold: 0.35 }
);

sections.forEach((section) => sectionObserver.observe(section));


/* -------------------------------------------------
   Timeline Accordion
--------------------------------------------------- */
const timelineCards = document.querySelectorAll('.timeline-card');

timelineCards.forEach((card) => {
  const toggle = card.querySelector('.timeline-toggle');
  toggle.addEventListener('click', () => {
    card.classList.toggle('open');
  });
});

// Theme toggle
const themeBtn = document.querySelector(".theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  // Optional: save user preference
  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

/* -------------------------------------------------
   CAROUSEL LOGIC (Projects + Certificates)
--------------------------------------------------- */
document.querySelectorAll(".carousel-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    const trackId = btn.dataset.track;
    const track = document.getElementById(trackId);
    if (!track) return;

    const cardWidth = track.children[0].getBoundingClientRect().width + 18;
    const direction = btn.classList.contains("right") ? 1 : -1;

    track.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth"
    });

  });
});

document.querySelectorAll(".carousel-track").forEach(track => {
  const itemCount = track.children.length;

  if (itemCount < 4) {
    track.classList.add("center-if-few");
  }
});

/* ----------------Clickable cards--------------------- */
document.querySelectorAll(".project-card, .cert-card").forEach(card => {
  card.addEventListener("click", () => {
    const url = card.dataset.url;
    if (url) {
      window.open(url, "_blank");
    }
  });
});



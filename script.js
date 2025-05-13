// Reveal sections on scroll
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// Initial setup
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
});

revealOnScroll();

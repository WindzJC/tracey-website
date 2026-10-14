(() => {
  const toggle = document.getElementById("menu-toggle");
  const links = document.getElementById("primary-links");
  if (!toggle || !links) return;

  const closeMenu = () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
  };

  toggle.addEventListener("click", () => {
    const opened = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(opened));
    toggle.setAttribute("aria-label", opened ? "Close menu" : "Open menu");
    document.body.classList.toggle("menu-open", opened);
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!toggle.contains(event.target) && !links.contains(event.target)) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 790) closeMenu();
  });
})();

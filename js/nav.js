(() => {
  const navs = document.querySelectorAll("nav");

  navs.forEach((nav, index) => {
    const list = nav.querySelector("ul");
    const logo = nav.querySelector("img");
    const desktopCta = nav.querySelector(":scope > a.hero-btn");
    if (!list || !logo) return;

    nav.classList.add("site-nav");
    list.classList.add("site-nav-links");

    const logoLink = document.createElement("a");
    logoLink.href = "index.html";
    logoLink.className = "site-nav-logo";
    logoLink.setAttribute("aria-label", "Go to home page");
    logo.replaceWith(logoLink);
    logoLink.appendChild(logo);

    if (desktopCta) {
      desktopCta.href = "contact.html";
      desktopCta.classList.add("site-nav-cta");

      const mobileCtaItem = document.createElement("li");
      mobileCtaItem.className = "site-nav-mobile-cta";
      mobileCtaItem.innerHTML =
        '<a href="contact.html">Get started</a>';
      list.appendChild(mobileCtaItem);
    }

    const menuId = `site-menu-${index}`;
    list.id = menuId;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "site-nav-toggle";
    button.setAttribute("aria-label", "Open navigation menu");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", menuId);
    button.innerHTML =
      '<span></span><span></span><span></span>';
    nav.appendChild(button);

    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";

    list.querySelectorAll("a").forEach((link) => {
      const target = link.getAttribute("href");
      if (target === currentPage) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });

    function closeMenu() {
      nav.classList.remove("is-menu-open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation menu");
      document.body.classList.remove("nav-menu-open");
    }

    function openMenu() {
      nav.classList.add("is-menu-open");
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Close navigation menu");
      document.body.classList.add("nav-menu-open");
    }

    button.addEventListener("click", () => {
      nav.classList.contains("is-menu-open") ? closeMenu() : openMenu();
    });

    list.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("click", (event) => {
      if (!nav.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        button.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) closeMenu();
    }, { passive: true });
  });
})();

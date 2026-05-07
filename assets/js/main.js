// Mark the current page in the top nav so styling can highlight it.
// Kept tiny and dependency-free on purpose.
(function () {
  var path = window.location.pathname.replace(/\/index\.html$/, "/");
  if (path === "") path = "/";
  var links = document.querySelectorAll(".site-nav a");
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    if (!href) continue;
    var normalized = href.replace(/\/index\.html$/, "/");
    var isHome = normalized === "/" && path === "/";
    var isSection = normalized !== "/" && path.indexOf(normalized) === 0;
    if (isHome || isSection) {
      links[i].setAttribute("aria-current", "page");
    }
  }

  var yearEl = document.querySelector("[data-current-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();

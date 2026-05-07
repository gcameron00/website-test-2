// Visit Marbella — small bits of vanilla JS for the static site.
// No framework, no dependencies. Each block is independent and
// no-ops if the relevant element isn't on the page.

(function () {
  'use strict';

  // ---- Theme toggle ---------------------------------------------------
  // Persists to localStorage; falls back to prefers-color-scheme.

  var STORAGE_KEY = 'visit-marbella-theme';
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      root.setAttribute('data-theme', theme);
    } else {
      root.removeAttribute('data-theme');
    }
  }

  function currentTheme() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (_e) {
      // Storage may be blocked; that's fine.
    }
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply on first paint to avoid a flash.
  applyTheme(currentTheme());

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('[data-theme-toggle]');
    if (toggle) {
      var update = function () {
        var t = currentTheme();
        toggle.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
        var label = toggle.querySelector('[data-theme-label]');
        if (label) label.textContent = t === 'dark' ? 'Light mode' : 'Dark mode';
      };
      update();
      toggle.addEventListener('click', function () {
        var next = currentTheme() === 'dark' ? 'light' : 'dark';
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch (_e) {
          /* ignore */
        }
        applyTheme(next);
        update();
      });
    }

    // ---- Mobile nav ---------------------------------------------------

    var nav = document.querySelector('[data-nav]');
    var navToggle = document.querySelector('[data-nav-toggle]');
    if (nav && navToggle) {
      var setNavOpen = function (open) {
        nav.classList.toggle('is-open', open);
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      };
      navToggle.addEventListener('click', function () {
        setNavOpen(!nav.classList.contains('is-open'));
      });
      // Close on Escape.
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
          setNavOpen(false);
          navToggle.focus();
        }
      });
      // Close when a link is clicked (small screens only — harmless on big ones).
      nav.addEventListener('click', function (e) {
        var t = e.target;
        if (t && t.tagName === 'A') setNavOpen(false);
      });
    }

    // ---- Footer year --------------------------------------------------

    var year = document.querySelector('[data-year]');
    if (year) year.textContent = String(new Date().getFullYear());
  });
})();

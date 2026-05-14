/* Stundara – minimales JavaScript (Mobile-Menü, Cookie-Banner, Form-Validierung) */
(function () {
  "use strict";

  /* ---- 1. Mobile-Menü ---- */
  const toggle = document.querySelector(".site-nav__toggle");
  const list = document.querySelector(".site-nav__list");
  if (toggle && list) {
    toggle.addEventListener("click", function () {
      const isOpen = list.classList.toggle("site-nav__list--open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  /* ---- 2. Cookie-Banner (Mock; § 165 TKG + DSGVO Art. 7) ---- */
  const CONSENT_KEY = "stundara.cookie-consent";
  const banner = document.querySelector(".cookie-banner");
  const reopenLink = document.querySelector("[data-cookie-reopen]");

  function hasConsent() {
    try { return Boolean(localStorage.getItem(CONSENT_KEY)); }
    catch (_) { return false; }
  }

  function setConsent(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (_) {}
    if (banner) banner.hidden = true;
  }

  if (banner && !hasConsent()) {
    banner.hidden = false;
  }

  document.querySelectorAll("[data-consent]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setConsent(btn.getAttribute("data-consent"));
    });
  });

  if (reopenLink && banner) {
    reopenLink.addEventListener("click", function (e) {
      e.preventDefault();
      banner.hidden = false;
      banner.focus();
    });
  }

  /* ---- 3. Form-Validierung mit präzisen Fehlermeldungen ---- */
  document.querySelectorAll("form[data-validate]").forEach(function (form) {
    form.setAttribute("novalidate", "");
    form.addEventListener("submit", function (e) {
      const invalid = [];
      form.querySelectorAll("input, textarea, select").forEach(function (field) {
        field.setAttribute("aria-invalid", "false");
        const errEl = form.querySelector("#err-" + field.id);
        if (errEl) errEl.textContent = "";
        if (!field.checkValidity()) {
          field.setAttribute("aria-invalid", "true");
          const label = form.querySelector('label[for="' + field.id + '"]');
          const fieldName = label ? label.textContent.replace(/\*$/, "").trim() : field.name;
          const msg = field.validity.valueMissing
            ? "Bitte " + fieldName + " angeben."
            : "Bitte " + fieldName + " im richtigen Format eingeben.";
          if (errEl) errEl.textContent = msg;
          invalid.push(field);
        }
      });
      if (invalid.length > 0) {
        e.preventDefault();
        invalid[0].focus();
      } else {
        e.preventDefault();
        const success = form.querySelector("[data-form-success]");
        if (success) {
          success.hidden = false;
          success.focus();
        }
        form.reset();
      }
    });
  });
})();

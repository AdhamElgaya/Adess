/**
 * Edit these for your deployment.
 * Logo file: place image at coming-soon-site/images/logo.png (same folder as this file → images/)
 */
var ADESS = {
  instagramUrl: "https://www.instagram.com/",
  logoSrc: "./images/logo.png",
};

(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var ig = document.getElementById("instagram-link");
  if (ig && ADESS.instagramUrl) ig.setAttribute("href", ADESS.instagramUrl);

  var logo = document.getElementById("site-logo");
  var wordmark = document.getElementById("site-wordmark");
  if (logo && ADESS.logoSrc) logo.setAttribute("src", ADESS.logoSrc);

  if (logo && wordmark) {
    logo.addEventListener("error", function () {
      logo.hidden = true;
      wordmark.hidden = false;
    });
  }

  var form = document.getElementById("subscribe-form");
  var msg = document.getElementById("form-message");
  var emailInput = document.getElementById("email");

  function setMessage(text, kind) {
    if (!msg) return;
    msg.textContent = text;
    msg.hidden = !text;
    msg.removeAttribute("data-kind");
    if (kind) msg.setAttribute("data-kind", kind);
  }

  if (form && emailInput) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = (emailInput.value || "").trim();
      var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      if (!ok) {
        setMessage("Please enter a valid email address.", "error");
        return;
      }
      setMessage("Thank you — we will be in touch when the site goes live.", "success");
      emailInput.value = "";
    });

    emailInput.addEventListener("input", function () {
      if (msg && !msg.hidden) setMessage("", null);
    });
  }
})();

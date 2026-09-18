/**
 * CV page behaviour:
 *  - light/dark theme toggle (remembers choice, respects OS preference)
 *  - "Download PDF" button (uses the browser's print-to-PDF)
 *  - graceful fallbacks when photo / signature images are missing
 */

const THEME_KEY = "cv-theme";
const root = document.documentElement;

function readStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch {
    return null;
  }
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* storage unavailable (private mode etc.) — theme still applies for this visit */
  }
}

function initTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = readStoredTheme() ?? (prefersDark ? "dark" : "light");

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
}

function initPrint() {
  document.getElementById("print-btn")?.addEventListener("click", () => {
    // Always print in light mode so the PDF looks like paper.
    const current = root.dataset.theme;
    root.dataset.theme = "light";
    window.print();
    root.dataset.theme = current;
  });
}

function initImageFallbacks() {
  // Profile photo -> initials avatar
  document.querySelectorAll("img[data-fallback]").forEach((img) => {
    const swap = () => {
      const avatar = document.createElement("div");
      avatar.className = "profile__initials";
      avatar.setAttribute("role", "img");
      avatar.setAttribute("aria-label", img.alt);
      avatar.textContent = img.dataset.fallback;
      img.replaceWith(avatar);
    };
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener("error", swap, { once: true });
  });

  // Signature -> just hide it, the signature line remains
  document.querySelectorAll(".signature__img").forEach((img) => {
    const hide = () => (img.hidden = true);
    if (img.complete && img.naturalWidth === 0) hide();
    else img.addEventListener("error", hide, { once: true });
  });
}

initTheme();
initPrint();
initImageFallbacks();

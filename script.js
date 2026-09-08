/**
 * Toggle the mobile navigation drawer open and closed.
 *
 * @param {HTMLElement | null} button - The trigger used to open the menu.
 * @param {HTMLElement | null} nav - The navigation element that receives the open class.
 */
function toggleMenu(button, nav) {
  if (!button || !nav) {
    return;
  }

  const isOpen = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", String(isOpen));
}

/**
 * Close the navigation after a user selects a section link.
 *
 * @param {HTMLElement | null} nav - The navigation element to collapse.
 */
function closeMenu(nav) {
  if (!nav) {
    return;
  }

  nav.classList.remove("open");
  nav.setAttribute("aria-expanded", "false");
}

/**
 * Initialize the mobile navigation interactions for the landing page.
 */
function initNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (!menuButton || !nav) {
    return;
  }

  // Keep accessibility state in sync with the open/closed menu state.
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.addEventListener("click", () => toggleMenu(menuButton, nav));

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => closeMenu(nav));
  });
}

/**
 * Populate the copyright year in the footer.
 */
function setCurrentYear() {
  const yearNode = document.getElementById("year");

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
}

initNavigation();
setCurrentYear();

export function initGaragePage(): void {
  const menuButton = document.querySelector('[data-testid="btn-mobile-menu"]');
  const mobileMenu = document.querySelector('[data-testid="mobile-menu"]');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('is-hidden');
      mobileMenu.classList.toggle('is-hidden');
      menuButton.setAttribute('aria-expanded', String(isHidden));
    });
  }
}

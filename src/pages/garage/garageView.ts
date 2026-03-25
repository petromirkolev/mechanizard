import { dom } from '../../utils/dom';
import { bikes } from '../../data/bikes';
import { renderBikeCard } from '../../render/bikes/renderBikeCard';

export function renderGarageView() {
  if (dom.garageGrid)
    if (bikes.length > 0) {
      dom.garageGrid.innerHTML = bikes.map(renderBikeCard).join('');
    } else {
      dom.garageGrid.innerHTML = 'No bikes added to the garage yet.';
    }

  initGaragePage();
}

function initGaragePage(): void {
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

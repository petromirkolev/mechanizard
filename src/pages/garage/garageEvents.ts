import { bikes } from '../../data/bikes';

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

export function editBike(bikeId: string | undefined, data: any) {
  bikes.find((bike) => {
    if (bike.id === bikeId) {
      bike.make = data.make;
      bike.model = data.model;
      bike.year = data.year;
      bike.odo = data.odo;
    }
    return;
  });
}

export function logOdo(bikeId: string | undefined, odo: number) {
  bikes.find((bike) => {
    if (bike.id === bikeId) {
      bike.odo = odo;
    }
    return;
  });
}

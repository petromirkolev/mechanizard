import { dom } from '../../utils/dom';
import { bikes } from '../../data/bikes';
import type { Bike } from '../../types/bike';
import { renderMaintenanceHeader } from '../../render/maintenance/renderMaintenanceHeader';

export function renderMaintenanceView(
  bikeId: string = '',
  current: boolean = true,
  history: boolean = false,
) {
  const bike = bikes.find((bike) => bike.id === bikeId);
  if (!bike) return;

  const maintenanceHeader: string = renderMaintenanceHeader(bike as Bike);
  if (!maintenanceHeader) return;

  const doc = document.querySelector('.maintenance-top__grid');
  if (!doc) return;

  doc.innerHTML = maintenanceHeader;

  if (current) {
    showCurrent();
    return;
  }

  if (history) {
    showHistory();
    return;
  }
}

export function renderMaintenanceBikeSelect() {
  const selectContainer = document.querySelector<HTMLSelectElement>(
    '[data-testid="bike-select"]',
  );

  bikes.forEach((bike) => {
    const option = document.createElement('option');
    option.value = bike.id;
    option.dataset.bikeid = bike.id;
    option.innerText = `${bike.year} ${bike.make} ${bike.model}`;
    selectContainer?.appendChild(option);
  });

  selectContainer?.addEventListener('change', () => {
    const bikeId = selectContainer.value;

    if (!dom.maintenancePanel) return;
    dom.maintenancePanel.classList.remove('is-hidden');

    renderMaintenanceView(bikeId, true, false);
  });
}

function showCurrent() {
  document
    .querySelector('[data-action="show-maintenance-current"]')
    ?.classList.add('active');
  document
    .querySelector('[data-action="show-maintenance-history"]')
    ?.classList.remove('active');
  dom.maintenanceShowCurrent?.classList.remove('is-hidden');
  dom.maintenanceShowHistory?.classList.add('is-hidden');
}

function showHistory() {
  document
    .querySelector('[data-action="show-maintenance-current"]')
    ?.classList.remove('active');
  document
    .querySelector('[data-action="show-maintenance-history"]')
    ?.classList.add('active');
  dom.maintenanceShowHistory?.classList.remove('is-hidden');
  dom.maintenanceShowCurrent?.classList.add('is-hidden');
}

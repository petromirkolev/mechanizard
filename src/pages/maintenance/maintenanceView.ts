import { dom } from '../../utils/dom';
import { bikes } from '../../data/bikes';
import type { Bike } from '../../types/bike';
import { renderMaintenanceHeader } from '../../render/maintenance/renderMaintenanceHeader';
import { historyItems, maintenanceItems } from '../../data/maintenance';
import { renderMaintenanceCard } from '../../render/maintenance/renderMaintenanceCard';
import { renderHistoryCard } from '../../render/maintenance/renderMaintenanceHistoryCard';

export function renderMaintenanceView(bikeId: string | undefined) {
  (dom.maintenancePanel as HTMLElement).classList.remove('is-hidden');

  const bike = bikes.find((bike) => bike.id === bikeId);
  if (!bike) return;

  const maintenanceHeaderContent: string = renderMaintenanceHeader(
    bike as Bike,
  );
  if (!maintenanceHeaderContent) return;

  if (!dom.maintenanceHeaderContainer) return;
  dom.maintenanceHeaderContainer.innerHTML = '';
  dom.maintenanceHeaderContainer.innerHTML = maintenanceHeaderContent;

  showCurrent();
}

export function renderMaintenanceBikeSelect() {
  if (!dom.maintenanceSelectBikeContainer) return;
  dom.maintenanceSelectBikeContainer.innerHTML = `<option value="">Select a bike</option>`;

  bikes.forEach((bike) => {
    const option = document.createElement('option');
    option.value = bike.id;
    option.dataset.bikeid = bike.id;
    option.innerText = `${bike.year} ${bike.make} ${bike.model}`;
    dom.maintenanceSelectBikeContainer?.appendChild(option);
  });

  dom.maintenanceSelectBikeContainer.addEventListener('change', () => {
    const bikeId = dom.maintenanceSelectBikeContainer?.value;

    renderMaintenanceView(bikeId);
  });
}

export function showCurrent() {
  document
    .querySelector('[data-action="show-maintenance-current"]')
    ?.classList.add('active');
  document
    .querySelector('[data-action="show-maintenance-history"]')
    ?.classList.remove('active');
  dom.maintenanceShowCurrent?.classList.remove('is-hidden');
  dom.maintenanceShowHistory?.classList.add('is-hidden');

  (dom.maintenanceShowCurrent as HTMLElement).innerHTML = '';

  maintenanceItems.forEach((item) => {
    const maintenanceCard = renderMaintenanceCard(item);
    (dom.maintenanceShowCurrent as HTMLElement).innerHTML += maintenanceCard;
  });
}

export function showHistory() {
  document
    .querySelector('[data-action="show-maintenance-current"]')
    ?.classList.remove('active');
  document
    .querySelector('[data-action="show-maintenance-history"]')
    ?.classList.add('active');
  dom.maintenanceShowHistory?.classList.remove('is-hidden');
  dom.maintenanceShowCurrent?.classList.add('is-hidden');

  (dom.maintenanceShowHistory as HTMLElement).innerHTML = '';

  historyItems.forEach((item) => {
    const historyCard = renderHistoryCard(item);
    (dom.maintenanceShowHistory as HTMLElement).innerHTML += historyCard;
  });
}

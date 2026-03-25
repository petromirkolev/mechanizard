import { dom } from '../../utils/dom';
import { bikes } from '../../data/bikes';
import type { Bike } from '../../types/bike';
import { showCurrent } from './maintenanceEvents';
import { renderMaintenanceHeader } from '../../render/maintenance/renderMaintenanceHeader';

export function renderMaintenanceView(bikeId: string | undefined) {
  (dom.maintenancePanel as HTMLElement).classList.remove('is-hidden');

  renderMaintenanceBikeSelect();

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

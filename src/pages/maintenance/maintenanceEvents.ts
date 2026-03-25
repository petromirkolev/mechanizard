import { dom } from '../../utils/dom';
import { renderMaintenanceCard } from '../../render/maintenance/renderMaintenanceCard';
import { renderHistoryCard } from '../../render/maintenance/renderMaintenanceHistoryCard';
import { maintenanceItems } from '../../data/maintenance';
import { historyItems } from '../../data/maintenance';

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

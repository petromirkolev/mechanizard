import type { MaintenanceItem } from '../../types/maintenance';

export function renderMaintenanceCard(item: MaintenanceItem) {
  const maintenanceCard = `
              <article class="card maintenance-item-card" data-bikeid="${item.bike_id}">
                <h3>${item.name}</h3>
                <p class="muted">${item.description}</p>

                <div class="maintenance-lines">
                  <p><strong>Last:</strong> Never logged</p>
                  <p><strong>Due:</strong> Not scheduled yet</p>
                </div>

                <div class="job-actions">
                  <button
                    type="button"
                    data-action="open-log-maintenance-modal">
                    Log Service
                  </button>
                  <button
                    type="button"
                    class="ghost"
                    data-action="open-schedule-maintenance-modal">
                    Schedule
                  </button>
                </div>
              </article>
              `;

  return maintenanceCard;
}

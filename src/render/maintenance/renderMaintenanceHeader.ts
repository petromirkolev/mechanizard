import type { Bike } from '../../types/bike';

export function renderMaintenanceHeader(bike: Bike): string {
  const header = `
                <article
                  class="card maintenance-top-card maintenance-top-card--bike"
                  data-testid="bike-summary-card">
                  <div class="maintenance-top-card__body">
                    <div>
                      <h3>${bike.make}</h3>
                      <p class="muted">${bike.model}</p>
                    </div>

                    <div class="maintenance-top-card__bike-actions">
                      <span class="odo-pill">${bike.odo} km</span>

                      <div class="bike-card-actions">
                        <button
                          type="button"
                          class="icon-action icon-action--edit"
                          data-action="open-edit-bike-modal"
                          data-bikeid=${bike.id}
                          aria-label="Edit bike">
                          <img
                            src="./src/assets/icons/icon-edit-glyph.svg"
                            alt="" />
                        </button>

                        <button
                          type="button"
                          class="icon-action icon-action--log"
                          data-action="open-log-odo-modal"
                          data-bikeid=${bike.id}
                          aria-label="Log current odometer">
                          <img
                            src="./src/assets/icons/icon-log-odo-glyph.svg"
                            alt="" />
                        </button>

                        <button
                          type="button"
                          class="icon-action icon-action--delete"
                          data-action="open-delete-bike-modal"
                          data-bikeid=${bike.id}
                          aria-label="Delete bike">
                          <img
                            src="./src/assets/icons/icon-delete-glyph.svg"
                            alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>

                <article
                  class="card maintenance-top-card maintenance-top-card--stat">
                  <div class="stat-card__icon stat-card__icon--danger">
                    <img
                      src="./src/assets/icons/icon-overdue-glyph.svg"
                      alt="" />
                  </div>
                  <strong>0</strong>
                  <span class="muted">Overdue</span>
                </article>

                <article
                  class="card maintenance-top-card maintenance-top-card--stat">
                  <div class="stat-card__icon stat-card__icon--warn">
                    <img
                      src="./src/assets/icons/icon-due-soon-glyph.svg"
                      alt="" />
                  </div>
                  <strong>0</strong>
                  <span class="muted">Due Soon</span>
                </article>

                <article
                  class="card maintenance-top-card maintenance-top-card--stat">
                  <div class="stat-card__icon stat-card__icon--ok">
                    <img
                      src="./src/assets/icons/icon-on-track-glyph.svg"
                      alt="" />
                  </div>
                  <strong>0</strong>
                  <span class="muted">On Track</span>
                </article>
  `;

  return header;
}

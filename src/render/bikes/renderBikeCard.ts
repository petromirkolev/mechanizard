import type { Bike } from '../../types/bike';

export function renderBikeCard(bike: Bike): string {
  return `
    <article class="card garage-bike-card is-clickable" data-testid="garage-bike-card-${bike.id}">
      <button type="button" class="garage-bike-card__link" data-action="open-bike-maintenance"
      data-bikeid="${bike.id}">
        <div class="garage-bike-card__content">
          <div>
            <h3>${bike.make}</h3>
            <p class="muted">${bike.year} ${bike.make} ${bike.model}</p>
          </div>
          <span class="odo-pill">${bike.odo} km</span>
        </div>
      </button>

      <div class="garage-bike-card__footer">
        <button type="button" class="icon-action icon-action--edit" data-action="open-edit-bike-modal" data-bikeid=${bike.id} aria-label="Edit bike">
          <img src="./src/assets/icons/icon-edit-glyph.svg" alt="" />
        </button>

        <button type="button" class="icon-action icon-action--log" data-action="open-log-odo-modal" data-bikeid=${bike.id} aria-label="Log current odometer">
          <img src="./src/assets/icons/icon-log-odo-glyph.svg" alt="" />
        </button>

        <button type="button" class="icon-action icon-action--delete" data-action="open-delete-bike-modal" data-bikeid=${bike.id} aria-label="Delete bike">
          <img src="./src/assets/icons/icon-delete-glyph.svg" alt="" />
        </button>
      </div>
    </article>
  `;
}

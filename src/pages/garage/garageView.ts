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
}

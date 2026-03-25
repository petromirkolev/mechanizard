import { dom } from '../utils/dom';
import { bikes } from '../data/bikes';
import { renderBikeCard } from './bikes/renderBikeCard';
import { initLoginPage, initRegisterPage } from '../pages/auth/authView';

type Action =
  | 'show-login-form'
  | 'show-register-form'
  | 'login'
  | 'register'
  | 'garage-page';

export function initRouter(): void {
  document.addEventListener('click', async (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    const el = target.closest<HTMLElement>('[data-action]');
    if (!el) return;

    const action = el.dataset.action as Action;
    if (!action) return;

    console.log(action);

    switch (action) {
      case 'show-login-form': {
        initLoginPage();
        break;
      }
      case 'show-register-form': {
        initRegisterPage();
        break;
      }

      case 'garage-page': {
        if (dom.garageGrid)
          dom.garageGrid.innerHTML = bikes.map(renderBikeCard).join('');
        break;
      }
      default:
        break;
    }
  });
}

import { dom } from '../utils/dom';
import type { Action } from '../types/action';
import { renderLoginPage, renderRegisterPage } from '../pages/auth/authView';
import { editBike, logOdo } from '../pages/garage/garageEvents';
import { showScreen } from '../utils/show-screen';
import {
  readAddBikeForm,
  readEditBikeForm,
  readLogOdoForm,
} from '../utils/forms';
import { addBikeModal } from '../modals/addBikeModal';
import { bikes } from '../data/bikes';
import { logOdoModal } from '../modals/logOdoModal';
import { deleteBikeModal } from '../modals/deleteBikeModal';
import { editBikeModal } from '../modals/editBikeModal';
import { renderGarageView } from '../pages/garage/garageView';
import {
  renderMaintenanceView,
  renderMaintenanceBikeSelect,
} from '../pages/maintenance/maintenanceView';

export function initRouter(): void {
  document.addEventListener('click', async (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    const el = target.closest<HTMLElement>('[data-action]');
    if (!el) return;

    const action = el.dataset.action as Action;
    if (!action) return;

    console.log(action);

    switch (action) {
      /* Auth */
      case 'show-login-form': {
        showScreen('auth');
        renderLoginPage();
        break;
      }
      case 'show-register-form': {
        showScreen('auth');
        renderRegisterPage();
        break;
      }
      case 'login': {
        showScreen('garage');
        renderGarageView();
        break;
      }
      case 'register': {
        showScreen('garage');
        renderGarageView();
        break;
      }

      /* Top bar */
      case 'garage-page': {
        showScreen('garage');
        renderGarageView();
        break;
      }
      case 'maintenance-page': {
        showScreen('maintenance');
        renderMaintenanceBikeSelect();
        break;
      }
      case 'logout': {
        showScreen('auth');
        renderLoginPage();
        break;
      }

      /* Garage page */
      case 'add-bike-submit': {
        const form = (dom.addBikeForm as HTMLFormElement) || null;
        const bike = await readAddBikeForm(form);
        const id = String(Math.round(Math.random() * 10));

        bikes.push({ ...bike, id });

        form.reset();
        addBikeModal.close();

        renderGarageView();
        break;
      }
      case 'edit-bike-submit': {
        const bikeId = el.dataset.bikeid;

        const form = (dom.editBikeForm as HTMLFormElement) || null;
        const bike = await readEditBikeForm(form);

        editBike(bikeId, bike);

        form.reset();
        editBikeModal.close();
        renderGarageView();

        break;
      }
      case 'log-odo-submit': {
        const bikeId = el.dataset.bikeid;

        const form = (dom.logOdoForm as HTMLFormElement) || null;
        const odo = await readLogOdoForm(form);

        logOdo(bikeId, odo);

        form.reset();
        logOdoModal.close();
        renderGarageView();

        break;
      }
      case 'confirm-bike-delete': {
        const bikeId = el.dataset.bikeid;

        const index = bikes.findIndex((bike) => bike.id === bikeId);

        bikes.splice(index, 1);

        deleteBikeModal.close();
        renderGarageView();

        break;
      }
      case 'reject-bike-delete': {
        deleteBikeModal.close();
        break;
      }

      /* Maintenance page */
      case 'show-maintenance-current': {
        renderMaintenanceView('', true, false);
        break;
      }
      case 'show-maintenance-history': {
        renderMaintenanceView('', false, true);
        break;
      }

      /* Modals */
      /** Add bike modal */
      case 'open-add-bike-modal': {
        addBikeModal.open();
        break;
      }
      case 'close-add-bike-modal': {
        addBikeModal.close();
        break;
      }

      /** Edit bike modal */
      case 'open-edit-bike-modal': {
        const bikeId = el.dataset.bikeid;
        editBikeModal.open(bikeId);
        break;
      }
      case 'close-edit-bike-modal': {
        editBikeModal.close();
        break;
      }

      /** Log odo modal */
      case 'open-log-odo-modal': {
        const bikeId = el.dataset.bikeid;
        logOdoModal.open(bikeId);
        break;
      }
      case 'close-log-odo-modal': {
        logOdoModal.close();
        break;
      }

      /** Delete bike modal */
      case 'open-delete-bike-modal': {
        const bikeId = el.dataset.bikeid;
        deleteBikeModal.open(bikeId);
        break;
      }
      case 'close-delete-bike-modal': {
        deleteBikeModal.close();
        break;
      }
      default:
        break;
    }
  });
}

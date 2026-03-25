import { bikes } from '../data/bikes';

const modal = document.getElementById('modal-edit-bike');
if (!modal) throw new Error('Modal not found');

export const editBikeModal = {
  open(bikeId: string | undefined) {
    const bike = bikes.find((bike) => bike.id === bikeId);
    if (!bike) return;

    const editBtn = document.querySelector<HTMLButtonElement>(
      '[data-action="edit-bike-submit"]',
    );
    if (!editBtn) return;
    editBtn.dataset.bikeid = bikeId;

    const make = document.getElementById(
      'edit-bike-make',
    ) as HTMLInputElement | null;
    const model = document.getElementById(
      'edit-bike-model',
    ) as HTMLInputElement | null;
    const year = document.getElementById(
      'edit-bike-year',
    ) as HTMLInputElement | null;
    const odo = document.getElementById(
      'edit-bike-odometer',
    ) as HTMLInputElement | null;

    if (!make || !model || !year || !odo) return;

    make.value = bike.make;
    model.value = bike.model;
    year.value = String(bike.year);
    odo.value = String(bike.odo);

    modal.classList.remove('is-hidden');
  },

  close() {
    modal.classList.add('is-hidden');
  },
};

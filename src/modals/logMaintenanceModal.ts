export const logMaintenanceModal = {
  open() {
    document
      .querySelector('#modal-add-maintenance')
      ?.classList.remove('is-hidden');
  },

  close() {
    document
      .querySelector('#modal-add-maintenance')
      ?.classList.add('is-hidden');
  },
};

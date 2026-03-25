export const scheduleMaintenanceModal = {
  open() {
    document
      .querySelector('#modal-schedule-maintenance')
      ?.classList.remove('is-hidden');
  },

  close() {
    document
      .querySelector('#modal-schedule-maintenance')
      ?.classList.add('is-hidden');
  },
};

const modal = document.getElementById('modal-log-odo');
if (!modal) throw new Error('Modal not found');

export const logOdoModal = {
  open(bikeId: string | undefined) {
    modal.classList.remove('is-hidden');

    const logOdoButton = document.querySelector<HTMLButtonElement>(
      '[data-action="log-odo-submit"]',
    );
    if (!logOdoButton) return;
    logOdoButton.dataset.bikeid = bikeId;
  },

  close() {
    modal.classList.add('is-hidden');
  },
};

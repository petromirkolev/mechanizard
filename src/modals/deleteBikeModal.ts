export const deleteBikeModal = {
  open(bikeId: string | undefined) {
    document.querySelector('#modal-delete-bike')?.classList.remove('is-hidden');
    const deleteBtn = document.querySelector<HTMLButtonElement>(
      '[data-action="confirm-bike-delete"]',
    );
    if (!deleteBtn) return;
    deleteBtn.dataset.bikeid = bikeId;
  },

  close() {
    document.querySelector('#modal-delete-bike')?.classList.add('is-hidden');
  },
};

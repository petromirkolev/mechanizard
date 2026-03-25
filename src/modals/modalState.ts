export function initModals(): void {
  initModalOpeners();
  initModalClosers();
  initModalOverlayClose();
}

const openers: Record<string, string> = {
  '[data-action="open-add-bike-modal"]': 'modal-add-bike',
  '[data-action="open-add-maintenance-modal"]': 'modal-add-maintenance',
  '[data-action="open-schedule-maintenance-modal"]':
    'modal-schedule-maintenance',
  '[data-action="open-log-maintenance-modal"]': 'modal-log-maintenance',
  '[data-action="open-add-repair-modal"]': 'modal-add-repair',
};

function initModalOpeners(): void {
  Object.entries(openers).forEach(([selector, modalId]) => {
    document.querySelectorAll(selector).forEach((button) => {
      button.addEventListener('click', () => {
        document.getElementById(modalId)?.classList.remove('is-hidden');
      });
    });
  });
}

function initModalClosers(): void {
  document.querySelectorAll('.modal-close').forEach((button) => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-close-modal');
      if (modalId) {
        document.getElementById(modalId)?.classList.add('is-hidden');
      }
    });
  });
}

function initModalOverlayClose(): void {
  document.querySelectorAll('.modal-overlay').forEach((overlay) => {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        overlay.classList.add('is-hidden');
      }
    });
  });
}

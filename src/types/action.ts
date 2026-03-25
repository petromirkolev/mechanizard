export type Action =
  /* Auth */
  | 'show-login-form'
  | 'show-register-form'
  | 'login'
  | 'register'

  /* Top bar */
  | 'garage-page'
  | 'maintenance-page'
  | 'logout'

  /* Garage */
  | 'add-bike-submit'
  | 'open-bike-maintenance'

  /* Maintenance */
  | 'show-maintenance-current'
  | 'show-maintenance-history'

  /* Modals */
  /** Add bike modal */
  | 'open-add-bike-modal'
  | 'close-add-bike-modal'

  /** Edit bike modal */
  | 'open-edit-bike-modal'
  | 'edit-bike-submit'
  | 'close-edit-bike-modal'

  /** Log odo modal */
  | 'open-log-odo-modal'
  | 'log-odo-submit'
  | 'close-log-odo-modal'

  /** Delete bike modal */
  | 'open-delete-bike-modal'
  | 'close-delete-bike-modal'
  | 'confirm-bike-delete'
  | 'reject-bike-delete'

  /** Log maintenance modal */
  | 'open-log-maintenance-modal'
  | 'close-log-maintenance-modal'
  | 'open-schedule-maintenance-modal'
  | 'close-schedule-maintenance-modal';

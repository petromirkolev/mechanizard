export const dom = {
  /* Top bar */
  topbar: document.querySelector<HTMLElement>('[data-testid="topbar"]'),

  /* Screens */
  authScreen: document.querySelector<HTMLElement>('.auth-view'),
  garageScreen: document.querySelector<HTMLElement>(
    '[data-testid="shell-garage"]',
  ),
  maintenanceScreen: document.querySelector<HTMLElement>(
    '[data-testid="shell-maintenance"]',
  ),

  /* Forms */
  addBikeForm: document.querySelector<HTMLFormElement>(
    '[data-testid="add-bike-form"]',
  ),
  editBikeForm: document.querySelector<HTMLFormElement>(
    '[data-testid="edit-bike-form"]',
  ),
  logOdoForm: document.querySelector<HTMLFormElement>(
    '[data-testid="log-odo-form"]',
  ),

  /* Login */
  loginForm: document.querySelector<HTMLElement>('[data-testid="form-login"]'),
  gotoLoginButton: document.querySelector<HTMLElement>(
    '[data-testid="tab-login"]',
  ),
  loginButton: document.querySelector<HTMLElement>('[data-testid="btn-login"]'),

  /* Register */
  registerForm: document.querySelector<HTMLElement>(
    '[data-testid="form-register"]',
  ),
  gotoRegisterButton: document.querySelector<HTMLElement>(
    '[data-testid="tab-register"]',
  ),
  registerButton: document.querySelector<HTMLElement>(
    '[data-testid="btn-register"]',
  ),

  /* Garage */
  garageGrid: document.querySelector<HTMLElement>(
    '[data-testid="garage-grid"]',
  ),

  /* Maintenance */
  maintenancePanel: document.querySelector<HTMLElement>(
    '[data-testid="panel-maintenance"]',
  ),
  maintenanceShowCurrent: document.querySelector<HTMLElement>(
    '[data-testid="maintenance-current-list"]',
  ),
  maintenanceShowHistory: document.querySelector<HTMLElement>(
    '[data-testid="maintenance-history-list"]',
  ),
};

export const dom = {
  // Screens
  authScreen: document.querySelector<HTMLElement>('.auth-view'),
  appScreen: document.querySelector<HTMLElement>('.app-view'),

  // Login
  loginForm: document.querySelector<HTMLElement>('[data-testid="form-login"]'),
  gotoLoginButton: document.querySelector<HTMLElement>(
    '[data-testid="tab-login"]',
  ),
  loginButton: document.querySelector<HTMLElement>('[data-testid="btn-login"]'),

  // Register
  registerForm: document.querySelector<HTMLElement>(
    '[data-testid="form-register"]',
  ),
  gotoRegisterButton: document.querySelector<HTMLElement>(
    '[data-testid="tab-register"]',
  ),
  registerButton: document.querySelector<HTMLElement>(
    '[data-testid="btn-register"]',
  ),

  // Garage grid
  garageGrid: document.querySelector<HTMLElement>(
    '[data-testid="garage-grid"]',
  ),
};

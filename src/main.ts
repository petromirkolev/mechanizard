import './styles/reset.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages.css';

import { initMobileMenu } from './pages/auth/authEvents';
import { initModals } from './modals/modalState';
import { initGaragePage } from './pages/garage/garageEvents';
import { initRouter } from './render/router';

function bootstrapApp(): void {
  initRouter();
  initMobileMenu();
  initModals();
  initGaragePage();
}

bootstrapApp();

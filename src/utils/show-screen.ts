import { dom } from './dom';

export type Screen = 'auth' | 'garage' | 'maintenance';
export type AuthMode = 'login' | 'register';
export type MaintenanceMode = 'maintenance-log' | 'maintenance-history';

const SCREENS: Record<Screen, HTMLElement | null> = {
  auth: dom.authScreen,
  garage: dom.garageScreen,
  maintenance: dom.maintenanceScreen,
};

const NAV_LINKS = {
  garage: dom.navGarage,
  maintenance: dom.navMaintenance,
};

function setHidden(el: HTMLElement | null, hidden: boolean) {
  if (!el) return;
  el.classList.toggle('is-hidden', hidden);
  console.log(el);
}

function clearActiveNav(): void {
  [
    dom.navGarage,
    dom.navMaintenance,
    dom.navRepairs,
    dom.navGuides,
    dom.navProfile,
  ].forEach((link) => {
    link?.classList.remove('active');
  });
}

function setActiveNav(screen: Screen): void {
  clearActiveNav();

  if (screen === 'auth') return;

  NAV_LINKS[screen]?.classList.add('active');
}

export function showScreen(screen: Screen) {
  (Object.keys(SCREENS) as Screen[]).forEach((key) => {
    setHidden(SCREENS[key], key !== screen);
  });

  dom.topbar?.classList.toggle('is-hidden', screen === 'auth');
  setActiveNav(screen);
}

export function showAuthForm(mode: AuthMode) {
  setHidden(dom.loginForm, mode !== 'login');
  setHidden(dom.registerForm, mode !== 'register');
}

export function showMaintenanceForm(mode: MaintenanceMode) {
  setHidden(dom.maintenanceShowCurrent, mode !== 'maintenance-log');
  setHidden(dom.maintenanceShowHistory, mode !== 'maintenance-history');
}

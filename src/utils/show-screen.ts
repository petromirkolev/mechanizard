import { dom } from './dom';

export type Screen = 'auth' | 'app';
export type AuthMode = 'login' | 'register';

const SCREENS: Record<Screen, HTMLElement | null> = {
  auth: dom.authScreen,
  app: dom.appScreen,
};

function setHidden(el: HTMLElement | null, hidden: boolean) {
  if (!el) return;
  el.classList.toggle('is-hidden', hidden);
}

export function showScreen(screen: Screen) {
  (Object.keys(SCREENS) as Screen[]).forEach((key) => {
    setHidden(SCREENS[key], key !== screen);
  });
}

export function showAuthForm(mode: AuthMode) {
  setHidden(dom.loginForm, mode !== 'login');
  setHidden(dom.registerForm, mode !== 'register');
}

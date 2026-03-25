import { dom } from '../../utils/dom';
import { showAuthForm } from '../../utils/show-screen';

export function initLoginPage(): void {
  showAuthForm('login');
  dom.gotoLoginButton?.classList.add('active');
  dom.gotoRegisterButton?.classList.remove('active');
}

export function initRegisterPage(): void {
  showAuthForm('register');
  dom.gotoRegisterButton?.classList.add('active');
  dom.gotoLoginButton?.classList.remove('active');
}

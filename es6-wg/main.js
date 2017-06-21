
import LoginController from './login';

document.addEventListener('DOMContentLoaded', () => {
  // do work
  const loginCtrl = new LoginController();
  loginCtrl.init();
  loginCtrl.name = 'chandima';
});

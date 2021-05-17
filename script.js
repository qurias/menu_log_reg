const logreg_login = document.querySelector('.header__login');
const logreg_register = document.querySelector('.header__register');

const login_block = document.querySelector('.block-login');
const register_block = document.querySelector('.block-register');

const login_info = document.querySelector('.block-login__info');
const register_info  = document.querySelector('.block-register__info');

logreg_login.addEventListener('click', () => {
  login_block.style.display = 'flex';
  register_block.style.display = 'none';
  register_info.style.display = 'none';
  setTimeout(() => login_info.style.display = 'flex' , 800);
});

logreg_register.addEventListener('click', () => {
  register_block.style.display = 'flex';
  login_block.style.display = 'none';
  login_info.style.display = 'none';
  setTimeout(() => register_info.style.display = 'flex' , 800);
});
let logreg_login = document.querySelector(".header__logreg__login")
let logreg_register = document.querySelector(".header__logreg__register")

let login_block = document.querySelector(".block__logreg__login")
let register_block = document.querySelector(".block__logreg__register")

let login_info = document.querySelector(".block__logreg__login__info")
let register_info  = document.querySelector(".block__logreg__register__info")

logreg_login.addEventListener('click', () => {
  login_block.style.display = 'flex'
  register_block.style.display = 'none'
  register_info.style.display = 'none'
  setTimeout(() => login_info.style.display = 'flex' , 800)
})

logreg_register.addEventListener('click', () => {
  register_block.style.display = 'flex'
  login_block.style.display = 'none'
  login_info.style.display = 'none'
  setTimeout(() => register_info.style.display = 'flex' , 800)
})
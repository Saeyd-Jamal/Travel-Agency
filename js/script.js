// header nav
const nav_btn_Menu = document.querySelector('.nav-btn'),
      nav = document.querySelector('nav'),
      ul_nav = document.querySelector('.nav-list'),
      setting_nav = document.querySelector('.box-setting');
const menuIsActive = () => {
  nav_btn_Menu.classList.toggle('active');
  nav.classList.toggle('active');
  ul_nav.classList.toggle('active_mobile');
  setting_nav.classList.toggle('active_mobile');
}
nav_btn_Menu.addEventListener('click', menuIsActive);
const menuIsdisabile = () => {
  nav_btn_Menu.classList.remove('active');
  nav.classList.remove('active');
  ul_nav.classList.remove('active_mobile');
  setting_nav.classList.remove('active_mobile');
}
nav.addEventListener('click', menuIsdisabile);
// subscribe_box
const inp_subscribe = document.getElementById('inp_subscribe'),
      label_subscribe = document.getElementById('label_subscribe');

if (inp_subscribe.value != ""){
  label_subscribe.style.display = 'none';
}

inp_subscribe.onfocus = function () {
  label_subscribe.style.display = 'none';
}
inp_subscribe.onblur = function () {
  if (inp_subscribe.value != ""){
    label_subscribe.style.display = 'none';
  }else{
    label_subscribe.style.display = 'flex';
  }
}

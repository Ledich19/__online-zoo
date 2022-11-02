const iconMenu = document.querySelector('.menu__burger');
const closeBtn = document.querySelector('.menu__burger-close');
const bodyMenu = document.querySelector('.menu__list');
const header = document.querySelector('.header');
const blure = document.querySelector('.burger-blure');

function showMenu() {
  iconMenu.classList.add('_active');
  header.classList.add('_menu-open');
  blure.classList.add('_menu-open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  iconMenu.classList.remove('_active');
  header.classList.remove('_menu-open');
  blure.classList.remove('_menu-open');
  document.body.style.overflow = '';
}

if (iconMenu) {
  iconMenu.addEventListener('click', () => {
    showMenu();
  });
}
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    closeMenu();
  });
}
if (blure) {
  blure.addEventListener('click', () => {
    closeMenu();
  });
}

//===============================================
const list = document.querySelector('.donate-form__list');
const amounts = document.querySelectorAll('.donate-form__item');
const anotherAmount = document.getElementById('another-amount-input');

anotherAmount.addEventListener('input', e => {
  if (e.target.value.length > 4) {
    e.target.value = e.target.value.slice(0, 4);
  }
  for (const a of amounts) {
    console.log(e.currentTarget.value);

    if (a.checked) {
      a.checked = false;
    }

    if (a.value === e.currentTarget.value) {
      a.checked = true;
    }
  }
});


list.addEventListener('input', e => {
  anotherAmount.value = e.target.defaultValue
});



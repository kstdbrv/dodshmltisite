

/* let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');

const toggleMenu = () => {
  menu.classList.toggle('active');
}

hamburger.addEventListener('click', e => {
  e.stopPropagation();

  toggleMenu();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == menu || menu.contains(target);
  let its_hamburger = target == hamburger;
  let menu_is_active = menu.classList.contains('active');
  
  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
}) */
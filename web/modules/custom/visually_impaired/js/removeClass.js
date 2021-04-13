/* удаляет  класс hidden-xs для отображения банеров на мобильной версии */

function removeClass() {
  let element = document.querySelector('.col-md-3.hidden-xs');
  element.classList.remove('hidden-xs');
}

removeClass();
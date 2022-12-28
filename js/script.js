
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup');

// console.log(body);




openPopupButtons.forEach((button) => { // Перебираем все кнопки
button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
   e.preventDefault(); // Предотвращаем дефолтное поведение браузера
   popupBg.classList.add('active'); // Добавляем класс 'active' для фона
   popup.classList.add('active'); // И для самого окна
   // body.classList.add('active')
})
});

closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
popupBg.classList.remove('active'); // Убираем активный класс с фона
popup.classList.remove('active'); // И с окна

});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
if (e.target === popupBg) { // Если цель клика - фот, то:
   popupBg.classList.remove('active'); // Убираем активный класс с фона
   popup.classList.remove('active'); // И с окна
  
}
});

const inputs = document.querySelectorAll(".input");
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (Array.from(inputs).every((v) => v.value) == true) {
      document.querySelector(".form__button").classList.add("_active");
    } else {
      document.querySelector(".form__button").classList.remove("_active");
    }
  });
});
const swiper = new Swiper('.swiper', {
  
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    
  },
 
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

});

// let burgerBtn = document.querySelector(".burger-btn");

// let burger = document.querySelector('.burger');  

// burgerBtn.addEventListener('click', (e) => {

  //  burger.classList.toggle("open"); 
  //  let burgerInner = document.querySelector('.burger__inner')

 
  
// });

const hamb = document.querySelector(".burger-btn");
const popup1 = document.querySelector("#burger__inner");
const body = document.body;




hamb.addEventListener("click", hambHandler);
let closeBurger = document.querySelector('.close__block-burger');

function hambHandler(e) {
  e.preventDefault();
  popup1.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  
  closeBurger.classList.toggle("open");
  let burgerLineFirst = document.querySelector('.burger-btn-line');
 burgerLineFirst.classList.toggle("open");
 let burgerLineCenter = document.querySelector('.burger-btn-line-center')
 burgerLineCenter.classList.toggle("open");
 let burgerLineLast = document.querySelector('.burger-btn-line-last')
 burgerLineLast.classList.toggle("open");
 }


closeBurger.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
  e.preventDefault(); // Предотвращаем дефолтное поведение браузера
  popup1.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  
  closeBurger.classList.toggle("open");
  let burgerLineFirst = document.querySelector('.burger-btn-line');
 burgerLineFirst.classList.toggle("open");
 let burgerLineCenter = document.querySelector('.burger-btn-line-center')
 burgerLineCenter.classList.toggle("open");
 let burgerLineLast = document.querySelector('.burger-btn-line-last')
 burgerLineLast.classList.toggle("open");
  
})












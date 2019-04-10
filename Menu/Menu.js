
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
menu.classList.toggle('menu--open');
//JavaScript Animation: 
// TweenLite.to(".menu", 0, { ease: SlowMo.ease.config(0.7, 0.7, false), x: -500 });
// setTimeout(function(){
//   TweenLite.to(".menu", 0.4, { ease: SlowMo.ease.config(0.7, 0.7, false), x: 0 });
// }, 200)
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => toggleMenu());
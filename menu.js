const menuOpen = document.querySelector('.hamburger-bar');
const containerNav = document.querySelector('.container-nav');
const menuClose = document.querySelector('.close-hamb');
const navList = document.querySelector('.my-nav');
const about = document.querySelectorAll('.mobile-nav-li');

menuOpen.addEventListener('click', () => {
  containerNav.style.display = 'flex';
  navList.style.display = 'none';
});

menuClose.addEventListener('click', () => {
  containerNav.style.display = 'none';
  navList.style.display = 'flex';
});

about.forEach((n) => {
  n.addEventListener('click', () => {
    containerNav.style.display = 'none';
<<<<<<< HEAD
    navList.style.display = 'flex';
=======
>>>>>>> 23fb5b53d41c82f47235c03489f983def44fe166
  });
});

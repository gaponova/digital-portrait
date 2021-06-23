window.onscroll = () => {
  const headerbar = document.querySelector('.header');
  const Y = window.scrollY;

  if (Y > 50) {
    headerbar.classList.add('bar-fixed');
  }else if (Y < 50) {
    headerbar.classList.remove('bar-fixed');
  }
};
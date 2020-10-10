/* eslint-disable no-console */
const btn = document.querySelector('.btn');
const popover = document.querySelector('.popover');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('ok');
  popover.classList.toggle('active');
});

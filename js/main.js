'use strict';
{
  const open = document.getElementById('open');
  const spContent = document.querySelector('.sp-content');

  open.addEventListener('click', () => {
    spContent.classList.add('show');
    open.classList.add('hide');
  });

  // spContent.addEventListener('click', () => {
  //   alert();
  // });
}
/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import * as bootstrap from 'bootstrap';

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (!toggle || !nav) return;

  const iconClosed = toggle.querySelector('[data-icon-closed]');
  const iconOpen = toggle.querySelector('[data-icon-open]');

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('site-header__nav--open');
    toggle.setAttribute('aria-expanded', String(isOpen));

    if (iconClosed && iconOpen) {
      iconClosed.hidden = isOpen;
      iconOpen.hidden = !isOpen;
    }
  });
});

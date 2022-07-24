(function() {
  "use strict";

  /* -------------------------------------------------
  * Add and Remove Active Class in Navbar
  ------------------------------------------------- */
  const currentLocation = location.href,
        menuItem =  document.querySelectorAll('.navbar ul li a'),
        menuLength =  menuItem.length;

  for(var i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].classList = 'active';
    }
  }

  /* -------------------------------------------------
  * Easy selector helper function
  ------------------------------------------------- */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /* -------------------------------------------------
  * Easy event listener function
  ------------------------------------------------- */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
    
    
  /* -------------------------------------------------
  * Mobile nav toggle
  ------------------------------------------------- */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });
  
})();
document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('.header-mobile--btn');
  const mobileCloseBtn = document.querySelector('.mobile-close--btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const overlay = document.querySelector('.mobile-overlay');

  function openMobileMenuHandler() {
    overlay.classList.add('is-open');
    mobileNav.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }

  function closeMobileMenuHandler() {
    overlay.classList.remove('is-open');
    mobileNav.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }

  function stopPropagation(e) {
    e.stopPropagation();
  }

  function scrollToSection(event) {
    if (event.target.classList.contains('mobile-nav--link')) {
      event.preventDefault();

      const targetId = event.target.getAttribute('href');

      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }

      closeMobileMenuHandler();
    }
  }

  burgerBtn.addEventListener('click', openMobileMenuHandler);
  mobileCloseBtn.addEventListener('click', closeMobileMenuHandler);
  overlay.addEventListener('click', closeMobileMenuHandler);
  mobileNav.addEventListener('click', stopPropagation);
  mobileNav.addEventListener('click', scrollToSection);
});

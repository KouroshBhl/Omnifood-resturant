const navBar = document.querySelector('.ul-nav');
const learnMore = document.querySelector('.btn--info');
const section1 = document.getElementById('section1');

// !Implement learn more scroll
learnMore.addEventListener('click', function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: 'smooth' });
});

//! Implement navbar scroll

navBar.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target.classList);
  if (e.target.classList.contains('navigation-menu')) {
    console.log(e.target);
    const href = e.target.getAttribute('href');
    console.log(href);
    document.getElementById(href).scrollIntoView({ behavior: 'smooth' });
  }
});

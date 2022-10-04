const navBar = document.querySelector('.header--nav');
const learnMore = document.querySelector('.btn--info');
const section1 = document.getElementById('section1');

learnMore.addEventListener('click', function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: 'smooth' });
});

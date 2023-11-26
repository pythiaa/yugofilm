function toggleTheme() {
  const body = document.body;

  body.classList.toggle('white-mode');
}
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.sidenav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 50, 
        behavior: 'smooth'
      });
    });
  });
});

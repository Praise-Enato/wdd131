document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
  
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
  
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
  
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
  });
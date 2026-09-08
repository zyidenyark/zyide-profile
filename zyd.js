document.addEventListener('DOMContentLoaded', () => {
  const socialLinks = document.querySelectorAll('.social-links a, .server-banner');

  socialLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log(`Visited: ${link.getAttribute('href')}`);
    });
  });
});
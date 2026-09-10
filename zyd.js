document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.card');

  // 3D Tilt and Mouse Glow Tracking
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    
    // Mouse positions relative to card center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-10 deg to 10 deg range)
    const rotateX = ((y - centerY) / centerY) * -10; 
    const rotateY = ((x - centerX) / centerX) * 10;

    // Apply 3D transform and CSS Variables for glow effect
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });

  card.addEventListener('mouseleave', () => {
    // Smoothly reset back to default position
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });

  // Automatic Image Switcher (Every 5 Seconds)
  const images = document.querySelectorAll('.image-wrapper .zyd-img');
  let currentIndex = 0;

  if (images.length > 1) {
    setInterval(() => {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }, 5000); // 5000ms = 5 seconds
  }
});

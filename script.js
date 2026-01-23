AOS.init({
    duration: 1000, // Durasi animasi
    offset: 100,    // Offset (dalam px) dari trigger point
    delay: 100,     // Delay default untuk semua animasi
    easing: 'ease', // Jenis easing
    once: true,     // Animasi hanya sekali
    mirror: false   // Tidak animasi lagi saat scroll balik
});

const navbarToggle=document.querySelector('.navbar-toggle');
const navbarMenu=document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});
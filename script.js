// Animación de carga
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const content = document.querySelector('.content');

  // Simula un pequeño delay para que se vea la animación
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
      content.style.display = 'block';
    }, 600);
  }, 1200); // Puedes cambiar a 800 si quieres que cargue más rápido
});

// Contador de visitas (simple y local)
let visits = 2400; // Empieza en 2.4K

function updateVisitCounter() {
  // Aumenta entre 1 y 4 visitas cada vez que se carga la página
  visits += Math.floor(Math.random() * 4) + 1;
  document.getElementById('visit-count').textContent = visits.toLocaleString('es-ES');
}

updateVisitCounter();

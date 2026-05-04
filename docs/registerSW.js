if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/ochimono-game/sw.js', { scope: '/ochimono-game/' });
  });
}

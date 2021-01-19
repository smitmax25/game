// Service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(registration => {
      console.log('Registering service worker')
    })
    .catch(e => {
      console.error('Error registering service worker', e)
    })
} else {
  console.log('Service worker not supported by browser')
}

if(navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
    .then(() => {
        console.log('Successfully registered service worker');
    })
    .catch(() => {
        console.log('Failed to register service worker');
    });
}
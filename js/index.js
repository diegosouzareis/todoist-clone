const loading = document.querySelector('.loading-app');

setTimeout(function() {
    loading.classList.add('fade-out');
}, 1000);

setTimeout(function() {
    loading.setAttribute('style','display:none');
}, 1200);
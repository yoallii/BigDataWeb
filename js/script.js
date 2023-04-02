
const button = document.getElementById('coquita-button');
button.addEventListener('click', function() {
    fetch('/boton', { method: 'POST' });
});
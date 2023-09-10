
const button = document.getElementById('coquita-button');
button.addEventListener('click', function() {
    alert('Ten tu coquita');
    fetch('/boton', { method: 'POST' });
});

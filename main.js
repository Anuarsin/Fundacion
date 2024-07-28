document.getElementById('contactButton').addEventListener('click', function() {
    document.getElementById('contactSection').style.display = 'block';
});

document.getElementById('closeContact').addEventListener('click', function() {
    document.getElementById('contactSection').style.display = 'none';
});

document.getElementById('phoneNumber').addEventListener('click', function() {
    var phoneNumber = this.textContent;
    navigator.clipboard.writeText(phoneNumber).then(function() {
        alert("Número de teléfono copiado al portapapeles: " + phoneNumber);
    }, function() {
        alert("Error al copiar el número de teléfono.");
    });
});
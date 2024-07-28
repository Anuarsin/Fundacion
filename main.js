document.getElementById('contactButton').addEventListener('click', function() {
    document.getElementById('contactSection').style.display = 'block';
});

document.getElementById('closeContact').addEventListener('click', function() {
    document.getElementById('contactSection').style.display = 'none';
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        const copyMessage = document.getElementById('copyMessage');
        copyMessage.classList.add('show-message');

        setTimeout(function() {
            copyMessage.classList.remove('show-message');
        }, 2000);
    }).catch(function(error) {
        console.error('Error al copiar:', error);
    });
}

document.getElementById('phoneLink').addEventListener('click', function(event) {
    event.preventDefault();
    const phoneNumber = this.textContent;
    copyToClipboard(phoneNumber);
});

document.getElementById('emailLink').addEventListener('click', function(event) {
    event.preventDefault();
    const emailAddress = this.textContent;
    copyToClipboard(emailAddress);
});
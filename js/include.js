document.addEventListener("DOMContentLoaded", function () {
    includeHTML();
});

function includeHTML() {
    const includes = document.querySelectorAll('[data-include]');
    includes.forEach(el => {
        const file = el.getAttribute('data-include');
        if (file) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    el.innerHTML = data;
                    el.removeAttribute('data-include');
                    includeHTML();
                })
                .catch(error => console.error('Error fetching the HTML file:', error));
        }
    });
}

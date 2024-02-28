document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    var menu = document.querySelector('#menu');
    var commande = document.querySelector('#commande');
    var footer = document.querySelector('footer');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.pageYOffset;

        if (scrollPosition > 100) {
            header.style.backgroundColor = '#3eb83a';
            menu.style.backgroundColor = '#3eb83a';
            commande.style.backgroundColor = '#f9f9f9';
            footer.style.backgroundColor = '#0021a4';
        } else {
            header.style.backgroundColor = 'transparent';
            menu.style.backgroundColor = '#0021a4';
            commande.style.backgroundColor = 'transparent';
            footer.style.backgroundColor = 'transparent';
        }
    });
});
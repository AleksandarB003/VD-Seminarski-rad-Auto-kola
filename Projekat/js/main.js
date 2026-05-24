var trenutniSlajd = 0;
var ukupnoSlajdova = document.querySelectorAll('.slajd').length;
var tajmerSlajdera;

function prikaziSlajd(indeks) {
    var slajdovi = document.querySelectorAll('.slajd');
    var tacke = document.querySelectorAll('.slajder-tacke span');

    slajdovi.forEach(function (s) { s.classList.remove('aktivan'); });
    tacke.forEach(function (t) { t.classList.remove('aktivna'); });

    if (indeks >= ukupnoSlajdova) trenutniSlajd = 0;
    if (indeks < 0) trenutniSlajd = ukupnoSlajdova - 1;

    slajdovi[trenutniSlajd].classList.add('aktivan');
    if (tacke[trenutniSlajd]) tacke[trenutniSlajd].classList.add('aktivna');
}

function sledeciSlajd() {
    trenutniSlajd++;
    prikaziSlajd(trenutniSlajd);
    resetujTajmer();
}

function prethodniSlajd() {
    trenutniSlajd--;
    prikaziSlajd(trenutniSlajd);
    resetujTajmer();
}

function idiNaSlajd(indeks) {
    trenutniSlajd = indeks;
    prikaziSlajd(trenutniSlajd);
    resetujTajmer();
}

function resetujTajmer() {
    clearInterval(tajmerSlajdera);
    tajmerSlajdera = setInterval(function () {
        trenutniSlajd++;
        prikaziSlajd(trenutniSlajd);
    }, 5000);
}

// -------------------------------------------------------
// HAMBURGER MENI
// -------------------------------------------------------

function toggleMeni() {
    var meni = document.getElementById('navLinkovi');
    var hamburger = document.getElementById('hamburger');
    meni.classList.toggle('otvoren');
    hamburger.classList.toggle('otvoren');
}

// -------------------------------------------------------
// PRISTUPAČNOST — tema i font
// -------------------------------------------------------

var trenutniFont = 16;

function promeniTemu() {
    var html = document.documentElement;
    var dugme = document.getElementById('dugme-tema');

    if (html.getAttribute('data-tema') === 'tamna') {
        html.setAttribute('data-tema', 'svetla');
        dugme.textContent = 'Tamna tema';
        localStorage.setItem('tema', 'svetla');
    } else {
        html.setAttribute('data-tema', 'tamna');
        dugme.textContent = 'Svetla tema';
        localStorage.setItem('tema', 'tamna');
    }
}

function povecajFont() {
    if (trenutniFont < 22) {
        trenutniFont += 2;
        document.documentElement.style.fontSize = trenutniFont + 'px';
        localStorage.setItem('fontSize', trenutniFont);
    }
}

function smanjiFont() {
    if (trenutniFont > 12) {
        trenutniFont -= 2;
        document.documentElement.style.fontSize = trenutniFont + 'px';
        localStorage.setItem('fontSize', trenutniFont);
    }
}

function ucitajPodesavanja() {
    var sacuvanaTema = localStorage.getItem('tema');
    var sacuvanFont = localStorage.getItem('fontSize');
    var dugme = document.getElementById('dugme-tema');

    if (sacuvanaTema) {
        document.documentElement.setAttribute('data-tema', sacuvanaTema);
        if (dugme) {
            dugme.textContent = sacuvanaTema === 'tamna' ? 'Svetla tema' : 'Tamna tema';
        }
    }

    if (sacuvanFont) {
        trenutniFont = parseInt(sacuvanFont);
        document.documentElement.style.fontSize = trenutniFont + 'px';
    }
}

// -------------------------------------------------------
// ANIMACIJA ULAZA — scroll
// -------------------------------------------------------

function proveriAnimacije() {
    var elementi = document.querySelectorAll('.animacija-ulaz');
    elementi.forEach(function (el) {
        var pozicija = el.getBoundingClientRect().top;
        var visina = window.innerHeight;
        if (pozicija < visina - 80) {
            el.classList.add('vidljivo');
        }
    });
}

// -------------------------------------------------------
// JQUERY — vizuelni efekti
// -------------------------------------------------------

$(document).ready(function () {
    $('.kartica').hover(
        function () {
            $(this).find('h3').css('color', 'var(--akcenat)');
        },
        function () {
            $(this).find('h3').css('color', 'var(--tekst-glavni)');
        }
    );

    $('.nav-linkovi a').on('click', function () {
        $('#navLinkovi').removeClass('otvoren');
        $('#hamburger').removeClass('otvoren');
    });
});

// -------------------------------------------------------
// POKRETANJE
// -------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    ucitajPodesavanja();
    proveriAnimacije();
    resetujTajmer();
});

window.addEventListener('scroll', proveriAnimacije);
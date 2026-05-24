var trenutniJezik = 'sr';
var prevodData = null;

function ucitajPrevode(callback) {
    var zahtev = new XMLHttpRequest();
    zahtev.open('GET', 'json/prevod.json', true);
    zahtev.onload = function () {
        if (zahtev.status === 200) {
            prevodData = JSON.parse(zahtev.responseText);
            if (callback) callback();
        }
    };
    zahtev.send();
}

function primeniPrevod(jezik) {
    if (!prevodData) return;

    var elementi = document.querySelectorAll('[data-kljuc]');
    elementi.forEach(function (el) {
        var kljuc = el.getAttribute('data-kljuc');
        if (prevodData[jezik] && prevodData[jezik][kljuc]) {
            el.textContent = prevodData[jezik][kljuc];
        }
    });
}

function promeniJezik() {
    var dugme = document.getElementById('dugme-jezik');

    if (trenutniJezik === 'sr') {
        trenutniJezik = 'en';
        dugme.textContent = 'SR';
    } else {
        trenutniJezik = 'sr';
        dugme.textContent = 'EN';
    }

    primeniPrevod(trenutniJezik);
    localStorage.setItem('jezik', trenutniJezik);
}

function ucitajJezik() {
    var sacuvanJezik = localStorage.getItem('jezik');
    if (sacuvanJezik) {
        trenutniJezik = sacuvanJezik;
        var dugme = document.getElementById('dugme-jezik');
        if (dugme) {
            dugme.textContent = trenutniJezik === 'sr' ? 'EN' : 'SR';
        }
    }

    ucitajPrevode(function () {
        primeniPrevod(trenutniJezik);
    });
}

document.addEventListener('DOMContentLoaded', ucitajJezik);
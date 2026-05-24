function validirajPolje(id, regex) {
    var vrednost = document.getElementById(id).value.trim();
    var polje = document.getElementById('polje-' + id);
    var prosledjen = regex.test(vrednost);

    if (prosledjen) {
        polje.classList.remove('nije-validno');
    } else {
        polje.classList.add('nije-validno');
    }

    return prosledjen;
}

function validirajFormu() {
    var prezimeOk = validirajPolje('prezime', /^[a-zA-ZšđčćžŠĐČĆŽ]{2,}$/);
    var imeOk = validirajPolje('ime', /^[a-zA-ZšđčćžŠĐČĆŽ]{2,}$/);
    var emailOk = validirajPolje('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    var telefonOk = validirajPolje('telefon', /^[0-9+\s\-]{6,}$/);
    var porukaOk = validirajPolje('poruka', /^.{10,}$/);

    var kategorija = document.getElementById('kategorija').value;
    var kategorijaPolje = document.getElementById('polje-kategorija');
    if (!kategorija) {
        kategorijaPolje.classList.add('nije-validno');
    } else {
        kategorijaPolje.classList.remove('nije-validno');
    }

    var kategorijaOk = kategorija !== '';

    if (prezimeOk && imeOk && emailOk && telefonOk && porukaOk && kategorijaOk) {
        document.getElementById('uspesna-poruka').style.display = 'block';
        document.getElementById('prezime').value = '';
        document.getElementById('ime').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefon').value = '';
        document.getElementById('kategorija').value = '';
        document.getElementById('poruka').value = '';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var polja = ['prezime', 'ime', 'email', 'telefon', 'poruka'];

    polja.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) {
            el.addEventListener('blur', function () {
                var regexMapa = {
                    prezime: /^[a-zA-ZšđčćžŠĐČĆŽ]{2,}$/,
                    ime: /^[a-zA-ZšđčćžŠĐČĆŽ]{2,}$/,
                    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    telefon: /^[0-9+\s\-]{6,}$/,
                    poruka: /^.{10,}$/
                };
                validirajPolje(id, regexMapa[id]);
            });
        }
    });
});
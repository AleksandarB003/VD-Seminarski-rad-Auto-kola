import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Kategorije() {
    const sekcijeRef = useRef([])

    useEffect(() => {
        window.scrollTo(0, 0)

        const posmatrač = new IntersectionObserver(
            (unosi) => {
                unosi.forEach(unos => {
                    if (unos.isIntersecting) {
                        unos.target.style.opacity = '1'
                        unos.target.style.transform = 'translateY(0)'
                    }
                })
            },
            { threshold: 0.1 }
        )

        sekcijeRef.current.forEach(el => {
            if (el) posmatrač.observe(el)
        })

        return () => posmatrač.disconnect()
    }, [])

    function dodajRef(el) {
        if (el && !sekcijeRef.current.includes(el)) {
            sekcijeRef.current.push(el)
        }
    }

    const stilAnimacija = {
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
    }

    const stilSekcija = {
        padding: '88px 40px',
        maxWidth: '1100px',
        margin: '0 auto'
    }

    const stilDugme = {
        backgroundColor: 'var(--akcenat)',
        color: '#ffffff',
        padding: '12px 32px',
        border: 'none',
        borderRadius: '6px',
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 700,
        fontSize: '1rem',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'all 0.3s ease'
    }

    const stilLinija = {
        width: '60px',
        height: '4px',
        backgroundColor: 'var(--akcenat)',
        margin: '0 0 24px 0',
        borderRadius: '2px'
    }

    const stilInfo = {
        backgroundColor: 'var(--pozadina-kartica)',
        border: '1px solid var(--ivica)',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px'
    }

    const kategorije = [
        {
            id: 'b',
            naziv: 'Kategorija B',
            opis: 'Kategorija B obuhvata upravljanje putničkim automobilima do 3.500 kg. Najtraženija kategorija — uslov za većinu vozačkih dozvola višeg ranga.',
            starost: '17 godina',
            trajanje: '2–3 meseca',
            casovi: 'min. 40',
            tag: 'NAJTRAŽENIJA',
            slika: '/slike/kategorija-b.jpg'
        },
        {
            id: 'c',
            naziv: 'Kategorija C',
            opis: 'Kategorija C omogućava upravljanje teretnim vozilima čija masa prelazi 3.500 kg. Neophodna za profesionalne vozače i transport robe.',
            starost: '21 godina',
            trajanje: '1–2 meseca',
            casovi: 'min. 20',
            tag: null,
            slika: '/slike/kategorija-c.jpg'
        },
        {
            id: 'd',
            naziv: 'Kategorija D',
            opis: 'Kategorija D obuhvata upravljanje autobusima i vozilima za prevoz putnika sa više od osam mesta. Neophodna za profesionalne vozače u javnom prevozu.',
            starost: '24 godine',
            trajanje: '2–3 meseca',
            casovi: 'min. 20',
            tag: null,
            slika: '/slike/kategorija-d.jpg'

        },
        {
            id: 'a',
            naziv: 'Kategorija A',
            opis: 'Kategorija A obuhvata upravljanje motociklima bez ograničenja snage motora. Obuka se odvija na poligonu i u saobraćaju uz pratnju instruktora.',
            starost: '24 godine',
            trajanje: '1–2 meseca',
            casovi: 'min. 20',
            tag: null,
            slika: '/slike/kategorija-a.jpg'
        }
    ]

    return (
        <div style={{ marginTop: '68px' }}>

            <div style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d4e 100%)',
                padding: '80px 40px',
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                    color: '#ffffff',
                    marginBottom: '16px'
                }}>
                    Naše kategorije
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem' }}>
                    Izaberite kategoriju koja vam odgovara
                </p>
            </div>

            {kategorije.map((kat, i) => (
                <section
                    key={kat.id}
                    style={{
                        padding: '88px 40px',
                        backgroundColor: i % 2 !== 0 ? 'var(--pozadina-kartica)' : 'var(--pozadina)'
                    }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '60px',
                        maxWidth: '1100px',
                        margin: '0 auto',
                        alignItems: 'center'
                    }}
                        ref={dodajRef}>

                        {i % 2 === 0 ? (
                            <>
                                <div style={stilAnimacija} ref={dodajRef}>
                                    {kat.tag && (
                                        <div style={{
                                            display: 'inline-block',
                                            backgroundColor: 'var(--akcenat)',
                                            color: '#ffffff',
                                            fontFamily: "'Bebas Neue', cursive",
                                            fontSize: '0.9rem',
                                            letterSpacing: '2px',
                                            padding: '5px 14px',
                                            borderRadius: '4px',
                                            marginBottom: '14px'
                                        }}>
                                            {kat.tag}
                                        </div>
                                    )}
                                    <h2 style={{ fontSize: '2.8rem', marginBottom: '16px' }}>{kat.naziv}</h2>
                                    <div style={stilLinija}></div>
                                    <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>{kat.opis}</p>
                                    <div style={stilInfo}>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--tekst-sivi)' }}>Minimalna starost</p>
                                            <p style={{ fontWeight: 700, color: 'var(--tekst-glavni)' }}>{kat.starost}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--tekst-sivi)' }}>Trajanje obuke</p>
                                            <p style={{ fontWeight: 700, color: 'var(--tekst-glavni)' }}>{kat.trajanje}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--tekst-sivi)' }}>Časovi vožnje</p>
                                            <p style={{ fontWeight: 700, color: 'var(--tekst-glavni)' }}>{kat.casovi}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--tekst-sivi)' }}>Cena kursa</p>
                                            <p style={{ fontWeight: 700, color: 'var(--akcenat)' }}>od XX.XXX RSD</p>
                                        </div>
                                    </div>
                                    <a href="../kontakt.html" style={stilDugme}>Prijavi se</a>
                                </div>
                                <div style={{
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    ...stilAnimacija
                                }} ref={dodajRef}>
                                    <img src={kat.slika} alt={kat.naziv}
                                        style={{ width: '100%', height: '360px', objectFit: 'cover' }} />
                                </div>
                            </>
                        ) : (
                            <>
                                <div style={{
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    ...stilAnimacija
                                }} ref={dodajRef}>
                                    <img src={kat.slika} alt={kat.naziv}
                                        style={{ width: '100%', height: '360px', objectFit: 'cover' }} />
                                </div>
                                <div style={stilAnimacija} ref={dodajRef}>
                                    <h2 style={{ fontSize: '2.8rem', marginBottom: '16px' }}>{kat.naziv}</h2>
                                    <div style={stilLinija}></div>
                                    <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>{kat.opis}</p>
                                    <div style={stilInfo}>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--tekst-sivi)' }}>Minimalna starost</p>
                                            <p style={{ fontWeight: 700, color: 'var(--tekst-glavni)' }}>{kat.starost}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--tekst-sivi)' }}>Trajanje obuke</p>
                                            <p style={{ fontWeight: 700, color: 'var(--tekst-glavni)' }}>{kat.trajanje}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--tekst-sivi)' }}>Časovi vožnje</p>
                                            <p style={{ fontWeight: 700, color: 'var(--tekst-glavni)' }}>{kat.casovi}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--tekst-sivi)' }}>Cena kursa</p>
                                            <p style={{ fontWeight: 700, color: 'var(--akcenat)' }}>od XX.XXX RSD</p>
                                        </div>
                                    </div>
                                    <a href="../kontakt.html" style={stilDugme}>Prijavi se</a>
                                </div>
                            </>
                        )}
                    </div>
                </section>
            ))}

        </div>
    )
}

export default Kategorije
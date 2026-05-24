import React, { useEffect, useRef } from 'react'

function Pocetna() {
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

    const stilHero = {
        position: 'relative',
        width: '100%',
        height: '92vh',
        overflow: 'hidden',
        marginTop: '68px'
    }

    const stilHeroSlika = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }

    const stilOverlay = {
        position: 'absolute',
        inset: 0,
        background: 'rgba(26, 26, 46, 0.6)'
    }

    const stilSadrzaj = {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 20px'
    }

    const stilSekcija = {
        padding: '88px 40px'
    }

    const stilKarticeMreza = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '28px',
        maxWidth: '1100px',
        margin: '0 auto'
    }

    const stilKartica = {
        backgroundColor: 'var(--pozadina-kartica)',
        border: '1px solid var(--ivica)',
        borderRadius: '12px',
        padding: '36px 24px',
        textAlign: 'center',
        boxShadow: '0 4px 24px var(--senka)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    }

    const stilDugme = {
        backgroundColor: 'var(--akcenat)',
        color: '#ffffff',
        padding: '16px 44px',
        border: 'none',
        borderRadius: '6px',
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 700,
        fontSize: '1.1rem',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'all 0.3s ease'
    }

    const kartice = [
        {
            naslov: 'Iskusni instruktori',
            tekst: 'Naši instruktori poseduju višegodišnje iskustvo i licencu za sve kategorije.'
        },
        {
            naslov: 'Moderna vozila',
            tekst: 'Vozni park se redovno obnavlja — sva vozila su novije generacije i odlično opremljena.'
        },
        {
            naslov: 'Visok prolaz',
            tekst: 'Preko 92% naših polaznika položi ispit u prvom pokušaju zahvaljujući kvalitetnoj pripremi.'
        },
        {
            naslov: 'Povoljne cene',
            tekst: 'Transparentne cene bez skrivenih troškova. Mogućnost plaćanja na rate.'
        }
    ]

    return (
        <div>
            <section style={stilHero}>
                {/* TVOJA SLIKA: slike/slajder1.jpg */}
                <img src="../slike/slajder1.jpg" alt="Autoškola Uroš Pualić" style={stilHeroSlika} />
                <div style={stilOverlay}></div>
                <div style={stilSadrzaj}>
                    <h1 style={{
                        fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                        color: '#ffffff',
                        textShadow: '0 2px 16px rgba(0,0,0,0.5)',
                        marginBottom: '20px'
                    }}>
                        Vozačka dozvola — korak do slobode
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                        color: 'rgba(255,255,255,0.85)',
                        maxWidth: '600px',
                        marginBottom: '36px'
                    }}>
                        Profesionalna obuka vozača u Inđiji. Iskusni instruktori, moderna vozila, visok procenat prolaznosti.
                    </p>
                    <a href="../kontakt.html" style={stilDugme}>Prijavi se odmah</a>
                </div>
            </section>

            <section style={stilSekcija} ref={dodajRef}>
                <div style={{ textAlign: 'center', marginBottom: '56px', ...stilAnimacija }} ref={dodajRef}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '12px' }}>
                        Zašto baš mi?
                    </h2>
                    <p>Više od 20 godina iskustva u obuci vozača</p>
                    <div style={{
                        width: '60px', height: '4px',
                        backgroundColor: 'var(--akcenat)',
                        margin: '16px auto 0',
                        borderRadius: '2px'
                    }}></div>
                </div>

                <div style={stilKarticeMreza}>
                    {kartice.map((k, i) => (
                        <div
                            key={i}
                            style={{ ...stilKartica, ...stilAnimacija }}
                            ref={dodajRef}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-6px)'
                                e.currentTarget.style.boxShadow = '0 12px 40px var(--senka)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = '0 4px 24px var(--senka)'
                            }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>{k.naslov}</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{k.tekst}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ ...stilSekcija, backgroundColor: 'var(--pozadina-kartica)' }}>
                <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }} ref={dodajRef}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        marginBottom: '16px',
                        ...stilAnimacija
                    }} ref={dodajRef}>
                        Spreman za vozačku?
                    </h2>
                    <p style={{ marginBottom: '32px', fontSize: '1.05rem' }}>
                        Kontaktiraj nas i zajedno ćemo izabrati termin koji tebi odgovara.
                    </p>
                    <a href="../kontakt.html" style={stilDugme}>Kontaktiraj nas</a>
                </div>
            </section>
        </div>
    )
}

export default Pocetna
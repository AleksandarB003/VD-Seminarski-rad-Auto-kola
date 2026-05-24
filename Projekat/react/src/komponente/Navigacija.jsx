import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navigacija({ tema, promeniTemu }) {
    const [otvoren, setOtvoren] = useState(false)
    const lokacija = useLocation()

    const stilNav = {
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: 'var(--pozadina-nav)',
        padding: '0 40px',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 16px var(--senka)'
    }

    const stilLogo = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none'
    }

    const stilLogoTekst = {
        fontFamily: "'Bebas Neue', cursive",
        fontSize: '1.5rem',
        color: 'var(--tekst-svetli)',
        letterSpacing: '2px'
    }

    const stilLinkovi = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        listStyle: 'none'
    }

    function stilLinka(putanja) {
        const aktivan = lokacija.pathname === putanja
        return {
            color: 'var(--tekst-svetli)',
            fontWeight: 600,
            fontSize: '0.95rem',
            padding: '8px 16px',
            borderRadius: '6px',
            textDecoration: 'none',
            backgroundColor: aktivan ? 'var(--akcenat)' : 'transparent',
            transition: 'all 0.3s ease'
        }
    }

    const stilDugme = {
        background: 'none',
        border: '1px solid rgba(255,255,255,0.4)',
        color: '#fff',
        padding: '6px 14px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '0.85rem'
    }

    return (
        <nav style={stilNav}>
            <Link to="/" style={stilLogo}>
                <img src="/slike/ikonica.png" alt="Logo autoškole" style={{ height: '42px' }} />
                <span style={stilLogoTekst}>UROŠ PUALIĆ</span>
            </Link>

            <ul style={stilLinkovi}>
                <li>
                    <Link to="/" style={stilLinka('/')}>Početna</Link>
                </li>
                <li>
                    <Link to="/kategorije" style={stilLinka('/kategorije')}>Kategorije</Link>
                </li>
                <li>
                    <a href="http://localhost:5500/Onama.html" target="_blank" style={stilLinka('')}>O nama</a>
                </li>
                <li>
                    <a href="http://localhost:5500/kontakt.html" target="_blank" style={stilLinka('')}>Kontakt</a>
                </li>
                <li>
                    <a href="http://localhost:5500/bootstrap.html" target="_blank" style={stilLinka('')}>Cenovnik</a>
                </li>
            </ul>


            <button style={stilDugme} onClick={promeniTemu}>
                {tema === 'svetla' ? 'Tamna tema' : 'Svetla tema'}
            </button>
        </nav>
    )
}

export default Navigacija
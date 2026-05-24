import React from 'react'

function Footer() {
    const stilFooter = {
        backgroundColor: 'var(--pozadina-nav)',
        color: '#c8ccd6',
        padding: '56px 40px 24px'
    }

    const stilMreza = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto 40px'
    }

    const stilNaslov = {
        color: '#ffffff',
        fontFamily: "'Bebas Neue', cursive",
        fontSize: '1.1rem',
        marginBottom: '16px',
        letterSpacing: '1px'
    }

    const stilDno = {
        borderTop: '1px solid #2a2a40',
        paddingTop: '20px',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: '#555e6e',
        maxWidth: '1200px',
        margin: '0 auto'
    }

    return (
        <footer style={stilFooter}>
            <div style={stilMreza}>
                <div>
                    <h4 style={stilNaslov}>Autoškola Uroš Pualić</h4>
                    <p style={{ fontSize: '0.92rem', lineHeight: '1.8' }}>
                        Profesionalna obuka vozača u Inđiji od 2003. godine.
                    </p>
                </div>
                <div>
                    <h4 style={stilNaslov}>Brzi linkovi</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li style={{ marginBottom: '8px' }}>
                            <a href="../index.html" style={{ color: '#c8ccd6', fontSize: '0.92rem' }}>Početna</a>
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <a href="../oNama.html" style={{ color: '#c8ccd6', fontSize: '0.92rem' }}>O nama</a>
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <a href="../usluge.html" style={{ color: '#c8ccd6', fontSize: '0.92rem' }}>Kategorije</a>
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <a href="../kontakt.html" style={{ color: '#c8ccd6', fontSize: '0.92rem' }}>Kontakt</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 style={stilNaslov}>Kontakt</h4>
                    <p style={{ fontSize: '0.92rem', lineHeight: '1.8' }}>Lička 36, Inđija</p>
                    <p style={{ fontSize: '0.92rem', lineHeight: '1.8' }}>+381 XX XXX XXXX</p>
                    <p style={{ fontSize: '0.92rem', lineHeight: '1.8' }}>info@autoskolapualic.rs</p>
                </div>
            </div>
            <div style={stilDno}>
                <p>© 2024 Autoškola Uroš Pualić. Sva prava zadržana.</p>
            </div>
        </footer>
    )
}

export default Footer
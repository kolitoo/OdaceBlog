import React, { useState } from 'react';
import '../styles/Footer.css';

function Footer() {
    const [inputValue, setInputValue] = useState('');

    function handleInput(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue.includes('@')) {
            alert('Mail envoyé avec succès!');
        } else {
            alert('mail invalide, pas d\'@.');
        }
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Entrez votre mail'
                    onChange={handleInput}
                    value={inputValue}
                />
                <button type="submit">Envoyer</button>
            </form>
        </footer>
    );
}

export default Footer;

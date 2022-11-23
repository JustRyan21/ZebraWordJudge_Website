import React from 'react';
import './Header.css';
import DropdownMenu from '../DropdownMenu/DropdownMenu.js';
import {HOMEPAGE_URL} from '../CONSTANTS.js';

function Header(props) {
    return (
        <header className="header">
            <div className="header--div" onClick={(e) => {e.preventDefault(); window.location.href=HOMEPAGE_URL}}>
                <img src={require('../images/Logo.png')} className="logo" alt="logo" />
                <h2 className="header--title">Zebra Word Judge</h2>
            </div>
            <DropdownMenu lexiconData={props.lexiconData} setShowModal={props.setShowModal} currentLexicon={props.currentLexicon} setCurrentLexicon={(newLexicon) => props.setCurrentLexicon(newLexicon)} addLexicon={props.addLexicon} />
      </header>

    );
}

export default Header;
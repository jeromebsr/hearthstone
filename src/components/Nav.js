import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <ul>
                <NavLink to="/cardsback">
                    <li>Dos de carte</li>
                </NavLink>

                <NavLink to="/cardsclassic">
                    <li>Cartes Classiques</li>
                </NavLink>
            </ul>
        </div>
    );
}

export default Nav;
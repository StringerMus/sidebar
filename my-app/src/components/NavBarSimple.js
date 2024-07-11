import React from 'react';
import css from "./css/NavBarSimple.module.css";

function NavBarSimple() {
    return (
        <div className={css.NavBarSimple}>
            <h1>My Gallery</h1>
            <div>
                <span>Hello, guest!</span>
                <span>log in</span>
            </div>
        </div>
    )
}

export default NavBarSimple
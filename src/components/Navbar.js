import React from 'react'

const Navbar = ({togglePopUpUse, togglePopUpMaxcut}) => {
    return (
        <nav>
            <ul>
                <li onClick={togglePopUpMaxcut}>What is maxcut?</li>
                <li onClick={togglePopUpUse}>How to use</li>
            </ul>
        </nav>
    )
}

export default Navbar

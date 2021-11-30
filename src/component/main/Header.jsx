import React from "react";
import { useState } from "react";
import { Icon } from '@iconify/react';


const Header = () => {

    const navLink = document.querySelectorAll('.nav__link');
    function linkAction() {
        /*Active link*/
        navLink.forEach(n => n.classList.remove('active'));
        this.classList.add('active');

        /*Remove menu mobile*/
        setShow('nav__menu ')
        setBtn('bx:bx-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));

    const [show, setShow] = useState('nav__menu ')
    const [btn, setBtn] = useState('bx:bx-menu')
    const menuShow = () => {
        if (btn == 'bx:bx-menu') {
            setShow('nav__menu show')
            setBtn('bx:bxs-chevron-right')
        } else {
            setBtn('bx:bx-menu')
            setShow('nav__menu')
        }

    }


    return (

        <React.Fragment>
            <header className="l-header">
                <nav className="nav bd-grid">
                    <div>
                        <a href="#" className="nav__logo">Matias Parentti</a>
                    </div>

                    <div className={show} id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                            <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                            <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
                            <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                        </ul>
                    </div>

                    <div onClick={menuShow} className="nav__toggle" id="nav-toggle">

                        <Icon icon={btn} />
                    </div>
                </nav>
            </header>
        </React.Fragment>
    )





}


export default Header;
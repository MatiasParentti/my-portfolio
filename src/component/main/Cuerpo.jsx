import React from "react";
import Header from "./Header"
import Sections from "./Sections"
import ScrollReveal from "scrollreveal";
import { Icon } from '@iconify/react';

const Cuerpo = () => {

    /*===== SCROLL REVEAL ANIMATION =====*/
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    /*SCROLL HOME*/
    sr.reveal('.home__title', {});
    sr.reveal('.button', { delay: 200 });
    sr.reveal('.home__img', { delay: 400 });
    sr.reveal('.home__social-icon', { interval: 200 });

    /*SCROLL ABOUT*/
    sr.reveal('.about__img', {});
    sr.reveal('.about__subtitle', { delay: 400 });
    sr.reveal('.about__text', { delay: 400 });

    /*SCROLL SKILLS*/
    sr.reveal('.skills__subtitle', {});
    sr.reveal('.skills__text', {});
    sr.reveal('.skills__data', { interval: 200 });
    sr.reveal('.skills__img', { delay: 600 });

    /*SCROLL WORK*/
    sr.reveal('.work__img', { interval: 200 });

    /*SCROLL CONTACT*/
    sr.reveal('.contact__input', { interval: 200 });

    return (
        <React.Fragment>

            <Header></Header>

            <Sections></Sections>

            <footer class="footer">
                <p class="footer__title"></p>
                <div class="footer__social">
                    <a href="#" className='
            footer__icon'><Icon icon="bx:bxl-facebook" /></a>
                    <a href="https://github.com/MatiasParentti?tab=repositories" target="_blank" className='
            footer__icon'><Icon icon="bx:bxl-github" /></a>
                    <a href="mailto:matiparentti@gmail.com" target="_blank" className='
            footer__icon' ><Icon icon="bx:bx-mail-send" /></a>
                </div>
                <p>&#169; 2021 copyright all right reserved</p>
            </footer>

        </React.Fragment>
    )
}

export default Cuerpo;

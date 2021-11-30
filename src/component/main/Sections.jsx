import React from "react";
import BgAnimation from '../BackgrooundAnimation/BackgroundAnimation';
import Contact from './Contact'
import { Icon } from '@iconify/react';
import Work from "./Work";


const Sections = () => {


    return (

        <React.Fragment>
            <main className="l-main">
                <section className="home bd-grid" id="home">
                    <div className="home__data">
                        <h1 className="home__title">Hi,<br />I'am <span className="home__title-color">Matias</span><br /> Web Dev</h1>

                        <a href="#" className="button">Contact</a>
                    </div>

                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/matias-parentti-7285a9226/" target="_blank" ><Icon icon="bx:bxl-linkedin" className="home__social-icon"/></a>
                        <a href="mailto:matiparentti@gmail.com" target="_blank" className="home__social-icon"><Icon icon="bx:bx-mail-send"/></a>
                        <a href="https://github.com/MatiasParentti?tab=repositories" target="_blank" className="home__social-icon"><Icon icon="bx:bxl-github" /></a>
                    </div>

                    <div className="home__img">
                        <img src="/img/perfilM.png" alt="" />
                    </div>
                </section>


                <section className="about section" id="about">
                    <h2 className="section-title about-title">About</h2>

                    <div className="about__container bd-grid">

                        <div className="about__img">
                            <BgAnimation />

                        </div>
                        <div>
                            <h2 className="about__subtitle">I'am Matias</h2>
                            <p className="about__text">I'm a self-taught Full-Stack Developer who works everyday to become a better programmer. I've been able to learn a lot a different technologies that have given me jobs and let me create personal projects around my things of my interest</p>
                        </div>
                    </div>
                </section>

                <section className="skills section" id="skills">
                    <h2 className="section-title">Skills</h2>
                    <div className="skills__container bd-grid ">
                        <h2 className="skills__subtitle">My Skills</h2>
                        
                       
                    </div>
                    <br/>
                    <div className="skills__container bd-grid">
                        <div>

                            <div className="skills__data">
                                <div className="skills__names">
                                    <Icon icon="bx:bxl-html5" className='skills__icon' />
                                    <span className="skills__name">HTML5</span>
                                </div>
                                <div className="skills__bar skills__html">

                                </div>
                                <div>
                                    <span className="skills__percentage">90%</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div class="skills__names">
                                    <Icon icon="bx:bxl-css3" className='skills__icon' />
                                    <span className="skills__name">CSS3</span>
                                </div>
                                <div className="skills__bar skills__css">

                                </div>
                                <div>
                                    <span className="skills__percentage">85%</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__names">
                                    <Icon icon="bx:bxl-javascript" className='skills__icon' />
                                    <span className="skills__name">JAVASCRIPT</span>
                                </div>
                                <div className="skills__bar skills__js">

                                </div>
                                <div>
                                    <span className="skills__percentage">85%</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__names">
                                    <Icon icon="bx:bxl-react" className='skills__icon' />
                                    <span className="skills__name">REACT</span>
                                </div>
                                <div className="skills__bar skills__react">

                                </div>
                                <div>
                                    <span className="skills__percentage">65%</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="skills__data">
                                <div className="skills__names">
                                    <Icon icon="bx:bxl-firebase" className='skills__icon' />
                                    <span className="skills__name">FIREBASE</span>
                                </div>
                                <div className="skills__bar skills__firebase">

                                </div>
                                <div>
                                    <span className="skills__percentage">75%</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div class="skills__names">

                                    <Icon icon="bx:bxl-git" className='skills__icon' />
                                    <span className="skills__name">GIT</span>
                                </div>
                                <div className="skills__bar skills__git">

                                </div>
                                <div>
                                    <span className="skills__percentage">80%</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__names">
                                    <Icon icon="bx:bxl-nodejs" className='skills__icon' />
                                    <span className="skills__name">NODEJS</span>
                                </div>
                                <div className="skills__bar skills__node">

                                </div>
                                <div>
                                    <span className="skills__percentage">65%</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__names">
                                    <Icon icon="bx:bx-task" className='skills__icon' />
                                    <span className="skills__name">DICIPLINE</span>
                                </div>
                                <div className="skills__bar skills__dicipline">

                                </div>
                                <div>
                                    <span className="skills__percentage">100%</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                <Work></Work>
                <Contact></Contact>
            </main>
        </React.Fragment>
    )





}


export default Sections;
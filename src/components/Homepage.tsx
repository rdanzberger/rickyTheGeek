import React from 'react';
import Slideshow from "./AboutMeSlides"; // Assuming this file is a valid .ts/.tsx or has type declarations

const App: React.FC = () => {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href={"#page-top"}>
                    <span className="d-block d-lg-none">Ricky Danzberger</span>
                    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/profile.jpg" alt="Profile" /></span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href={"#about"}>About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href={"#experience"}>Experience</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href={"#education"}>Education</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href={"#interests"}>Interests</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href={"#gallery"}>Gallery</a></li>
                    </ul>
                </div>
            </nav>

            <div className="container-fluid p-0">

                <section className="resume-section" id="about">
                    <div className="resume-section-content">
                        <h1 className="mb-0">
                            Ricky
                            <span className="text-primary">  Danzberger</span>
                        </h1>
                        <div className="subheading mb-5">
                            (717) 658 - 6010 ·
                            <a href="mailto:rdanzjr@gmail.com">rdanzjr@gmail.com</a>
                        </div>
                        <p className="lead mb-5">Software Engineer, Gamer, Billiard Player, Basement Dweller, and Doggo head pat Provider (DhpP)</p>
                        <div className="social-icons">
                            <a className="social-icon" href="https://www.linkedin.com/in/rickydanzberger"><i className="fab fa-linkedin-in"></i></a>
                            <a className="social-icon" href="https://github.com/rdanzberger"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </section>
                <hr className="m-0" />

                <section className="resume-section" id="experience">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Experience</h2>
                        <div className="d-flex flex-column flex-md-row">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Lead Software Engineer</h3>
                                <div className="subheading mb-3">JPMorgan Chase</div>
                                <p>Code Wrangler</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">February 2023 - Present</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Associate Software Engineer</h3>
                                <div className="subheading mb-3">JPMorgan Chase & Co.</div>
                                <p>Code Slinger</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">March 2021 - February 2023</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Systems Architect</h3>
                                <div className="subheading mb-3">Orrstown Bank</div>
                                <p>Technologist and Knower of the things.</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">June 2009 - March 2021</span></div>
                        </div>
                    </div>
                </section>
                <hr className="m-0" />

                <section className="resume-section" id="education">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Education</h2>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Kutztown University</h3>
                                <div className="subheading mb-3">Master of Science in Computer Science</div>
                                <div>Software Development Focus</div>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">August 2022 - Present</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Purdue University</h3>
                                <div className="subheading mb-3">Bachelor of Science</div>
                                <div>Computer Science - Multiplatform Software Development Track</div>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">August 2015 - April 2018</span></div>
                        </div>
                    </div>
                </section>

                <hr className="m-0" />

                <section className="resume-section" id="interests">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Interests</h2>
                        <p>Apart from being an advocate of all things code, I enjoy the game of billiards. I hold various titles in local league play, and local tournament play.</p>
                        <p>I also enjoy tinkering with home automation routines to help enrich the "home" experience.</p>
                        <p>eV owner - Chevy Volt 2019</p>
                    </div>
                </section>

                <section className="resume-section" id="gallery">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Gallery</h2>
                        <div>
                            <Slideshow />
                        </div>
                    </div>
                </section>
                <hr className="m-0" />

            </div>
        </div>
    );
}

export default App;
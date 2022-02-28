import logo from './logo.svg';
import profilePic from './assets/img/profile.jpg';
import Slideshow from "./AboutMeSlides";

function App() {
  return (
    <div className="App">
           
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Ricky Danzberger</span>
                <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={profilePic} alt="..." /></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#gallery">Gallery</a></li>
                </ul>
            </div>
        </nav>
        
        <div class="container-fluid p-0">
        
            <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        Ricky
                        <span class="text-primary">  Danzberger</span>
                    </h1>
                    <div class="subheading mb-5">
                        (717) 658 - 6010 ·         
                        <a href="mailto:name@email.com">rdanzjr@gmail.com</a>
                    </div>
                    <p class="lead mb-5">Software Engineer, Gamer, Billiard Player, Basement Dweller, and Doggo head pat Provider (DhpP)</p>
                    <iframe class="align-items-center" width="560" height="315" src="https://www.youtube.com/embed/b6Z4mz5SrmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="social-icons">
                        <a class="social-icon" href="https://www.linkedin.com/in/rickydanzberger"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="experience">
                <div class="resume-section-content">
                    <h2 class="mb-5">Experience</h2>
                    <div class="d-flex flex-column flex-md-row">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Assosciate Software Engineer</h3>
                            <div class="subheading mb-3">JPMorgan Chase & Co.</div>
                            <p>Code Slinger</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">March 2021 - Present</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Systems Architect</h3>
                            <div class="subheading mb-3">Orrstown Bank</div>
                            <p>Technologist and Knower of the things.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">June 2009 - March 2021</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Purdue University</h3>
                            <div class="subheading mb-3">Bachelor of Science</div>
                            <div>Computer Science - Multiplatform Software Development Track</div>                    
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2015 - April 2018</span></div>
                    </div>
                </div>
            </section>           

            <hr class="m-0" />
            
            <section class="resume-section" id="interests">
                <div class="resume-section-content">
                    <h2 class="mb-5">Interests</h2>
                    <p>Apart from being an advocate of all things code, I enjoy the game of billiards.  I hold various titles in local league play, and local tournament play. </p>
                    <p>I also enjoy tinkering with whatever home automation routines to help enrich the "home" experience.</p>
                    <p>eV owner - Chevy Volt 2019</p>
                </div>
            </section>
            <section class="resume-section" id="gallery">
                <div className="resume-section-content">
                    <h2 class="mb-5">Gallery</h2>
                    <div>
                        <Slideshow />
                    </div>
                </div>
            </section>
            <hr class="m-0" />
          
    </div>
    </div>
  );
}

export default App;

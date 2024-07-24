import React from 'react';
import './Portfolio.css';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import About from './images/Aboutpic.jpg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';

function Portfolio() {
    return (
        <div>
            {/* <!-- Nav Bar --> */}
            <header class="header">
                <a href="#" class="logo">Portfolio.</a>

                <i class="fa-solid fa-bars" id="menu-icon"></i>

                <nav class="navbar">
                    
                  
                    <a href="#home" class="active">Home</a>
                     <a href="#about">About</a>
                    <a href="#service">Service</a>
                    <a href="#portfolio">portfolio</a>
                    <a href="#contact">Contact</a>
                  
                </nav>
            </header>

            {/* <!-- Home Section --> */}
            <section class="home" id="home">
                <div class="home-content">
                    <h3>Hi, My Name</h3>
                    <h1>Ananthi M</h1>
                    <h3>And I'm a Front-End Developer <span class="multiple-text"></span></h3>
                    <p>Skilled Proficient In HTML, CSS, And JavaScript. Transforms Design Concepts Into
                        Visually Appealing And User-Friendly Interfaces. Collaborates Effectively With Cross-Functional Teams To
                        Ensure Seamless Integration. Stays Updated On Industry Trends To Deliver Modern And Responsive Web
                        Solutions</p>
                    <div class="social-media">
                        <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                        <a href="https://www.github.com/"><FaGithub /></a>
                        <a href="https://www.twitter.com/"><FaTwitter /></a>
                        <a href="https://www.facebook.com/"><FaFacebook /></a>
                    </div>
                    <a target="_blank" href="/Ananthiresume.pdf" class="btn">Download CV</a>
                </div>

                </section>

            {/* <!-- About Section --> */}
            <section class="about" id="about">
                <div class="about-img">
                    <img src={About}alt="About" />
                </div>
                <div class="about-content">
                    <h2 class="heading">About <span>Me</span></h2>
                    <h3>Front-End Developer</h3>
                    <p>Front-End Developer Skilled Proficient In HTML, CSS, And JavaScript. Transforms Design Concepts Into
                        Visually Appealing And User-Friendly Interfaces. Collaborates Effectively With Cross-Functional Teams To
                        Ensure Seamless Integration. Stays Updated On Industry Trends To Deliver Modern And Responsive Web
                        Solutions</p>
                    <a href="" class="btn">Read more</a>
                </div>
            </section>
            {/* <!-- About Section --> */}
            <section class="service" id="service">
                <h2 class="heading">My <span>Services</span></h2>
                <div class="service-container">
                    <div class="service-box">
                        <i class="fa-solid fa-code"></i>
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id possimus, error sequi fugit aliquam
                            doloremque, laudantium hic modi dolorem necessitatibus quibusdam aut omnis? Incidunt, odio. Placeat
                            explicabo asperiores inventore unde.</p>
                        <a href="#" class="btn">Read more</a>
                    </div>
                    <div class="service-box">
                        <i class="fa-solid fas fa-palette"></i>
                        <h3>UI/UX Designing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id possimus, error sequi fugit aliquam
                            doloremque, laudantium hic modi dolorem necessitatibus quibusdam aut omnis? Incidunt, odio. Placeat
                            explicabo asperiores inventore unde.</p>
                        <a href="#" class="btn">Read more</a>
                    </div>
                    <div class="service-box">
                        <i class="fa-solid fab fa-android"></i>
                        <h3>App Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id possimus, error sequi fugit aliquam
                            doloremque, laudantium hic modi dolorem necessitatibus quibusdam aut omnis? Incidunt, odio. Placeat
                            explicabo asperiores inventore unde.</p>
                        <a href="#" class="btn">Read more</a>
                    </div>
                </div>
            </section>

            {/* <!-- Service Section --> */}

            <section class="portfolio" id="portfolio">
                <h2 class="heading">Latest <sapn>Project</sapn>
                </h2>

                <div class="portfolio-container">
                    <div class="portfolio-box">
                        <img src={img1} />
                        <div class="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <i class="fa-solid fa-up-right-from-square"></i>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <img src={img2}/>
                        <div class="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <i class="fa-solid fa-up-right-from-square"></i>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <img src={img3}/>
                        <div class="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <i class="fa-solid fa-up-right-from-square"></i>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <img src={img4}/>
                        <div class="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <i class="fa-solid fa-up-right-from-square"></i>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <img src={img5} />
                        <div class="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <i class="fa-solid fa-up-right-from-square"></i>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <img src={img6} />
                        <div class="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <i class="fa-solid fa-up-right-from-square"></i>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Contact Section --> */}
            <section class="contact" id="contact">
                <h1 class="heading"> Contact <span>Me</span></h1>
                <form action="#">
                    <div class="input-box">
                        <input type="text" placeholder="Enter Your Name" />
                        <input type="email" placeholder="Enter Your email" />
                    </div>
                    <div class="input-box">
                        <input type="number" placeholder="Phone Number" />
                        <input type="text" placeholder="Email Subject" />
                    </div>
                    <textarea name="" id="" cols="20" rows="10" placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Message" class="btn" />
                </form>


            </section>

            {/* <!-- Footer Section --> */}
            <footer class="footer">
                <div class="footer-text">
                    <p>Copyright &copy; 2024 by @Ananthi | All Rights Reserved.</p>
                </div>
                <div class="footer-iconTop">
                    <a href="#home"><i class="fa-solid fa-angle-up"></i></a>
                </div>
            </footer>




            {/* <!-- scroll reveal -->
    <script src="https://unpkg.com/scrollreveal"></script>

    <!-- typed js -->
    <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>


    <!-- Script -->
    <script src="assets/script.js"></script> */}
        </div>


    );
}

export default Portfolio;



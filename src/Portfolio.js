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
import ananthiresume from './pdf/ANANTHI_M.pdf';

function Portfolio() {
    return (
        <div>
            {/* <!-- Nav Bar --> */}
            <header class="header">
                <a href="#" class="logo">Portfolio</a>

                <i class="fa-solid fa-bars" id="menu-icon"></i>

                <nav class="navbar">
                    
                  
                    <a href="#home" class="active">Home</a>
                     <a href="#about">About</a>
                    <a href="#service">Service</a>
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
                    <a target="_self" href={ananthiresume} class="btn">Download CV</a>
                </div>

                </section>

            {/* <!-- About Section --> */}
            <section class="about" id="about">
                <div class="about-img">
                    <img src={About} alt="About" />
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
                        <p>Front-End Development: 
                            Creating responsive  and  interactive  websites using HTML, CSS, JavaScript, and frameworks like React.js.<br/>
Back-End Development: Building robust and scalable server-side applications using Node.js, Express.js, and database management with MongoDB or SQL.</p>
                        <a href="#" class="btn">Read more</a>
                    </div>
                    <div class="service-box">
                        <i class="fa-solid fas fa-palette"></i>
                        <h3>UI/UX Designing</h3>
                        <p>User Research: Detail your approach to understanding user needs and behaviors through research methods like surveys, interviews, and usability testing.<br/>
Wireframing & Prototyping: Explain how you create wireframes and prototypes to visualize the user interface and interactions before development.</p>
                        <a href="#" class="btn">Read more</a>
                    </div>
                    <div class="service-box">
                        <i class="fa-solid fab fa-android"></i>
                        <h3>App Development</h3>
                        <p>Custom App Development: Describe your ability to build custom applications tailored to specific client needs, including front-end and back-end development.<br/>
                        Cross-Platform Development: If you offer cross-platform development,emphasize how this can help clients reach a broader audience with a single codebase.</p>
                        <a href="#" class="btn">Read more</a>
                    </div>
                </div>
            </section>

            
            {/* <!-- Contact Section --> */}
            <section class="contact" id="contact">
                <h1 class="heading"> Contact <span>Me</span></h1>
                <div className='contact1'>
                <h2>PHONE : 9566346707</h2>
                <h2>EMAIL : ananthimeyyappan1502@gmail.com</h2>
                <h2>ADDRESS : 3/132,East street,Gurusamipalayam,Namakkal-637403</h2>
                </div>

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


 </div>


    );
}

export default Portfolio;



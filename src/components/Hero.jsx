import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <span className="greeting">Hi, my name is</span>
                <h1 className="name">Rohit Porwal.</h1>
                <h2 className="title">I build things for the web.</h2>
                <p className="description">
                    I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                    Currently, I'm focused on building accessible, human-centered products.
                </p>
                <div className="hero-btns">
                    <a href="#projects" className="btn btn-filled">Check out my work!</a>
                    <a href="#contact" className="btn">Get In Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

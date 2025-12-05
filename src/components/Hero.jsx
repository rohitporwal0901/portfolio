import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <motion.span
                    className="greeting"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Hi, my name is
                </motion.span>

                <motion.h1
                    className="name"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Rohit Porwal.
                </motion.h1>

                <motion.h2
                    className="title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    I build things for the web.
                </motion.h2>

                <motion.p
                    className="description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                    Currently, I'm focused on building accessible, human-centered products.
                </motion.p>

                <motion.div
                    className="hero-btns"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a href="#projects" className="btn btn-filled">Check out my work!</a>
                    <a href="#contact" className="btn">Get In Touch</a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

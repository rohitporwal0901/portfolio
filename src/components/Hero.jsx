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

                <motion.div
                    className="experience-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    3+ Years Experience
                </motion.div>

                <motion.h2
                    className="title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Senior Angular & Ionic Developer.
                </motion.h2>

                <motion.p
                    className="description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    I specialize in building high-performance, scalable web and mobile applications using Angular and Ionic.
                    With 3+ years of experience, I transform complex business requirements into elegant, user-friendly solutions.
                </motion.p>

                <motion.div
                    className="hero-btns"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a href="#projects" className="btn btn-filled">Check out my work!</a>
                    <a href="/Rohit_Porwal_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download Resume
                    </a>
                    <a href="#contact" className="btn">Get In Touch</a>
                </motion.div>

                {/* Tech Stack Badges */}
                {/* <motion.div
                    className="hero-tech-badges"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <span className="tech-badge-label">Tech Stack:</span>
                    <div className="tech-badges-container">
                        <motion.div
                            className="tech-badge"
                            whileHover={{ scale: 1.1, y: -3 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" />
                            <span>Angular</span>
                        </motion.div>
                        <motion.div
                            className="tech-badge"
                            whileHover={{ scale: 1.1, y: -3 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" alt="Ionic" />
                            <span>Ionic</span>
                        </motion.div>
                        <motion.div
                            className="tech-badge"
                            whileHover={{ scale: 1.1, y: -3 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                            <span>TypeScript</span>
                        </motion.div>
                        <motion.div
                            className="tech-badge"
                            whileHover={{ scale: 1.1, y: -3 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
                            <span>Firebase</span>
                        </motion.div>
                        <motion.div
                            className="tech-badge"
                            whileHover={{ scale: 1.1, y: -3 }}
                            transition={{ duration: 0.2 }}
                        >
                            <svg viewBox="0 0 24 24" fill="#B7178C" width="32" height="32">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.896 5.5l3.5 3.5-3.5 3.5-.604-.604L13.396 9 10.5 6.104l.604-.604zM7.5 18.5l-3.5-3.5 3.5-3.5.604.604L5.208 15l2.896 2.896-.604.604z" />
                            </svg>
                            <span>RxJS</span>
                        </motion.div>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Hero;

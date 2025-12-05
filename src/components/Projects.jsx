import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "PartyTambola",
            tech: ["Angular", "Firebase", "Adobe XD"],
            description: "Developed design mock-ups and integrated Firebase backend with Angular. Created user interface components for both web and mobile, ensuring functionality through manual testing."
        },
        {
            title: "MangoSteen",
            tech: ["Angular", "Firebase"],
            description: "Worked closely with the team to understand user requirements. Developed responsive UI elements using Angular for a seamless experience across devices. Connected front-end with Firebase backend for data management."
        },
        {
            title: "Bhautiki Plus",
            tech: ["Angular", "HTML", "CSS"],
            description: "Translated design mockups into functional code. Built UI components in Angular for web and mobile. Implemented client-side validations for registration, login, and logout forms."
        },
        {
            title: "GOWOW",
            tech: ["Angular", "Firebase"],
            description: "Developed responsive UI elements using Angular. Connected front-end with Firebase backend to enable data aggregation and management. Thoroughly tested the application for desired functionality."
        }
    ];

    return (
        <section id="projects" className="projects">
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;

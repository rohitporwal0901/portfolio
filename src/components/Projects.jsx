import React from 'react';

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
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

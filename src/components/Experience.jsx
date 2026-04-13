import React from 'react';
import { motion } from 'framer-motion';
import quadralystLogo from '../assets/experience/quadralyst.svg';
import steppingStoneLogo from '../assets/experience/stepping-stone.png';

const Experience = () => {
    const experiences = [
        {
            role: "Software Developer",
            company: "Quadralyst Pvt. Ltd.",
            logo: quadralystLogo,
            duration: "April 2023 – Present (3+ Years)",
            location: "Indore, India",
            type: "Full-time",
            description: [
                "Architected and delivered 10+ enterprise-grade web and mobile applications using Angular 15+ and Ionic 7+, serving 50,000+ active users.",
                "Led end-to-end development of cross-platform mobile apps with 4.5+ star ratings on App Store and Play Store, achieving 95%+ crash-free sessions.",
                "Implemented advanced state management solutions using RxJS and NgRx, improving application performance by 40%.",
                "Mentored junior developers, conducted code reviews, and established best practices for TypeScript, Angular, and Firebase integrations.",
                "Optimized app bundle sizes by 35% through lazy loading, tree shaking, and efficient module architecture."
            ],
            technologies: ["Angular", "Ionic", "TypeScript", "Firebase", "RxJS", "NgRx", "Capacitor"]
        },
        {
            role: "Software Developer Intern",
            company: "The Stepping Stone (Training Institute)",
            logo: steppingStoneLogo,
            duration: "Aug 2022 – Feb 2023 (6 Months)",
            location: "Indore, India",
            type: "Internship",
            description: [
                "Developed responsive web applications using Angular 14, implementing component-based architecture and reactive forms.",
                "Built reusable UI components with Bootstrap and Angular Material, reducing development time by 25%.",
                "Collaborated with senior developers to implement REST API integrations and handle asynchronous operations with Observables.",
                "Participated in agile ceremonies and gained hands-on experience with Git version control and CI/CD workflows."
            ],
            technologies: ["Angular", "TypeScript", "JavaScript", "HTML/CSS", "Bootstrap", "Git"]
        }
    ];

    return (
        <section id="experience" className="experience">
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2>Professional Experience</h2>
                <div className="experience-grid">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="experience-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -8 }}
                        >
                            {/* Header */}
                            <div className="exp-header">
                                <div className="exp-title-section">
                                    <h3>{exp.role}</h3>
                                    <div className="exp-company">
                                        <div className="company-logo">
                                            <img src={exp.logo} alt={exp.company} />
                                        </div>
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                <div className="exp-type-badge">{exp.type}</div>
                            </div>

                            {/* Meta Info */}
                            <div className="exp-meta">
                                <div className="exp-meta-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    <span>{exp.duration}</span>
                                </div>
                                <div className="exp-meta-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>{exp.location}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <ul className="exp-description">
                                {exp.description.map((item, i) => (
                                    <li key={i}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Technologies */}
                            <div className="exp-tech">
                                {exp.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;

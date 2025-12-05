import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: "Junior Developer",
            company: "Quadralyst Pvt. Ltd.",
            duration: "April 2023 – Present",
            description: [
                "Integral role in designing and developing high-performance web applications using Angular and Ionic.",
                "Collaborated with cross-functional teams to create innovative software solutions.",
                "Optimized performance, scalability, and user experience.",
                "Gained hands-on experience with the latest technologies and contributed to problem-solving."
            ]
        },
        {
            role: "Angular Developer Intern",
            company: "The Stepping Stone (Training Institute)",
            duration: "Aug 2022 – Feb 2023",
            description: [
                "Honed development skills through practical, real-world project involvement.",
                "Contributed to the successful implementation of various features.",
                "Gained exposure to the entire development lifecycle, from concept to deployment.",
                "Enhanced technical foundation in software engineering."
            ]
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
                <h2>Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{exp.role}</h3>
                                    <span className="company">{exp.company}</span>
                                    <span className="duration">{exp.duration}</span>
                                </div>
                                <ul className="timeline-desc">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;

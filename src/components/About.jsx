import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        { category: "Frontend", items: ["Angular 14+", "Ionic", "TypeScript", "JavaScript", "HTML/CSS/SCSS", "Bootstrap", "Angular Material"] },
        { category: "Backend", items: ["Node.js", "Express", "MVC Architecture"] },
        { category: "Database", items: ["MongoDB", "Firebase", "Mongoose"] },
        { category: "Tools", items: ["Git/GitHub", "VS Code", "Postman", "JWT"] }
    ];

    return (
        <section id="about" className="about">
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2>About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a results-driven Angular and Ionic developer with over 2.5 years of experience in building high-quality web and mobile applications.
                            I have a strong foundation in creating responsive UI/UX and scalable backend solutions.
                        </p>
                        <p>
                            My journey involves working with cross-functional teams to design and develop innovative software solutions, optimizing performance,
                            and ensuring code quality. I am a strong problem-solver and collaborative team player, committed to writing clean, maintainable code.
                        </p>
                    </div>

                    <div className="skills-section">
                        <h3>Technical Skills</h3>
                        <div className="skills-grid">
                            {skills.map((skillGroup, index) => (
                                <div key={index} className="skill-card">
                                    <h4>{skillGroup.category}</h4>
                                    <div className="skill-tags">
                                        {skillGroup.items.map((item, i) => (
                                            <span key={i} className="skill-tag">{item}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;

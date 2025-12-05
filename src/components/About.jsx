import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const skillsData = [
        { name: "Angular", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "Ionic", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
        { name: "TypeScript", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML5", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "SCSS", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
        { name: "Bootstrap", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Material UI", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
        { name: "Node.js", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Firebase", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Git", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Postman", category: "Tools", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    ];

    const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

    const filteredSkills = activeFilter === 'All'
        ? skillsData
        : skillsData.filter(skill => skill.category === activeFilter);

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
                <div className="about-content-full">
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

                    <div className="skills-section-new">
                        <h3>Skills & Technologies</h3>

                        {/* Filter Tabs */}
                        <div className="skills-filter">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Skills Grid */}
                        <motion.div
                            className="skills-grid-new"
                            layout
                        >
                            {filteredSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-item"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    whileHover={{ y: -8, scale: 1.05 }}
                                >
                                    <div className="skill-icon-wrapper">
                                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                    </div>
                                    <span className="skill-name">{skill.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;

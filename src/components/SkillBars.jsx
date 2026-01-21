import React from 'react';
import { motion } from 'framer-motion';

const SkillBars = () => {
    const skills = [
        { name: 'Angular', level: 95, color: '#DD0031', category: 'Frontend' },
        { name: 'Ionic', level: 93, color: '#3880FF', category: 'Mobile' },
        { name: 'TypeScript', level: 92, color: '#3178C6', category: 'Language' },
        { name: 'JavaScript', level: 90, color: '#F7DF1E', category: 'Language' },
        { name: 'RxJS', level: 88, color: '#B7178C', category: 'State Management' },
        { name: 'NgRx', level: 85, color: '#BA2BD2', category: 'State Management' },
        { name: 'Firebase', level: 90, color: '#FFCA28', category: 'Backend' },
        { name: 'HTML/CSS', level: 95, color: '#E34F26', category: 'Frontend' },
        { name: 'SCSS/Sass', level: 88, color: '#CC6699', category: 'Styling' },
        { name: 'Capacitor', level: 87, color: '#119EFF', category: 'Mobile' },
        { name: 'Git', level: 90, color: '#F05032', category: 'Tools' },
        { name: 'REST APIs', level: 92, color: '#61DAFB', category: 'Integration' },
    ];

    return (
        <section id="skill-bars" className="skill-bars-section">
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2>Technical Proficiency</h2>

                <div className="skill-bars-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-bar-item"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <div className="skill-bar-header">
                                <div className="skill-bar-info">
                                    <span className="skill-bar-name">{skill.name}</span>
                                    <span className="skill-bar-category">{skill.category}</span>
                                </div>
                                <span className="skill-bar-percentage">{skill.level}%</span>
                            </div>

                            <div className="skill-bar-container">
                                <motion.div
                                    className="skill-bar-fill"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.2,
                                        delay: index * 0.05,
                                        ease: "easeOut"
                                    }}
                                    style={{
                                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                                    }}
                                >
                                    <motion.div
                                        className="skill-bar-shine"
                                        animate={{
                                            x: ['-100%', '200%'],
                                        }}
                                        transition={{
                                            duration: 2,
                                            delay: index * 0.05 + 1,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Summary Stats */}
                <motion.div
                    className="skill-summary"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <div className="skill-summary-item">
                        <div className="skill-summary-number">12+</div>
                        <div className="skill-summary-label">Technologies</div>
                    </div>
                    <div className="skill-summary-item">
                        <div className="skill-summary-number">3+</div>
                        <div className="skill-summary-label">Years Experience</div>
                    </div>
                    <div className="skill-summary-item">
                        <div className="skill-summary-number">10+</div>
                        <div className="skill-summary-label">Projects Delivered</div>
                    </div>
                    <div className="skill-summary-item">
                        <div className="skill-summary-number">50K+</div>
                        <div className="skill-summary-label">Active Users</div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SkillBars;

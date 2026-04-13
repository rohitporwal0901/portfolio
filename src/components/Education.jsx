import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            degree: "B.sc (Bachelor of Science)",
            institution: "Government College, Nagda",
            score: "69%",
            year: "2019-2022",
            icon: "🎓"
        },
        // {
        //     degree: "HSC",
        //     institution: "Saraswati shishu Vidhya Mandir",
        //     score: "68%",
        //     year: "2016-2017",
        //     icon: "📚"
        // },
        // {
        //     degree: "SSC",
        //     institution: "Saraswati shishu Vidhya Mandir",
        //     score: "78%",
        //     year: "2014-2015",
        //     icon: "📖"
        // }
    ];

    return (
        <section id="education" className="education">
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2>Education</h2>
                <div className="education-grid">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="education-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="edu-icon">{edu.icon}</div>
                            <div className="edu-content">
                                <h3>{edu.degree}</h3>
                                <p className="edu-institution">{edu.institution}</p>
                                <div className="edu-details">
                                    <div className="edu-score">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span>{edu.score}</span>
                                    </div>
                                    <div className="edu-year">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                        <span>{edu.year}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Education;

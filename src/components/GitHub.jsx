import React from 'react';
import { motion } from 'framer-motion';

const GitHub = () => {
    // Replace with your actual GitHub username
    const githubUsername = 'rohitporwal090';

    return (
        <section id="github" className="github-section">
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2>GitHub Activity</h2>

                <div className="github-content">
                    {/* GitHub Stats Cards */}
                    <div className="github-stats-grid">
                        <motion.div
                            className="github-stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <img
                                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical&hide_border=true&bg_color=0B1120&title_color=8B5CF6&icon_color=06B6D4&text_color=F8FAFC&ring_color=8B5CF6`}
                                alt="GitHub Stats"
                                loading="lazy"
                            />
                        </motion.div>

                        <motion.div
                            className="github-stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -8 }}
                        >
                            <img
                                src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical&hide_border=true&background=0B1120&ring=8B5CF6&fire=06B6D4&currStreakLabel=8B5CF6&sideLabels=F8FAFC&currStreakNum=F8FAFC&sideNums=F8FAFC&dates=94A3B8`}
                                alt="GitHub Streak"
                                loading="lazy"
                            />
                        </motion.div>

                        <motion.div
                            className="github-stat-card github-stat-card-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ y: -8 }}
                        >
                            <img
                                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=radical&hide_border=true&bg_color=0B1120&title_color=8B5CF6&text_color=F8FAFC&langs_count=8`}
                                alt="Top Languages"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>

                    {/* Contribution Graph */}
                    <motion.div
                        className="github-contribution-graph"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3>Contribution Graph</h3>
                        <div className="graph-container">
                            <img
                                src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=react-dark&hide_border=true&bg_color=0B1120&color=8B5CF6&line=06B6D4&point=F8FAFC&area=true&area_color=8B5CF6`}
                                alt="Contribution Graph"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                    {/* GitHub Link */}
                    <motion.div
                        className="github-cta"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <a
                            href={`https://github.com/${githubUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-filled"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View GitHub Profile
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default GitHub;

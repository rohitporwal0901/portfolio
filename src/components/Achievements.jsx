import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
    const stats = [
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            ),
            number: "10+",
            label: "Projects Delivered",
            color: "#8B5CF6",
            description: "Enterprise-grade applications"
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            number: "50K+",
            label: "Active Users",
            color: "#06B6D4",
            description: "Across all platforms"
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ),
            number: "4.5★",
            label: "App Ratings",
            color: "#EC4899",
            description: "Play Store & App Store"
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            ),
            number: "3+",
            label: "Years Experience",
            color: "#10B981",
            description: "Professional development"
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            ),
            number: "2000+",
            label: "Commits",
            color: "#F59E0B",
            description: "Code contributions"
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
            number: "95%+",
            label: "Crash-Free Sessions",
            color: "#8B5CF6",
            description: "App stability"
        }
    ];

    const achievements = [
        {
            title: "Mobile Development Expert",
            description: "Built and deployed 6+ cross-platform mobile applications using Ionic & Capacitor",
            icon: "📱"
        },
        {
            title: "Enterprise Solutions",
            description: "Architected scalable web applications serving 50,000+ concurrent users",
            icon: "🏢"
        },
        {
            title: "Real-time Features",
            description: "Implemented live data sync, notifications, and real-time collaboration features",
            icon: "⚡"
        },
        {
            title: "Performance Optimization",
            description: "Reduced app bundle sizes by 35% and improved load times by 40%",
            icon: "🚀"
        },
        {
            title: "Code Quality Champion",
            description: "Mentored junior developers and established coding best practices across teams",
            icon: "👨‍🏫"
        },
        {
            title: "Production Excellence",
            description: "Maintained 99.9% uptime across all deployed applications",
            icon: "✨"
        }
    ];

    const techImpact = [
        { tech: "Angular", projects: "10+", users: "50K+", color: "#DD0031" },
        { tech: "Ionic", projects: "6+", users: "30K+", color: "#3880FF" },
        { tech: "Firebase", projects: "8+", users: "40K+", color: "#FFCA28" },
        { tech: "TypeScript", projects: "10+", users: "50K+", color: "#3178C6" }
    ];

    return (
        <section id="achievements" className="achievements-section">
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2>Career Achievements & Impact</h2>

                {/* Stats Grid */}
                <div className="achievements-stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="achievement-stat-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.03 }}
                        >
                            <div className="stat-icon" style={{ color: stat.color }}>
                                {stat.icon}
                            </div>
                            <div className="stat-content">
                                <div className="stat-number" style={{ color: stat.color }}>
                                    {stat.number}
                                </div>
                                <div className="stat-label">{stat.label}</div>
                                <div className="stat-description">{stat.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Key Achievements */}
                <motion.div
                    className="key-achievements"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h3>Key Achievements</h3>
                    <div className="achievements-grid">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="achievement-card"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ x: 8 }}
                            >
                                <div className="achievement-icon">{achievement.icon}</div>
                                <div className="achievement-content">
                                    <h4>{achievement.title}</h4>
                                    <p>{achievement.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technology Impact */}
                {/* <motion.div
                    className="tech-impact-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3>Technology Impact</h3>
                    <div className="tech-impact-grid">
                        {techImpact.map((item, index) => (
                            <motion.div
                                key={index}
                                className="tech-impact-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="tech-impact-header">
                                    <span className="tech-name" style={{ color: item.color }}>{item.tech}</span>
                                </div>
                                <div className="tech-impact-stats">
                                    <div className="tech-impact-stat">
                                        <span className="impact-number">{item.projects}</span>
                                        <span className="impact-label">Projects</span>
                                    </div>
                                    <div className="tech-impact-stat">
                                        <span className="impact-number">{item.users}</span>
                                        <span className="impact-label">Users Served</span>
                                    </div>
                                </div>
                                <div
                                    className="tech-impact-bar"
                                    style={{ background: `linear-gradient(90deg, ${item.color}33, ${item.color}88)` }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div> */}
            </motion.div>
        </section>
    );
};

export default Achievements;

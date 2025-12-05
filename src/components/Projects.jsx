import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: "1",
            title: "PartyTambola",
            description: "Mobile app to organize and play Tambola/Housie games with up to 1000 players, for groups, businesses and events, with engagement & rewards",
            longDescription: "PartyTambola brings the classic Tambola / Housie game into the digital age. Whether you're organizing for social groups, small businesses, HR teams, influencers, or family & friends, you can setup a game in just minutes, play with up to 1,000 participants in real time, customize game rules, reward participants, engage followers, and even monetize your group with paid entry or sponsored rewards. It's designed to be easy to use, highly customizable, social-friendly, and scalable.",
            technologies: ["Angular", "Android Studio", "XCode", "Ionic", "Firebase", "Capacitor", "RxJS"],
            features: [
                "Real-time gameplay with up to 1,000 players",
                "Customizable game setup (rules, rewards, branding)",
                "Reward & prize integration",
                "Supports monetization for organizers (paid entry / sponsorships)",
                "Engagement tools for social groups, influencers, businesses",
                "User-friendly interface, mobile app based"
            ],
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.quadralyst.partytambola",
            appStoreUrl: "https://apps.apple.com/us/app/party-tambola-housie-game/id1498917095?ls=1",
            status: "completed",
            category: ["mobile"],
            highlights: [
                "Supports up to 1,000 players in one game",
                "Ideal for group engagement & events",
                "Monetization options for organizers"
            ]
        },
        // {
        //     id: "2",
        //     title: "Durud",
        //     description: "Smart warehouse management system designed to streamline book distribution for schools.",
        //     longDescription: "A specialized warehouse management system that automates and optimizes the storage, tracking, and delivery of educational books to schools. It enables real-time inventory visibility, efficient order processing, and accurate dispatching to ensure schools receive the right books on time, every time.",
        //     technologies: ["Angular", "Angular Material", "TypeScript", "Firebase", "AnalogJS", "RxJS"],
        //     features: [
        //         "Real-time inventory tracking by title, edition, language, and grade level",
        //         "Order management with school profiles and scheduled deliveries",
        //         "Batch picking and packing optimizations",
        //         "Route planning and logistics integration",
        //         "Barcode / RFID enabled scanning",
        //         "Analytics and reporting dashboards"
        //     ],
        //     adminUrl: "https://durud-e7449.web.app/",
        //     status: "completed",
        //     category: ["web"],
        //     highlights: [
        //         "Accuracy > 99% in order fulfilment",
        //         "Delivery times reduced by 30%",
        //         "Support for over 100 schools"
        //     ]
        // },
        {
            id: "3",
            title: "Bhautiki Plus",
            description: "Premier EdTech platform offering IIT-JEE, NEET & Foundation courses through disciplined, tech-enabled mentorship.",
            longDescription: "Bhautiki Plus is a leading education technology company dedicated to shaping future engineers and doctors. It provides structured courses from foundation (classes VIII–X) to IIT-JEE and NEET, with a strong emphasis on discipline, innovation, and mentorship. The ecosystem includes proctored learning devices, 360° monitoring, interactive & live classes, video solutions, frequent assessments, and personalized support.",
            technologies: ["Angular", "Android Studio", "Capacitor", "Firebase", "Ionic", "TypeScript", "Angular Material"],
            features: [
                "No-Phone Zone learning environment with proctored devices",
                "360° mentorship including parent/student/faculty feedback loops",
                "Daily revision quizzes and homework tracking",
                "Video solutions and recorded class backups",
                "Comprehensive Mock Exams & frequent assessments"
            ],
            adminUrl: "https://bhautiki-dev.firebaseapp.com/",
            userUrl: "https://student-app-3b632.web.app/",
            playStoreUrl: "https://play.google.com/store/apps/details?id=in.bhautikiplus.studentapp",
            appStoreUrl: "https://apps.apple.com/us/app/bhautiki/id1498917095?ls=1",
            status: "completed",
            category: ["web", "mobile"],
            highlights: [
                "Flexible fee refund option based on attendance",
                "Dedicated mentor for every student",
                "Multiple success stories with high NEET/IIT-JEE scores"
            ]
        },
        {
            id: "4",
            title: "Quantum Mosaic",
            description: "AI-powered platform to streamline and automate investment deal execution.",
            longDescription: "Quantum Mosaic (QM) is a modern platform built for Limited Partners (LPs) and empowering General Partners (GPs). Its mission is to reduce friction between strategic investment planning and operational execution. Leveraging real-time data, predictive analytics, and automation, QM helps investment firms evaluate more deals in less time, improve decision transparency, and optimize workflows to get higher ROI.",
            technologies: ["Angular", "Firebase", "RxJS", "TypeScript", "Angular Material", "GenAI"],
            features: [
                "Deal evaluation acceleration (evaluate twice as many deals in half the time)",
                "Predictive & tailored insights for decision-making",
                "Workflow digitization to reduce manual effort",
                "Transparency and alignment between LPs and GPs",
                "Composable & coordinated operations"
            ],
            adminUrl: "https://qm-demo.web.app/",
            userUrl: "https://qm-demo.web.app/",
            status: "running",
            category: ["web"],
            highlights: [
                "AI-driven platform built for LPs & empowering GPs",
                "Helps evaluate more deals faster",
                "Bridges gap between strategy and execution"
            ]
        },
        // {
        //     id: "5",
        //     title: "Qasper",
        //     description: "AI-powered survey and reporting platform for structured data collection and insights.",
        //     longDescription: "Qasper is a smart survey and reporting solution that enables users to design and schedule surveys with customizable metrics and inputs. Data can be collected on a daily, monthly, quarterly, or yearly basis. The platform automatically generates structured reports in PDF and Excel formats, enhanced with GenAI-driven insights and recommendations for better decision-making.",
        //     technologies: ["Angular", "AnalogJS", "Firebase", "RxJS", "NgRx", "TypeScript", "Angular Material", "GenAI"],
        //     features: [
        //         "Customizable survey forms with metrics and inputs",
        //         "Flexible scheduling (daily, monthly, quarterly, yearly)",
        //         "Automated PDF and Excel report generation",
        //         "AI-powered report insights and recommendations",
        //         "Data visualization and trend analysis"
        //     ],
        //     adminUrl: "https://qasper-live.web.app/",
        //     userUrl: "https://qasper-live.web.app/",
        //     status: "completed",
        //     category: ["web"],
        //     highlights: [
        //         "Survey scheduling with recurring intervals",
        //         "Exportable PDF and Excel reports",
        //         "AI-driven insights for decision-making"
        //     ]
        // },
        {
            id: "6",
            title: "Active Avenue",
            description: "Educational platform for physics learning with interactive simulations",
            longDescription: "An educational web application providing interactive physics simulations and learning materials for students.",
            technologies: ["Angular", "AnalogJS", "Firebase", "RxJS", "NgRx", "TypeScript", "Angular Material"],
            features: [
                "Interactive simulations",
                "Progress tracking",
                "Quiz system",
                "Responsive design"
            ],
            adminUrl: "https://active-avenue-dev.web.app/",
            userUrl: "https://lyvvib-dev.web.app/",
            status: "running",
            category: ["web"],
            highlights: [
                "1000+ students enrolled",
                "3D physics simulations",
                "Gamified learning"
            ]
        },
        {
            id: "7",
            title: "GoWow",
            description: "Platform to connect verified NGOs, volunteers, and donors to make social impact.",
            longDescription: "GoWow is a social service ecosystem that unites three types of users — NGOs, individuals (users), and businesses — to support social causes. Through GoWow, you can discover verified NGO profiles, donate materials, participate in volunteering opportunities, and track impact. The app incentivizes positive action by awarding points and coins, which can be redeemed for rewards.",
            technologies: ["Angular", "Firebase", "RxJS", "TypeScript", "Angular Material", "Ionic", "Capacitor"],
            features: [
                "Verified NGO profiles to ensure real and genuine needs",
                "Donate materials and support causes",
                "Volunteer opportunities listing and participation",
                "Points & coins reward system for contributions",
                "Track verified hours of volunteering or contributions"
            ],
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.quadralyst.GoWow&hl=en_IN",
            appStoreUrl: "https://apps.apple.com/us/app/gowow-the-social-service-app/id6745549820",
            status: "completed",
            category: ["mobile"],
            highlights: [
                "Aggregate verified NGOs, volunteers, and donors",
                "Earn rewards (points/coins) for social contributions",
                "Strong community involvement and impact tracking"
            ]
        },
        {
            id: "8",
            title: "Mangosteen",
            description: "Stylish cafe offering a blend of global & healthy cuisine with a relaxed, artistic ambiance",
            longDescription: "Mangosteen Café is a trendy eatery known for its curated menu featuring healthy-forward dishes, global flavours, and comforting classics. Guests appreciate the inviting, creative design, attentive service, and a calm, photogenic atmosphere ideal for casual meetups, meals at leisure, or catching up with friends.",
            technologies: ["Angular", "AnalogJS", "Firebase", "RxJS", "NgRx", "TypeScript", "Angular Material", "Ionic", "Capacitor"],
            features: [
                "Diverse menu with healthy and international options",
                "Dessert specials like Baklava with ice cream",
                "Seasonal beverages and unique mocktails",
                "Attentive staff with good service",
                "Relaxed, aesthetic atmosphere suited for various group types"
            ],
            adminUrl: "https://mangosteen-cafe.web.app/",
            status: "running",
            category: ["web", "mobile"],
            highlights: [
                "Rated ~4.5+ with many positive reviews",
                "Ideal for casual gatherings or relaxed meals",
                "Standout menu items like Peri Peri Fries, Aglio Olio Pasta"
            ]
        },
        {
            id: "9",
            title: "Taskin",
            description: "A work-posting and bidding platform connecting users with service providers.",
            longDescription: "Taskin is a mobile and web application that allows users to post domestic chores, personal tasks, or professional work requirements. Service providers or bidders can then place competitive bids with their proposed price and time to complete the task. This creates a transparent and efficient marketplace for getting work done quickly and affordably.",
            technologies: ["Angular", "AnalogJS", "Firebase", "RxJS", "NgRx", "TypeScript", "Angular Material", "Ionic", "Capacitor"],
            features: [
                "Post domestic or professional tasks",
                "Bidding system for service providers",
                "Real-time notifications for bids and updates",
                "User profiles with ratings and reviews",
                "Secure in-app communication"
            ],
            adminUrl: "https://taskindev-69c4f.web.app/",
            status: "completed",
            category: ["web", "mobile"],
            highlights: [
                "Transparent task bidding system",
                "Secure and easy-to-use interface",
                "Connects users with trusted service providers"
            ]
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.status === activeFilter);

    return (
        <section id="projects" className="projects">
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2>Featured Projects</h2>

                {/* Filter Tabs */}
                <div className="project-filters">
                    <button
                        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'running' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('running')}
                    >
                        Live
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'completed' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('completed')}
                    >
                        Completed
                    </button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card-new"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            {/* Status Badge */}
                            <div className={`project-status ${project.status}`}>
                                <span className="status-dot"></span>
                                {project.status === 'running' ? 'Live' : 'Completed'}
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p className="project-short-desc">{project.description}</p>

                                {/* Highlights */}
                                <div className="project-highlights">
                                    {project.highlights.slice(0, 3).map((highlight, i) => (
                                        <div key={i} className="highlight-item">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Technologies */}
                                <div className="project-tech">
                                    {project.technologies.slice(0, 4).map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="tech-tag">+{project.technologies.length - 4}</span>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="project-actions">
                                    <button
                                        className="btn-view-details"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        View Details
                                    </button>
                                    {(project.userUrl || project.adminUrl || project.playStoreUrl || project.appStoreUrl) && (
                                        <a
                                            href={project.userUrl || project.adminUrl || project.playStoreUrl || project.appStoreUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-live-link"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="project-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="project-modal"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={() => setSelectedProject(null)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>

                            <div className="modal-header">
                                <h2>{selectedProject.title}</h2>
                                <div className={`project-status ${selectedProject.status}`}>
                                    <span className="status-dot"></span>
                                    {selectedProject.status === 'running' ? 'Live' : 'Completed'}
                                </div>
                            </div>

                            <p className="modal-description">{selectedProject.longDescription}</p>

                            <div className="modal-section">
                                <h3>Key Features</h3>
                                <ul className="features-list">
                                    {selectedProject.features.map((feature, i) => (
                                        <li key={i}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="modal-section">
                                <h3>Highlights</h3>
                                <div className="project-highlights">
                                    {selectedProject.highlights.map((highlight, i) => (
                                        <div key={i} className="highlight-item">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-section">
                                <h3>Technologies Used</h3>
                                <div className="project-tech">
                                    {selectedProject.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-actions">
                                {selectedProject.userUrl && (
                                    <a href={selectedProject.userUrl} target="_blank" rel="noopener noreferrer" className="btn btn-filled">
                                        Visit Website
                                    </a>
                                )}
                                {/* {selectedProject.adminUrl && (
                                    <a href={selectedProject.adminUrl} target="_blank" rel="noopener noreferrer" className="btn">
                                        Admin Panel
                                    </a>
                                )} */}
                                {selectedProject.playStoreUrl && (
                                    <a href={selectedProject.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn">
                                        Play Store
                                    </a>
                                )}
                                {selectedProject.appStoreUrl && (
                                    <a href={selectedProject.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn">
                                        App Store
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;

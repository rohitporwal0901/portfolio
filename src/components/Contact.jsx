import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Get In Touch</h2>
                <div className="contact-content">
                    <p>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        feel free to reach out!
                    </p>

                    <div className="contact-links">
                        <a href="mailto:rohitporwal209@gmail.com" className="contact-item">
                            <span className="icon">✉️</span>
                            <span>rohitporwal209@gmail.com</span>
                        </a>
                        <a href="tel:+918461909143" className="contact-item">
                            <span className="icon">📞</span>
                            <span>+91 8461909143</span>
                        </a>
                        <a href="https://www.linkedin.com/in/rohit-porwal-6ba796243/" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <span className="icon">🔗</span>
                            <span>LinkedIn Profile</span>
                        </a>
                        <div className="contact-item">
                            <span className="icon">📍</span>
                            <span>Indore, Madhya Pradesh, India</span>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Rohit Porwal. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;

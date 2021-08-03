import React from 'react';
import "./ContactMe.css";

export const ContactMe = React.forwardRef((props,ref) =>{
    return (
        <div id="ContactMe" className="contactme-container" ref={ref}>
            <h1 className="heading">Contact</h1>

            <div className="cards-container">
                {/* Card 1 - Email */}
                <div className="cards" data-aos="fade-left">
                    <span className="helper"></span>
                    <div className="content">
                        <div className="contact-icons">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-text">
                            <span>Email</span>
                        </div>
                        <div className="contact-links">
                            <span>wuxiaxin.nixaixuw@gmail.com</span>
                        </div>
                    </div>
                </div>

                {/* Card 2 - Social Media */}
                <div className="cards" data-aos="fade-left">
                    <span className="helper"></span>
                    <div className='content'>
                        <div className="contact-icons">
                            <i className="fas fa-globe"></i>
                        </div>
                        <div className="contact-text">
                            <span>Social Media</span>
                        </div>
                        <div className="contact-links">
                            {/* github */}
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/iamjustnobody/"
                            >
                                <i className="fab fa-github" title="github" id="github"></i>
                            </a>

                            {/* facebook */}
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.facebook.com/xiaxin.wu"
                            >
                                <i className="fab fa-facebook" title="facebook" id="facebook"></i>
                            </a>

                            {/* linkedIn */}
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/in/xiaxin-wu-6805b961"
                            >
                                <i className="fab fa-linkedin" title="linkedin" id="linkedin"></i>
                            </a>

                            {/* Twitter */}
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://twitter.com/LegendaryWXX"
                            >
                                <i className="fab fa-twitter" title="twitter" id="twitter"></i>
                            </a>

                            {/* Instagram */}
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.instagram.com/freudandschrodingers_cat/"
                            >
                                <i
                                    className="fab fa-instagram"
                                    title="instagram"
                                    id="instagram"
                                ></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 3 - Phone */}
                <div className="cards" data-aos="fade-right">
                    <span className="helper"></span>
                    <div className='content'>
                        <div className="contact-icons">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="contact-text">
                            <span>Phone</span>
                        </div>
                        <div className="contact-links">
                            <span>(+44) 791 556 0755 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})
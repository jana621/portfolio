import React, { useRef, useState } from 'react';
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Github from "../../img/git.png";
import Linkedin from "../../img/in.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_m9pogbe', 'template_5ca6nst', formRef.current, 'e8t2cniE6yrfHYr_5')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });

    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="c-info">

                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 7092712929
                        </div>

                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            janarthanansamy621@gmail.com
                        </div>

                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            #40/3, Type-lll, DGQA Complex, Meenambakkam, Nanganallur PO, Chennai - 61.
                        </div>

                        <div className="c-info-item">
                            <a href="https://github.com/jana621" target="_blank" rel="noreferrer" className="a-icon">
                                <img src={Github} alt="" className="c-icon" />
                                Github
                            </a>
                        </div>

                        <div className="c-info-item">
                            <a href="https://www.linkedin.com/in/janarthanan-k-12a749248/" target="_blank" rel="noreferrer" className="a-icon">
                                <img src={Linkedin} alt="" className="c-icon" />
                                LinkedIn
                            </a>
                        </div>

                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your thought?</b> Get in touch? Always available for the right oppurtunities.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea className="c-textarea" rows="5" placeholder="message" name="message" />
                        <button className="btn-submit">Submit</button>
                        <br/>
                        {done && "Thank you😄"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <h1>Start Your Adventure Today!</h1>
                <h3>Contact an Adventure Expert!</h3>
                <form>
                    <label>Name: <input type="text" name="name" defaultValue="Full Name" /></label>
                    <label>Email: <input type="text" name="email" defaultValue="john.doe@email.com" /></label>
                    <label>Message</label>
                    <textarea name="message" defaultValue="Type your message here." /><br/>
                    <input type="submit" value="Submit" className="submit-btn" />
                </form>
            </div>
        </div>
    );
}
export default Contact;
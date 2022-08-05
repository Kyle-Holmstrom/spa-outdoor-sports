import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Start Your Adventure Today!</h1>
            <h3>Contact an Adventure Expert!</h3>
            <form>
                <label>Name: <input type="text" name="name" /></label>
                <label>Email: <input type="text" name="email" /></label>
                <label>Message</label>
                <textarea name="message" /><br/>
                <input type="submit" value="Submit" className="submit-btn" />
            </form>
        </div>
    );
}
export default Contact;
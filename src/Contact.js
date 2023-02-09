

function Contact() {
    return (
        <div className="contact-container container" id='contact'>
            <p className="header-1">Get In Touch</p>

            <p className="contact-content">Are you hiring? <br />I am currently searching for a role as a software engineer and would love to hear from you. Send me an email!
            </p>
            <div className="contact-button-container">
                <a className="CTA-button contact-button" href='mailto:kgreve14@gmail.com' target='_blank' rel="noreferrer">
                    Send me an Email!
                </a>
                <a className="CTA-button contact-button" href='/kaitlyngreve_resume.pdf' target='_blank' rel="noreferrer">
                    Resume
                </a>
            </div>
        </div>
    )
}

export default Contact;
import React from 'react'
import MdMail from 'react-ionicons/lib/MdMail'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <span>
                    <a href="mailto:steve@stevegojkov.com">
                        <MdMail color="ivory" className="footer-logos" />
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/stevegojkov" target="_blank">
                        <LogoLinkedin color="ivory" className="footer-logos" />
                    </a>
                </span>
                <span>
                    <a href="https://github.com/gojkov" target="_blank">
                        <LogoGithub color="ivory" className="footer-logos" />
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
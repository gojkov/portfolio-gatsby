import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <span>
                    <a href="mailto:steve@stevegojkov.com">
                        <ion-icon name="mail"></ion-icon>
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/stevegojkov" target="_blank">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </span>
                <span>
                    <a href="https://github.com/gojkov" target="_blank">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
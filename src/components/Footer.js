import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <p>Made with ♥ by <a href="https://lauragao.ca" target="_blank" rel="noreferrer">Laura Gao</a></p>
            <p>The Quantum Maxcut Solver is open source! Full code: 
                <a href="https://github.com/laurgao/maxcut-frontend" target="_blank" rel="noreferrer" className="footer-needspace">Frontend</a> • 
                <a href="https://github.com/laurgao/maxcut-backend" target="_blank" rel="noreferrer" className="footer-needspace">Backend</a>
            </p>
        </footer>
    )
}

export default Footer

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const careerLinkText = location.pathname === '/career' ? 'Go to Homepage' : 'Explore Careers';

    const footerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
      };

    return (
        <footer style={footerStyle}>
            <Link to={location.pathname === '/career' ? '/' : '/career'}>{careerLinkText}</Link>
        </footer>
    );
};

export default Footer;
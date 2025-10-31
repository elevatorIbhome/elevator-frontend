import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by  Elevator Pitch | Powered by [wojo::works] v.5.00</p>
            </aside>
        </footer>
    );
};

export default Footer;
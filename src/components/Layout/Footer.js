import React from 'react';

function Footer() {
    return (
        <footer className="page-footer font-small blue" style={{position: 'fixed', bottom: '0', width: '100%', background: '#ccc', zIndex: '999'}}>
            <div className="footer-copyright text-center py-2">© 2020 Copyright:
                   <a href="https://mdbootstrap.com/" target="_blank" rel="noopener noreferrer"> searchMovie.com</a>
            </div>
        </footer>
    )
}

export default Footer;
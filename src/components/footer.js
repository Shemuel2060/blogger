
import '../assets/styles/footer.css'
import './Navbar.css'

import {Link} from 'react-router-dom';


const Footer = ()=>{

    return(
        <div className="footer">
            <nav className='links'>
                <Link to="/about-me" className="nav-links">About</Link>
                <Link to="/portfolio" className="nav-links">Portfolio</Link>
                <Link to="/blogs" className="nav-links">Blog</Link>
                <Link to="/contact-me" className="nav-links">Contact</Link>               
            </nav>
            
            <p className='footer-p'>&copy; 2024 Samuel Katongole    
            All rights reserved.</p>
        </div>
    )

}
export default Footer;
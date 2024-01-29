

import './Navbar.css'

import SocialMedia from './SocialMedia';
import Search from './Search';
import { Link } from 'react-router-dom';


function Navbar(){

    return(
        <div className="nav-bar">
            <h3 className='logo'>SHEMUEL CODE</h3>
            <nav className='links'>
                <Link to="/about-me" className="nav-links">About</Link>
                <Link to="/portfolio" className="nav-links">Portfolio</Link>
                <Link to="/blogs" className="nav-links">Blog</Link>
                <Link to="/contact-me" className="nav-links">Contact</Link>               
            </nav>
            
            <div className='links'>                
                <SocialMedia/>
            </div>
            <div className='search'>                
                <Search/>
            </div>
            
        </div>
    )

}

export default Navbar;
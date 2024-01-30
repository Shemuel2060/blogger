

import './Navbar.css'

import SocialMedia from './SocialMedia';
import Time from '../assets/utility components/clock'
import Search from './Search';
import { Link } from 'react-router-dom';


function Navbar(){

    return(
        <div className="nav-bar">
            <div>
                <h3 className='logo'>Shemuel</h3>
            </div>
            <nav className='links'>
                <Link to="/about-me" className="nav-links">About</Link>
                <Link to="/portfolio" className="nav-links">Portfolio</Link>
                <Link to="/blogs" className="nav-links">Blog</Link>
                <Link to="/contact-me" className="nav-links">Contact</Link>               
            </nav>
            
            <div className='links'>                
                <SocialMedia/>
            </div>
            <div className='clock'>
                <Time/>
            </div>
            <div className='search'>                
                <Search/>
            </div>
            
        </div>
    )

}

export default Navbar;
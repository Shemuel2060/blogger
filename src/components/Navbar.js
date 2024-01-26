

import './Navbar.css'

import SocialMedia from './SocialMedia';
import Search from './Search';


function Navbar(){

    return(
        <div className="nav-bar">
            <h3 className='logo'>HEAVENFUL LIFE</h3>
            <nav className='links'>
                <a href="#" className="nav-links">About</a>
                <a href="#" className="nav-links">Blog</a>
                <a href="#" className="nav-links">Contact</a>
                
                
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
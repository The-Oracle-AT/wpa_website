import { Link, Outlet } from 'react-router-dom';

import { faEnvelope, faHome, faInfoCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './Stylesheets/ComponentsStyleSheet.css';
    /*NavBar - a function that creates a navigation bar for a
    * website. This will be converted to a .module.tsx file for
    * reusability in differents site.
    * notice that the navbar can either be navbarcollpased or just navbar
    * upon toggling a prefix is added. The toggle is the screen size which
    * is specified in the CSS style sheet
    * param : No params
    *
    * Return: A navigation bar that will be rendered on a webpage*/

/*NavBar - a fucntion that creates a navigation bar for a 
* website. This will be converted to a .module.tsx file for 
* reusability in differents site.
* notice that the navbar can either be navbarcollpased or just navbar
* upon toggling a prefix is added. The toggle is the screen size which
* is specified in the CSS style sheet
* param : No params
* 
* Return: A navigation bar that will be rendered on a webpage*/
const NavBar = () => {
    const [collapsed, setCollapsed] = useState(false);
     
    /* toggleCollapsed - to toggle from callapsed and 
    * !collapsed nav */
    const toggleCollapsed = () => {
        setCollapsed(!collapsed); 
     };
     
     return (
        <>
            <nav id= "navbar" className = {`navbar ${collapsed ? 'collapsed' : ''}`}>
                <div className='navbar-brand'>Wolf Logo</div>
                <div className={`navbar-links ${ collapsed ? 'collapsed' : ''}`}>
                    <a href='#'>
                        <Link to="/" ><FontAwesomeIcon icon = { faHome }/> Home</Link>
                        </a>
                    <a href='#'>
                        <Link to="/blogs" ><FontAwesomeIcon icon = { faInfoCircle }/> Blogs</Link>
                    </a>
                    <a href='#'>
                        <Link to="/contact" ><FontAwesomeIcon icon = { faEnvelope }/> Contact</Link>
                    </a>
                    <a href='#'><FontAwesomeIcon icon = { faUserPlus }/> Sign In</a>
                    
                </div>
                
                {/* This is the toggle icon*/}
                <div className='navbar-toggle' onClick={ toggleCollapsed }>
                    <div className = {`icon ${ collapsed ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
     );
};

//Create a function to handle tabs when the user clicks on the Home, About and contact links*/



export default NavBar;
import { Link, Outlet } from 'react-router-dom';

import { faEnvelope, faHome, faInfoCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import '../Stylesheets/ComponentsStyleSheet.css';
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
const NavBar: React.FC = () => {
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
                    <Link to = "/" ><FontAwesomeIcon icon = { faHome }/> Home</Link>
                    <Link to = "/learn" ><FontAwesomeIcon icon = { faInfoCircle }/> Learn</Link>
                    <Link to = "/contact" ><FontAwesomeIcon icon = { faEnvelope }/> Contact</Link>
                    <Link to = "/login"><FontAwesomeIcon icon = { faUserPlus }/> Sign In</Link> 
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


            <main>
                <Outlet/>
            </main>
            
        </>
     );
};

//Create a function to handle tabs when the user clicks on the Home, About and contact links*/



export default NavBar;
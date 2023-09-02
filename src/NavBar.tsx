import { faEnvelope, faHome, faInfoCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './ComponentsStyleSheet.css';
    /*NavBar - a fucntion that creates a navigation bar for a
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
        <nav id= "navbar" className = {`navbar ${collapsed ? 'collapsed' : ''}`}>
            <div className='navbar-brand'>Wolf Logo</div>
            <div className={`navbar-links ${ collapsed ? 'collapsed' : ''}`}>
                <a href='#'><FontAwesomeIcon icon = { faHome }/> Home</a>
                <a href='#'><FontAwesomeIcon icon = { faInfoCircle } /> About</a>
                <a href='#'><FontAwesomeIcon icon = { faEnvelope }/> Contact</a>
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
     );
};
const HomeContent = () =>{
    return(
        <div className='home-content'>
            <h1> Home</h1>
        </div>
    );
};
const ServiceContent = () =>{
    return(
        <div className='home-content'>
            <h1> Service</h1>
        </div>
    );
};
const AboutContent = () =>{
    return(
        <div className='home-content'>
            <h1> About </h1>
        </div>
    );
};



export default NavBar;
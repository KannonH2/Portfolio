// import React from 'react';
// import { Button } from 'react-bootstrap';
// import "../Styles/NavBar.css"
// import { Link } from 'react-router-dom';
// import img from '../images/deadpool.gif';

// function NavBar(){

// return (
//     <div className="Nav">
//     <div className="Buttons">
//     <ul className="Buttons" id="menuList"> 
//         <Link to="/">
//             <Button className="btn btn-dark">Home </Button>
//         </Link>
//         <Link to="/About">
//             <Button className="btn btn-dark">About Me </Button>
//         </Link>
//         <Button href="#footer" className="btn btn-dark">Contact </Button>
//     </ul>
//         <img src={img} className="nav-icon" alt=""/>
//         </div>
//     </div>
// )
// }

// export default NavBar;

import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import "../Styles/NavBar.css"
import { IconContext } from 'react-icons';
import img from '../images/deadpool.gif';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
          </Link><p className="ml-1">Menu</p>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <img src={img} className="nav-icon" alt=""/>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
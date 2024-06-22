import React, { useState } from 'react'
import Menu from '../../src/Images/menu.png'
import './header.css'
import { Link } from 'react-scroll'
import {motion} from "framer-motion"
const Header = () => {
   const transition = {type: "spring", duration: 1}
  const mobile = window.innerWidth<=768?true:false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    
     <div className='Header' id='header'>
          <h2>Abd</h2>
          {menuOpened === false && mobile === true?(
          <div onClick={()=>{setMenuOpened(true)}}><img src={Menu} alt="" style={{width: '1.5rem', filter: 'invert(100%)'}}/></div>
          ):(
          <motion.ul className='header-menu'
          initial = {{opacity: 0 , x: 100}}
          animate = {{opacity: 1 , x: 0}}
          exit = {{opacity: 0 , x: 100}} 
          transition = {transition}>
             <li><Link to='home' onClick={()=>{setMenuOpened(false)}} span="true" smooth={true}>Home</Link></li>
             <li><Link to='about' onClick={()=>{setMenuOpened(false)}} span="true" smooth={true}>About</Link></li>
             <li><Link to='services' onClick={()=>{setMenuOpened(false)}} span="true" smooth={true}>Services</Link></li>
             <li><Link to='projects' onClick={()=>{setMenuOpened(false)}} span="true" smooth={true}>Projects</Link></li>
             <li><Link to='contact' onClick={()=>{setMenuOpened(false)}} span="true" smooth={true}>Contact</Link></li>
          </motion.ul>
    )}
     </div>
  )
}

export default Header

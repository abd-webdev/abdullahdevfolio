import React, {useState} from 'react';
import myprojects from '../Data/myprojects';
import {motion} from "framer-motion"
const Projects = () => {

  const [selected, setSelected] = useState(0);
  const pLength = myprojects.length; 
  const transition = {type: "spring", duration: 3}
  return (
    <div className='Projects' id='projects'>
      <div className="left-p">
        <h1>Projects</h1>
        <span className='stroke-text'>My recent work</span>
          <span>{myprojects[selected].title}</span>
          <motion.span
          key={selected}
          initial = {{opacity: 0 , x: -100}}
          animate = {{opacity: 1 , x: 0}}
          exit = {{opacity: 0 , x: 100}} 
          transition = {transition}>{myprojects[selected].description}</motion.span>
          <span>{myprojects[selected].status}</span>


      </div>
      <div className="right-p">
        <motion.div 
         initial = {{opacity: 0 , x: -100}}
         whileInView = {{opacity: 1, x: 0}}
         transition = {transition}></motion.div>
        <motion.div initial = {{opacity: 0 , x: 100}}
         whileInView = {{opacity: 1, x: 0}}
         transition = {transition}></motion.div>
        <motion.img src={myprojects[selected].image} alt="" 
        key={selected}
        initial = {{opacity: 0 , x: 100}}
        animate = {{opacity: 1 , x: 0}}
        exit = {{opacity: 0 , x: -100}} 
        transition = {{transition}}/>
        <div className='arrows'>
        <i className="ri-arrow-left-line" onClick={()=>{
                selected === 0
                ? setSelected(pLength-1)
                : setSelected((prev)=> prev - 1)
            }} ></i>
        <i className="ri-arrow-right-line" onClick={()=>{
                selected === pLength -1
                ?setSelected(0)
                :setSelected((prev)=> prev +1)
            }} ></i>
        </div>
      </div>
      
    </div>
  )
}

export default Projects

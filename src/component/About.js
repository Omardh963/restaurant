import React, { useState } from 'react';
import logoo from '../photos/Screenshot_٢٠٢٤٠٧٠١-١٢٣٧٢٠_1 copy.jpg';
import { motion } from 'framer-motion';
import './About.css';
function About() {
    const[omar,setomar]=useState(true);
  return (
    <div>
         <div id='about' className='about'>
        <div className='container'>
            <div className='row opp'>
                <div className='col-md-6 col-lg-6'>
                    <motion.img 
                    initial={{x:-200}} whileInView={{x:0}} transition={{duration:1.5}}
                    src={logoo} alt='logo' className='logo' />
                </div>
                <div className='col-md-6 col-lg-6'>
                    <motion.h2 initial={{x:200,rotate:45}}  whileInView={{x:0,rotate:0}}  transition={{duration:1}}>IF YOU ARE NOT HUNGRY OR WANT TO EAT LATER, WE HAVE TRAVEL FOOD</motion.h2>
                    <p>our restaurant is one of the most delicious and beautiful restaurant</p>
                    <h3>{omar?"I LIKE THIS FOOD":"I DONT LIKE THIS FOOD"}</h3>
                    <button className='btn btn-outline-danger' onClick={()=>setomar(true)}>okey</button>
                    <button className='btn btn-outline-danger' onClick={()=>setomar(false)}>not okey</button>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About

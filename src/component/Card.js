import React from 'react';
import './Card.css';
import { motion } from 'framer-motion';
function Card(props) {
  return (
    <div>
      <motion.div
         initial={{opacity:0 , scale:0}}
         whileInView={{opacity:1 , scale:1}}
         transition={{duration:1}}
        
      className='card'>
       <motion.div
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:1}}
       className='img'
       style={{backgroundImage:`url(${props.img})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',width:'300px',height:'300px'}}></motion.div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <h2>{props.price}</h2>
      </motion.div>
    </div>
  )
}

export default Card

import React, { useState } from 'react';
import './Header.css';
import { motion } from 'framer-motion';
import logo from '../photos/Screenshot_٢٠٢٤٠٧٠١-١٢٣١٣٣_1 copy.jpg';
import Food from './Food';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons/faSquare';
import { Button } from 'react-bootstrap';
function Header() {
  return (
    <div>
     <header id='home' className='home'>
      <div className='container'>
        <div className='row ooop'>
            <div className='col-md-6 col-lg-6'>
                <img src={logo} alt='lsdkj'/>
            </div>
            <div className='col-md-6 col-lg-6 ommm'>
                <h2>hello in our restaurant we are so happy because visited us...</h2>
                <p>sljeg lslkg llfjfdm oijeieng hebjgfq kaegf qihtuhwie qoijior kypruj kbfeq ahsbfjuw keuhfuyhweb kjbiubg kwbuebg wjenifbq</p>
                <a href='#services' className='btn btn-outline-danger'>click here</a>
            </div>
        </div>
      </div>
     </header>
      <Food/>
    </div>
  )
}

export default Header

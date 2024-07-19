import React from 'react'
import './App.css';
import Home from './component/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <div>
      <Home/>
      <footer className='foot' id='contact'>
       <div className='container'>
        <div className='row ftor'>
          <div className='col-md-12 col-lg-12'>
            <h2>IN FINALLY WE WISTH TO MAKE YOU HAPPY,</h2><br/>
            <p>this restaurant it is be open allways we be happy if you visited us </p>
            <p>to the contact us throw these numbers</p>
            <h3 className='h3'>+963 994051940</h3>
            <h3 className='h3'>+963 938746796</h3><br/>
            <h2>*******THE END*******</h2>
            
          </div>
        </div>
       </div>
      </footer>
    </div>
  )
}

export default App

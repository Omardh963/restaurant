import React from 'react';
import Navs from './Navs';
import Header from './Header';
import { Carousel, Spinner } from 'react-bootstrap';
import './Home.css';
import logo1 from '../photos/1713344045033.jpg';
import logo2 from '../photos/1713344066161.jpg';
import logo3 from '../photos/Screenshot_٢٠٢٤٠٧٠١-١٢٥٧٣١_1.jpg';
import logo4 from '../photos/Screenshot_٢٠٢٤٠٧٠١-١٢٥٧٠٨_1 copy.jpg';
import logo5 from '../photos/1713344103553.jpg';
import logo6 from '../photos/1713344119752.jpg';
import About from './About';
import { motion } from 'framer-motion';
function Home() {
    return (
        <div>
            <Navs />
            <Header />
            <div className='spiner'>
                <Spinner className='sp' animation="grow" variant="primary" />
                <Spinner className='sp' animation="grow" variant="secondary" />
                <Spinner className='sp' animation="grow" variant="success" />
                <Spinner className='sp' animation="grow" variant="danger" />
                <Spinner className='sp' animation="grow" variant="warning" />
                <Spinner className='sp' animation="grow" variant="info" />
                <Spinner className='sp' animation="grow" variant="light" />
                <Spinner className='sp' animation="grow" variant="dark" />
            </div>
            <section id='sweets' className='sweets'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="image"
                            src={logo2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="image"
                            src={logo1}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="image"
                            src={logo2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="image"
                            src={logo3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="image"
                            src={logo4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="image"
                            src={logo5}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="image"
                            src={logo6}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <About />
            <div id='services' className='serv container'>
                <motion.div initial={{ x: -100, opacity: 0, scale: 0 }} whileInView={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='alert alert-danger'>WELCOMING THE CUSTOMER AND RESPECT THIER AND GIVE THEIR THE HELPING</motion.div><br />
                <motion.div initial={{ x: -100, opacity: 0, scale: 0 }} whileInView={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className='alert alert-primary'>SEAT ORGANIZATION AND THE SEATS ARE ORGANIZED IN A WAY APPROPRIATE</motion.div><br />
                <motion.div initial={{ x: -100, opacity: 0, scale: 0 }} whileInView={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='alert alert-success'>PRESENTATION OF THE MENU TO THE CUSTOMER IN ORDER TO READ IT OF US </motion.div><br />
                <motion.div initial={{ x: -100, opacity: 0, scale: 0 }} whileInView={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.3 }} className='alert alert-danger'>PROVIDING TRAVEL MEALS TO CUSTOMERS AND SMILE IN THEIR FACE</motion.div><br />
                <motion.div initial={{ x: -100, opacity: 0, scale: 0 }} whileInView={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='alert alert-primary'>PROVIDING TISSUE BOXES AND WATER ON THE TABLE, AND ALL OF THIS IS FREE</motion.div><br />
                <motion.div initial={{ x: -100, opacity: 0, scale: 0 }} whileInView={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.8 }} className='alert alert-success'>FINALLY, MOST RESTAURANT OFFER DISCOUNTS ON PRICES TO THE CUSTOMERS</motion.div><br />
            </div>
        </div>
    )
}

export default Home

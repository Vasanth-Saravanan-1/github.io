import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/hero';
import Footer from '../Components/Footer';
import Aboutus from '../Components/Aboutus';
function About(){
    return(
        <>
        <Navbar/>
        <Hero
className='hero-mid'
Img="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80/"
title=" About"
text="History makes powerfull places"/>
<Aboutus/>
<Footer/>

        
        </>
    )
}
export default About;
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection2 from '../components/InfoSection2';
import InfoSection3 from '../components/InfoSection3';
import RoadMap from '../components/InfoSection3/Data3';
import About from '../components/InfoSection2/Data2';
import Footer from '../components/Footer';

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection2 {...About} />
            <InfoSection3  {...RoadMap}/>
            <Footer />
        </>
    )
}

export default Home;

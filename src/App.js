import './styles/font.css'
import './styles/colors.css'
import './App.css'
import React from 'react';
import Navbar from './Layout/Navbar/Navbar'
import LogoBox from './Layout/LogoBox/LogoBox'
import MainSection from './Layout/MainSection/MainSection'
import SectionTwo from './Layout/SectionTwo/SectionTwo';
import SectionThree from './Layout/SectionThree/SectionThree';
import SectionFour from './Layout/SectionFour/SectionFour';
import Carousel, { CarouselItem } from './Components/Carousel/Carousel';
// import Footer from './Layout/Footer/Footer';


export default function App() {
  return (
    <div>
      <div className="main-app">
        <LogoBox></LogoBox>
        <Navbar></Navbar>
        <MainSection />
        <SectionTwo />
        <SectionThree />
        <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </Carousel>
        {/* <SectionFour /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
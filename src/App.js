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
// import Footer from './Layout/Footer/Footer';


export default function App() {
  return (
    <div>
      <LogoBox></LogoBox>
      <Navbar></Navbar>
      <div className="main-app">
        <MainSection />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
import React, { useEffect } from 'react';
import "./main.css"
import Navbar from '../Navbar/Navbar';
import { useTranslation } from 'react-i18next';
import VideoSet from "../../images/banner.mp4"
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainAbout from "../MainPage/MainAbout/MainAbout";
import MainAdvantage from './MainAdvantage/MainAdvantage';
import SliderPic from './MainAdvantage/slider_images/SliderPic';
import Projects from './Projects/Projects';
import News from './News/News';
import Contact from './Contact/Contact';
const Main = () => {
  const {t, i18n} = useTranslation();
  useEffect(() => {
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
    });
  }, []);
  return (
    <>
      <section className='header' id='header'>
         <Navbar/>
      <div className="video-container">
      <video className="video" autoPlay loop muted>
        <source src={VideoSet} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
<div className="container">
    <div className="main_items" data-aos="zoom-out-up">
        <div className="main_items_text">
             <h2>DISCOVER INVEST</h2>
             <p>{t("mainpage")}</p>
        </div>

       <div className="mains_buttons">
       <div className="main_btns">
            <Link to={"#projects"}>
               <span>{t("projects")}</span>
            </Link>
        </div>
        <div className="main_btns">
            <Link to={"#contact"}>
               <span className="contact">{t("contacts")}</span>
            </Link>
        </div>
       </div>
    </div>
    </div>
</section>




<MainAbout/>
<MainAdvantage/>
<SliderPic/>
<Projects/>
{/* <News/> */}
{/* <Contact/> */}
    </>
  )
}

export default Main

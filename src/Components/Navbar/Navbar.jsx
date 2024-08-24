import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram, faTelegram} from '@fortawesome/free-brands-svg-icons'; 
import { faBarsStaggered, faPhone } from '@fortawesome/free-solid-svg-icons';
import LogoDark from '../Logos/LogoDark';
import LogoLight from '../Logos/LogoLight';

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
      setToggle(prevToggle => !prevToggle);
    }

    const {t, i18n} = useTranslation();
    const languages = localStorage.getItem("i18nextLng");
    const [scrolled, setScrolled] = useState(false)
    

    useEffect(()=> {
      const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 100){
          setScrolled(true)
        }else{
          setScrolled(false)
        }
      };

      window.addEventListener('scroll', handleScroll);

      return()=> {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [])

    const handleChange = (event) => {
         const selectedLanguage = event.target.value;
         i18n.changeLanguage(selectedLanguage);
 
    }
   return (
    <>
      <section className={`navbar ${scrolled ? 'scrolled' : ""}`}>
        <div className="container">
        <nav>
           <div className="nav_logo">
               <Link to={'/'}>{scrolled ? <LogoDark/> : <LogoLight/>}</Link>
           </div>
            <div className="nav_links">
            <ul>
               <li><NavLink className={"menu_links"} to={"/about"}>{t("about")}</NavLink></li>
               <li><NavLink className={"menu_links"} to={"/projects"}>{t("projects")}</NavLink></li>
               <li><NavLink className={"menu_links"} to={"/career"}>{t("career")}</NavLink></li>
               <li><NavLink className={"menu_links"} to={"/news"}>{t("news")}</NavLink></li>
               <li><NavLink className={"menu_links"} to={"/contact"}>{t("contacts")}</NavLink></li>
            </ul>
            </div>
            <div className="social_media">
               <Link to={"/contact"}><FontAwesomeIcon className='nav_socialMedia_icons' icon={faTelegram} /></Link>
               <Link to={"/contact"}><FontAwesomeIcon className='nav_socialMedia_icons' icon={faInstagram} /></Link>
               <Link to={"/contact"}><FontAwesomeIcon className='nav_socialMedia_icons' icon={faFacebookF} /></Link>
            </div>
            <div className="language">
            <select name="lng" id="Lng" className='selectNavbar language_first' onChange={handleChange} value={languages}>
              <option value="uz">Uzbek</option>
              <option value="en">English</option>
              <option value="ru">Russian</option>
            </select>
            </div>
            <div className="nav_number_contact">
               <a href="+ 998 (71) 288 88 88" className='phone_number '>+ 998 (71) 288 88 88</a>
               <div className='phone_card phone_number_small'>
               <Link to={"+ 998 (71) 288 88 88"}><FontAwesomeIcon className='phone_icon' icon={faPhone} /></Link>
              </div>
            </div>
        </nav>

        <div className="nav__navbar__smallScreen">
        <FontAwesomeIcon 
           icon={faBarsStaggered} 
           onClick={handleToggle} 
           cursor={"pointer"} 
           color='#fff' 
           fontSize={27} className='overlay_close_second icon_darker'
           />
           {toggle && ( 
            <>
              <div className="nav__navbar__links_menu">
              {/* <FontAwesomeIcon icon={faX} fontSize={27} cursor={"pointer"} className='overlay_close icon_darker' onClick={()=> setToggle(false)}/> */}
                 <div className="small_menu">
                 <ul>
                  <li><NavLink className={"menu_links"} to={"/about"}>{t("about")}</NavLink></li>
                  <li><NavLink className={"menu_links"} to={"/projects"}>{t("projects")}</NavLink></li>
                  <li><NavLink className={"menu_links"} to={"/career"}>{t("career")}</NavLink></li>
                  <li><NavLink className={"menu_links"} to={"/news"}>{t("news")}</NavLink></li>
                  <li><NavLink className={"menu_links"} to={"/contact"}>{t("contacts")}</NavLink></li>
                </ul>
                 </div>
                <div className="language">
                <select name="lng" id="Lng" className='selectNavbar_small' onChange={handleChange} value={languages}>
                  <option value="uz" onClick={handleToggle}>Uzbek</option>
                  <option value="en" onClick={handleToggle}>English</option>
                  <option value="ru" onClick={handleToggle}>Russian</option>
                </select>
            </div>
              </div>
            </>
           )}
        </div>
        <div className='line_nav' />
        </div>
       
      </section>
    </>
  )
}

export default Navbar

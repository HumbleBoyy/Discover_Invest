import React from 'react'
import "./contact.css"
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { faFacebookF,faInstagram, faTelegram} from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LuAlarmClock } from "react-icons/lu";
import { t } from 'i18next'
import { Link } from 'react-router-dom';
import image from '../../../assets/image';
const Contact = () => {
  return (
    <>
      <section className='contact_section'>
       <div className="container">
          <div className="contact_items">
             <div className="contact_item_left">
             <div className="adavantages_title_Text">
                <h2 data-aos="fade-down-right"><span className="yellow_line"></span>{t("contacts")}</h2>
              </div>
              <div className="adress_information_items">
                  <div className="adress_info_item">
                     <h2 className='adress'><IoLocationSharp className="contact_icons"/>{t("address")}</h2>
                     <p className='adress_paragraph adressText'>{t("addressText")}</p>
                  </div>
                  <div className="adress_info_item">
                     <h2 className='adress'><FaPhoneVolume className="contact_icons"/>{t("phone")}</h2>
                     <p className='adress_paragraph'>+998 71 288 88 88</p>
                  </div>
                  <div className="adress_info_item">
                     <h2 className='adress'><LuAlarmClock className="contact_icons"/>{t("workingHours")}</h2>
                     <p className='adress_paragraph'>{t("week")}</p>
                  </div>

                  <div className="social_media">
                    <Link to={"#contact"}><FontAwesomeIcon className='nav_socialMedia_icons contact_social_icons' icon={faTelegram} /></Link>
                    <Link to={"#contact"}><FontAwesomeIcon className='nav_socialMedia_icons contact_social_icons' icon={faInstagram} /></Link>
                    <Link to={"#contact"}><FontAwesomeIcon className='nav_socialMedia_icons contact_social_icons' icon={faFacebookF} /></Link>
                 </div>
              </div>

              <div className="input_items_wrapper">
                  <form action="#" className='form_contact'>
                    <div className="input_item">
                      <label htmlFor="#" className='input_label'>{t("phoneNumber")}</label>
                       <div className="input_box">
                        <img src={image.flag} alt="DiscoverInvest" />
                        <input type="tel" placeholder='+998' className='contact_inputs'/>
                       </div>
                    </div>
                    <div className="input_item">
                      <label htmlFor="#" className='input_label'>{t("nameInput")}</label>
                       <div className="input_box">
                        <input type="text" placeholder={t("whatIsYourname")} className='contact_inputs'/>
                       </div>
                    </div>
                    <div className="contact_btn">
                      <button className='contact_button'>{t("feedBack")}</button>
                    </div>
                  </form>
              </div>
             </div>
             <div className="contact_item_right">
             </div>
          </div>
       </div>
      </section>
    </>
  )
}

export default Contact

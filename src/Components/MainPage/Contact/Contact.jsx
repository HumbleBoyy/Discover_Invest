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
import MapLocation from './map';
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
                    <Link to={"#contact"}><FontAwesomeIcon className='nav_socialMedia_icons contact_social_icons' icon={faFacebookF} /></Link>
                    <Link to={"#contact"}><FontAwesomeIcon className='nav_socialMedia_icons contact_social_icons' icon={faInstagram} /></Link>
                    <Link to={"#contact"}><FontAwesomeIcon className='nav_socialMedia_icons contact_social_icons' icon={faTelegram} /></Link>
                 </div>
              </div>

              <div className="input_items_wrapper">
                  <form  className='form_contact'>
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
             <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1424.5068168222979!2d69.24321448019303!3d41.30193536880589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bed979a0a33%3A0xeebd9b261cdce82!2sDiscover%20invest!5e1!3m2!1sen!2s!4v1724573102695!5m2!1sen!2s"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Embed"
                  className='google_map'
            />
             </div>
          </div>
       </div>
      </section>
    </>
  )
}

export default Contact

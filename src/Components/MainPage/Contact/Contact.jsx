import React from 'react'
import "./contact.css"
import { IoLocationSharp } from "react-icons/io5";
import { t } from 'i18next'
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
                     <p className='adress_paragraph'>{t("addressText")}</p>
                  </div>
                  <div className="adress_info_item">
                     <h2 className='adress'><FaPhoneVolume className="contact_icons"/>{t("phone")}</h2>
                     <p className='adress_paragraph'>+998 71 288 88 88</p>
                  </div>
                  <div className="adress_info_item">
                     <h2 className='adress'><FaClock />{t("address")}</h2>
                     <p className='adress_paragraph'>{t("addressText")}</p>
                  </div>
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

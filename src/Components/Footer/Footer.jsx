import React from 'react'
import "./footer.css"
import FooterLogo from '../Logos/FooterLogo'
import { t } from 'i18next'
const Footer = () => {
  return (
    <>
      <section className='footer_section'>
          <div className="container">
             <div className="footer_items">
                 <div className="footer_item_left">
                    <FooterLogo/>
                 </div>
                 <div className="footer_item_left">
                    <p className='footer_paragraph'>{t("footerText")}</p>
                 </div>
                 <div className="footer_item_left">
                 </div>
             </div>
          </div> 
      </section>
    </>
  )
}

export default Footer

import React from 'react'
import "../MainAdvantage/MainAdvantage.css"
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingShield, faCommentsDollar, faUsers } from '@fortawesome/free-solid-svg-icons';
import SliderPic from './slider_images/SliderPic';
const MainAdvantage = () => {
    const {t, i18n} = useTranslation();
  return (
    <>
<section className='advantages'>
  <div className="container">
  <div className="adavantages_title" data-aos="fade-down-right">
  <div className="adavantages_title_Text">
      <h2 data-aos="fade-down-right"><span className="yellow_line"></span>{t("ouradvantages")}</h2>
    </div>
  </div>
  <div className="advantages_items" data-aos="fade-down-right">
      <div className="advantages_item">
         <FontAwesomeIcon className='advantages_icon Both_hover' icon={faUsers} />
         <h3 className='Both_hover'>{t("team")}</h3>
         <p>{t("teamText")}</p>
      </div>
      <div className="advantages_item">
         <FontAwesomeIcon className='advantages_icon Both_hover' icon={faCommentsDollar} />
         <h3 className='Both_hover'>{t("postiveCustomer")}</h3>
         <p>{t("postiveCustomerText")}</p>
      </div>
      <div className="advantages_item">
       <FontAwesomeIcon className='advantages_icon Both_hover' icon={faBuildingShield} />  
         <h3 className='Both_hover'>{t("guarantee")}</h3>
         <p>{t("guaranteeText")}</p>
      </div>
  </div>
</div>
</section>

    </>
  )
}

export default MainAdvantage

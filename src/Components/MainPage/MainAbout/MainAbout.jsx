import React from 'react'
import "./MainAbout.css"
import image from '../../../assets/image';
import { useTranslation } from 'react-i18next';
const MainAbout = () => {
    const {t, i18n} = useTranslation();
  return (
    <>
      {/* About Section */}
      <section className='about'>
         <div className="about_Section_left">
            <div className="banner_bg">
            <svg class="about__banner" width="658" height="855" viewBox="0 0 658 855" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.1">
                    <path d="M259.418 86.7901V0H657.706V591.526H541.891L541.954 536.143H605.022V55.3831H312.102V86.7584H511.563V854.691H0V86.7584H259.386L259.418 86.7901ZM99.6832 795.116H450.591V591.557H303.083L99.6832 795.116ZM259.418 554.371V186.061H315.754V532.491H450.591V146.397H61.004V752.943L259.418 554.371Z" fill="#8F8F8F"></path>
                </g>
             </svg>
            </div>

            <div className="container">
              <div className="devide_the_items">
            <div data-aos="fade-up">
                <div className="about_title_text_items">
                      <h2 data-aos="fade-down-right"><span className="yellow_line"></span>{t("aboutText_Title")}</h2>
                      <p data-aos="fade-down-right">{t("aboutText")}</p>
                </div>
            </div>
              <div className="About_right_side" data-aos="fade-up">
                  <div className="columns">
                     <div className="box invisible_item">
                      <h2 className='number'></h2>
                      <p className='text_number'></p>
                     </div>
                     <div className="box">
                      <img src={image.worker} alt="" />
                     <h2 className='number'>4000+</h2>
                     <p className='text_number'>{t("numberEmployee")}</p>
                     </div>
                     <div className="box">
                     <img src={image.worker} alt="" />
                     <h2 className='number'>150+</h2>
                     <p className='text_number'>{t("projects")}</p>
                     </div>
                  
                  </div>
                  <div className="columns">
                     <div className="box ">
                     <img src={image.worker} alt="" />
                     <h2 className='number'>16</h2>
                     <p className='text_number'>{t("resident")}</p>
                     </div>
                     <div className="box">
                      <img src={image.worker} alt="" />
                     <h2 className='number'>14</h2>
                     <p className='text_number'>{t("marketPlace")}</p>
                     </div>
                     <div className="box">
                     <img src={image.worker} alt="" />
                     <h2 className='number'>250+</h2>
                     <p className='text_number'>{t("specialTech")}</p>
                     </div>
                  
                  </div>
                  <div className="columns">
                     <div className="box yellow_box">
                     <h3 className='number_white'>About</h3>
                     </div>
                     <div className="box">
                      <img src={image.worker} alt="" />
                     <h2 className='number'>9+</h2>
                     <p className='text_number'>{t("hospital")}</p>
                     </div>
                     <div className="box invisible_item">
                     <img src={image.worker} alt="" />
                     <h2 className='number'></h2>
                     <p className='text_number'></p>
                     </div>
                  
                  </div>
              </div>
              
              </div>
            </div>
         </div>
      </section>
{/* About Section */}
    </>
  )
}

export default MainAbout

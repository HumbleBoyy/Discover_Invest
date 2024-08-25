import React from 'react'
import "./projects.css"
import "../MainAdvantage/MainAdvantage.css"
import { t } from 'i18next'
import image from '../../../assets/image'
import { Link } from 'react-router-dom'
const Projects = () => {
  return (
    <>
      <section className='MainPage_Projects'>
        <div className="container">
          <div className="projects_items">
             <div className="adavantages_title_Text">
                <h2 data-aos="fade-down-right" className='projects_title'><span className="yellow_line"></span>{t("ourProjects")}</h2>
             </div>

             <div className="projects_wrapper">
             <div class="projects__box aos-init aos-animate" data-aos="fade-up">
                <img src={image.magicCity} alt="discover_invest" className='projects_image'/>
                <div class="content">
                    <a href="#" class="title general__euclid-m">{t("magic")}</a>
                    <p class="subtitle general__euclid-r">{t("magicText")}</p>
                </div>
            </div>
            <div class="projects__box aos-init aos-animate" data-aos="fade-up">
                <img src={image.boulevard} alt="discover_invest" className='projects_image'/>
                <div class="content">
                    <a href="#" class="title general__euclid-m">{t("boulevard")}</a>
                    <p class="subtitle general__euclid-r">{t("boulevardText")}</p>
                </div>
            </div>
            <div class="projects__box aos-init aos-animate" data-aos="fade-up">
                <img src={image.apartment} alt="discover_invest" className='projects_image'/>
                <div class="content">
                    <a href="#" class="title general__euclid-m">{t("gardens")}</a>
                    <p class="subtitle general__euclid-r">{t("gardensText")}</p>
                </div>
            </div>
            <div class="projects__box aos-init aos-animate" data-aos="fade-up">
                <img src={image.fonon} alt="discover_invest" className='projects_image'/>
                <div class="content">
                    <a href="#" class="title general__euclid-m">{t("fonon")}</a>
                    <p class="subtitle general__euclid-r">{t("fononText")}</p>
                </div>
            </div>
            <div class="projects__box aos-init aos-animate" data-aos="fade-up">
                <img src={image.projectsfive} alt="discover_invest" className='projects_image'/>
                <div class="content">
                    <a href="#" class="title general__euclid-m">{t("invento")}</a>
                    <p class="subtitle general__euclid-r">{t("inventoText")}</p>
                </div>
            </div>
            <div class="projects__box aos-init aos-animate" data-aos="fade-up">
                <img src={image.presidentschool} alt="discover_invest" className='projects_image'/>
                <div class="content">
                    <a href="#" class="title general__euclid-m">{t("schools")}</a>
                    <p class="subtitle general__euclid-r">{t("schoolsText")}</p>
                </div>
            </div>
          </div>
          <div className="new_button">
       <div className="main_btns news_button">
            <Link to={"#projects"}>
               <span>{t("allProject")}</span>
            </Link>
        </div>
       </div>
          </div>
          </div>
      </section>
    </>
  )
}

export default Projects

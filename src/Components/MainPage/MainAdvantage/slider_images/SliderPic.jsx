import React, { useRef } from 'react'
import "./slider.css"
import image from '../../../../assets/image';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faL } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
const SliderPic = () => {
  const {t, i18n} = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <>
       <section className='sliderPic'>
        <div className='container'>
           <div className='slideText' data-aos="fade-up">
              <h2 className='slider_title'><span className="yellow_line"></span>{t("team")}</h2>
              <div className='slider_btns'>
                <button className='slider_btn'><FontAwesomeIcon className='slide_icons' icon={faChevronLeft} /></button>
                <button className='slider_btn'><FontAwesomeIcon className='slide_icons' icon={faChevronRight} /></button>
              </div>
           </div>

           <div className="slider-container" data-aos="fade-up">
           <Slider {...settings}>
              <div className='slide_workers'>
                <img src={image.workerOne} alt="Discover_invest_Workers_image" />
                <div className="name_and_job_occupation_name">
                   <h3 className='worker_name'>{t("boltaev")}</h3>
                   <p className='occuopation_name'>{t('managerWorker')}</p>
                </div>
              </div>
              <div className='slide_workers'>
                <img src={image.workerTwo} alt="Discover_invest_Workers_image" />
                <div className="name_and_job_occupation_name">
                   <h3 className='worker_name'>{t("xusanov")}</h3>
                   <p className='occuopation_name'>{t('managerWorker')}</p>
                </div>
              </div>
              <div className='slide_workers'>
                <img src={image.workerThree} alt="Discover_invest_Workers_image" />
                <div className="name_and_job_occupation_name">
                   <h3 className='worker_name'>{t("norbekov")}</h3>
                   <p className='occuopation_name'>{t('managerWorker')}</p>
                </div>
              </div>
              <div className='slide_workers'>
                <img src={image.workerFour} alt="Discover_invest_Workers_image" />
                <div className="name_and_job_occupation_name">
                   <h3 className='worker_name'>{t("artiqbaev")}</h3>
                   <p className='occuopation_name'>{t('managerWorker')}</p>
                </div>
              </div>
              <div className='slide_workers'>
                <img src={image.workerFive} alt="Discover_invest_Workers_image" />
                <div className="name_and_job_occupation_name">
                   <h3 className='worker_name'>{t("kuziev")}</h3>
                   <p className='occuopation_name'>{t('managerConstruct')}</p>
                </div>
              </div>
            </Slider>
           </div>
        </div>
       </section>
    </>
  )
}

export default SliderPic;

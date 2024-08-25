import React from 'react'
import "./news.css"
import "../MainAdvantage/MainAdvantage.css"
import Slider from 'react-slick';
import { t } from 'i18next';
import image from '../../../assets/image';
import { Link } from 'react-router-dom';
const News = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <section className='news_section'>
      <div className="container">
        <div className="adavantages_title_Text">
            <h2 data-aos="fade-down-right"><span className="yellow_line"></span>{t("companyNews")}</h2>
        </div>

    <div className="slider-container">
      <Slider {...settings} className='slider_content' >
        <div class="news__carousel-item">
            <span class="date general__euclid-l">2023-01-27</span>
            <div class="pic">
                <img class="pic__banner" src={image.newsOne} alt="Discover Invest "/>
            </div>
            <div class="content">
                <a href="#https://di.uz/blog-single/16" class="title general__euclid-r">Who is the project manager of construction?</a>
                <a href="#https://di.uz/blog-single/16" class="link general__euclid-r">Подробнее</a>
            </div>
         </div>
         <div class="news__carousel-item">
                    <span class="date general__euclid-l">2023-01-27</span>
                    <div class="pic">
                        <img class="pic__banner" src={image.newsTwo} alt="Discover Invest "/>
                    </div>
                    <div class="content">
                        <a href="#https://di.uz/blog-single/16" class="title general__euclid-r">Who is the project manager of construction?</a>
                        <a href="#https://di.uz/blog-single/16" class="link general__euclid-r">Подробнее</a>
                    </div>
         </div>
         <div class="news__carousel-item">
                    <span class="date general__euclid-l">2023-01-27</span>
                    <div class="pic">
                        <img class="pic__banner" src={image.newsthree} alt="Discover Invest "/>
                    </div>
                    <div class="content">
                        <a href="#https://di.uz/blog-single/16" class="title general__euclid-r">Who is the project manager of construction?</a>
                        <a href="#https://di.uz/blog-single/16" class="link general__euclid-r">Подробнее</a>
                    </div>
         </div>
         <div class="news__carousel-item">
                    <span class="date general__euclid-l">2023-01-27</span>
                    <div class="pic">
                        <img class="pic__banner" src={image.newsFour} alt="Discover Invest "/>
                    </div>
                    <div class="content">
                        <a href="#https://di.uz/blog-single/16" class="title general__euclid-r">Who is the project manager of construction?</a>
                        <a href="#https://di.uz/blog-single/16" class="link general__euclid-r">Подробнее</a>
                    </div>
         </div>
      </Slider>
    </div>
       <div className="new_button">
       <div className="main_btns">
            <Link to={"#projects"}>
               <span>{t("allNews")}</span>
            </Link>
        </div>
       </div>
       </div>
    </section>
  )
}

export default News
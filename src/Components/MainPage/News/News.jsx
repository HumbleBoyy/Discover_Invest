import React from 'react'
import "./news.css"
import "../MainAdvantage/MainAdvantage.css"
import Slider from 'react-slick';
import { t } from 'i18next';
import image from '../../../assets/image';
const News = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        arrows:true,
        slidesToShow: 3,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #fab448; color: #fab448`
          );
        },

        nextArrow: <customNextArrow/>,
        prevArrow: <customPrewArrow/>
      };
  return (
    <section className='news_section'>
      <div className="container">
        <div className="adavantages_title_Text">
            <h2 data-aos="fade-down-right"><span className="yellow_line"></span>{t("companyNews")}</h2>
        </div>


    <div className="slider-container slider_wrapper">
      <Slider {...settings}>
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
       
       </div>
    </section>
  )
}

export default News

function customNextArrow(props){
    const {className, style, onClick} = props

    return(
        <div
         className={className}
         style={{...style, display:"block", background:"red"}}
         onClick={onClick}
        />
    )
}
function customPrewArrow(props){
    const {className, style, onClick} = props

    return(
        <div
         className={className}
         style={{...style, display:"block", background:"green"}}
         onClick={onClick}
        />
    )
}
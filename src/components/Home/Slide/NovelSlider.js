import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../../css/Home/Slide/Slider.css";

class NovelSlider extends Component {

  constructor(props){
    super(props)
    this.state={
      novelSlideList:[
        {imgSrc:'/images/slide/novelSlide/20738136.jpg',title:'육식의 법칙',author:'조대화',publisher:'바른북스'},
        {imgSrc:'/images/slide/novelSlide/20660349.jpg',title:'걸 인 더 다크',author:'조대화',publisher:'홍익출판사'},
        {imgSrc:'/images/slide/novelSlide/20739165.jpg',title:'요나자와 호노부와 고전부',author:'요네자와 호노부',publisher:'엘릭시르'},
        {imgSrc:'/images/slide/novelSlide/20683055.jpg',title:'빽넘버',author:'임선경',publisher:'고즈넉이엔티'},
        {imgSrc:'/images/slide/novelSlide/20657387.jpg',title:'샤프롱',author:'로라 모리아티',publisher:'문학수첩'},
        {imgSrc:'/images/slide/novelSlide/20739167.jpg',title:'명상 살인',author:'카르스텐 두세',publisher:'세계사'},
        {imgSrc:'/images/slide/novelSlide/20677618.jpg',title:'데마케론 프로젝트',author:'마거릿 애트우드',publisher:'인플루엔셜'},
        {imgSrc:'/images/slide/novelSlide/20676775.jpg',title:'8월의 태양',author:'마윤제',publisher:'특별한서재'},
        {imgSrc:'/images/slide/novelSlide/20683050.jpg',title:'가면 올빼미',author:'공애린',publisher:'범우사'},
        {imgSrc:'/images/slide/novelSlide/20689089.jpg',title:'통곡은 들리지 않는다',author:'마루야마 마사키',publisher:'황금가지'},
        {imgSrc:'/images/slide/novelSlide/20554217.jpg',title:'희산 김승학 한국독립사 일대기',author:'김송뢰',publisher:'말굽소리'},
        {imgSrc:'/images/slide/novelSlide/20649199.jpg',title:'1의 비극',author:'노리즈키 린타로',publisher:'포레'},
      ]
    }
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    const {novelSlideList}=this.state
    const result = novelSlideList.map(data=><div id="hard-cover">
      <img src={data.imgSrc} alt="슬라이드 이미지" id="slide-img"></img>
      <h4>{data.title}</h4>
      <h5 id="slide-desc">
      <span>{data.author}</span>
      <span id="bar"></span>
      <span>{data.publisher}</span>
      </h5>
      </div>)
    return (
      <div>
        <Slider {...settings}>
          {result}
        </Slider>
      </div>
    );
  }
}

export default NovelSlider;
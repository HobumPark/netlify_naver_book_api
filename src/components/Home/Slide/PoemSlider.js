import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../../css/Home/Slide/Slider.css";

class PoemlSlider extends Component {

  constructor(props){
    super(props)
    this.state={
        poemSlideList:[
            {imgSrc:'/images/slide/poemSlide/20657800.jpg',title:'소란스러운 세상 속 둘만을 위한 책',author:'데비 텅',publisher:'월북'},
            {imgSrc:'/images/slide/poemSlide/20701265.jpg',title:'내 사랑은 소품처럼 놓아두어야지',author:'홍성민',publisher:'보름달데이'},
            {imgSrc:'/images/slide/poemSlide/20579239.jpg',title:'애프터 레인',author:'알렉산드라 엘르',publisher:'로만'},
            {imgSrc:'/images/slide/poemSlide/20741188.jpg',title:'그립소',author:'유병록',publisher:'난다'},
            {imgSrc:'/images/slide/poemSlide/20701262.jpg',title:'청년 도배사 이야기',author:'배윤슬',publisher:'궁리'},
            {imgSrc:'/images/slide/poemSlide/20711436.jpg',title:'옛날이야기로부터',author:'정승재',publisher:'북팟'},
            {imgSrc:'/images/slide/poemSlide/20724698.jpg',title:'내 맘대로 베란다 원예',author:'이토 세이코',publisher:'플레이타임'},
            {imgSrc:'/images/slide/poemSlide/20739175.jpg',title:'인생이 아름다운 무지개(반양장)',author:'주웅식',publisher:'백산출판사'},
            {imgSrc:'/images/slide/poemSlide/20660422.jpg',title:'나는 누드모델입니다',author:'하영은',publisher:'라곰'},
            {imgSrc:'/images/slide/poemSlide/20685736.jpg',title:'아이 앞에서는 핸드폰 안하려구요',author:'김해연',publisher:'더블:엔'},
            {imgSrc:'/images/slide/poemSlide/20672985.jpg',title:'찰리 브라운과 그의 친구들 이야기',author:'앤드류 파라고',publisher:'더모던'},
            {imgSrc:'/images/slide/poemSlide/20612167.jpg',title:'이백 시전집 6',author:'이백',publisher:'지만지(지식을 만드는지식)'},
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
    const {poemSlideList}=this.state
    const result = poemSlideList.map(data=><div id="hard-cover">
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

export default PoemlSlider;
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../../css/Home/Slide/Slider.css";

class LifeSlider extends Component {

  constructor(props){
    super(props)
    this.state={
      lifeSlideList:[
        {imgSrc:'/images/slide/lifeSlide/20685611.jpg',title:'세상에서 제일 간단한 수납정리',author:'장이숙',publisher:'마음상자'},
        {imgSrc:'/images/slide/lifeSlide/20741174.jpg',title:'초등 온라인 자기주도 공부법',author:'유경숙',publisher:'더메이커'},
        {imgSrc:'/images/slide/lifeSlide/20711456.jpg',title:'명문대 학생들이 어릴때부터 집에서 해온 것',author:'김혜경',publisher:'센시오'},
        {imgSrc:'/images/slide/lifeSlide/20741212.jpg',title:'당신을 위한 육아 나침반',author:'조영애',publisher:'프로방스'},
        {imgSrc:'/images/slide/lifeSlide/20685712.jpg',title:'우리 아이 첫 영어',author:'정진현',publisher:'슬로디미디어'},
        {imgSrc:'/images/slide/lifeSlide/20688796.jpg',title:'베이비 몬테소리 육아대백과',author:'시모네 데이비스',publisher:'키출판사'},
        {imgSrc:'/images/slide/lifeSlide/20682877.jpg',title:'베이비시터 걱정은 그만',author:'민정숙',publisher:'라온북'},
        {imgSrc:'/images/slide/lifeSlide/20683013.jpg',title:'입시를 알면 아이 공부가 쉬워진다',author:'정영은',publisher:'유노라이프'},
        {imgSrc:'/images/slide/lifeSlide/20689122.jpg',title:'슬기로운 부모생활',author:'정은유',publisher:'미다스북스'},
        {imgSrc:'/images/slide/lifeSlide/20748309.jpg',title:'지니포차의 방구석 홈술 라이프',author:'이경진(지니포차)',publisher:'책밥'},
        {imgSrc:'/images/slide/lifeSlide/20738801.jpg',title:'운동 없이 8kg 감량 저탄수화물 다이어트 레시피',author:'이은경',publisher:'메가스터디북스'},
        {imgSrc:'/images/slide/lifeSlide/20740814.jpg',title:'비건의 취향',author:'김한민',publisher:'책구름'},
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
    const {lifeSlideList}=this.state
    const result = lifeSlideList.map(data=><div id="hard-cover">
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

export default LifeSlider;
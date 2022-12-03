import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../../css/Home/Slide/Slider.css";

class SelfSlider extends Component {

  constructor(props){
    super(props)
    this.state={
      selfSlideList:[
        {imgSrc:'/images/slide/selfSlide/20740882.jpg',title:'서재의 마법',author:'김승',publisher:'미디어숲'},
        {imgSrc:'/images/slide/selfSlide/20633714.jpg',title:'데일 카네기 인간관계론',author:'데일 카네기',publisher:'책에반하다'},
        {imgSrc:'/images/slide/selfSlide/20682998.jpg',title:'관계 디자인',author:'박소영',publisher:'부커'},
        {imgSrc:'/images/slide/selfSlide/20731462.jpg',title:'초생산성',author:'마이클 하얏트',publisher:'로크미디어'},
        {imgSrc:'/images/slide/selfSlide/20738113.jpg',title:'신기한 마음 여행 다이어리',author:'김성직',publisher:'소리산'},
        {imgSrc:'/images/slide/selfSlide/20682982.jpg',title:'최고의 변화는 어떻게 만들어지는가',author:'벤저민 하디',publisher:'비즈니스북스'},
        {imgSrc:'/images/slide/selfSlide/20685356.jpg',title:'마은 이후 멋지게 나이 들고 싶습니다',author:'조은강',publisher:'메이트북스'},
        {imgSrc:'/images/slide/selfSlide/20689114.jpg',title:'나를 바꾸면 모든것이 변한다',author:'제임스 알렌',publisher:'이너북'},
        {imgSrc:'/images/slide/selfSlide/20683092.jpg',title:'빨리 은퇴하라',author:'최승영',publisher:'이은북'},
        {imgSrc:'/images/slide/selfSlide/20672363.jpg',title:'진짜 공무원',author:'이철희',publisher:'책과나무'},
        {imgSrc:'/images/slide/selfSlide/20619000.jpg',title:'말꺼리',author:'이선종',publisher:'아이템하우스'},
        {imgSrc:'/images/slide/selfSlide/20657413.jpg',title:'일류 대화법(상대의 마음을 얻는)',author:'기류 미노루',publisher:'산솔미디어'},
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
    const {selfSlideList}=this.state
    const result = selfSlideList.map(data=><div id="hard-cover">
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

export default SelfSlider;
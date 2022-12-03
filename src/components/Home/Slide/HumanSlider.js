import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../../css/Home/Slide/Slider.css";

class HumanSlider extends Component {

  constructor(props){
    super(props)
    this.state={
      humanSlideList:[
        {imgSrc:'/images/slide/humanSlide/20682920.jpg',title:'조지 오웰 진실에 대하여',author:'조지 오웰',publisher:'필로소픽'},
        {imgSrc:'/images/slide/humanSlide/20642480.jpg',title:'슬픔의 해석',author:'리사 슐먼',publisher:'일므디'},
        {imgSrc:'/images/slide/humanSlide/20712652.jpg',title:'우리 학문으로서의 동학',author:'김용휘',publisher:'모시는사람들'},
        {imgSrc:'/images/slide/humanSlide/20688773.jpg',title:'철학 100 문장',author:'개러스 사우스웰',publisher:'미래의창'},
        {imgSrc:'/images/slide/humanSlide/20737974.jpg',title:'보험, 인문학에 빠지다',author:'이경재',publisher:'바른북스'},
        {imgSrc:'/images/slide/humanSlide/20682922.jpg',title:'빅토르 위고와 함께하는 여름',author:'로라 엘 마키',publisher:'뮤진트리'},
        {imgSrc:'/images/slide/humanSlide/20672427.jpg',title:'김종철 시인의 언어 학교를 찾아서',author:'장경렬',publisher:'문학수첩'},
        {imgSrc:'/images/slide/humanSlide/20666396.jpg',title:'블레이드 러너 깊이 읽기',author:'임태훈',publisher:'프시케의숲'},
        {imgSrc:'/images/slide/humanSlide/20677602.jpg',title:'위기의 시대, 인문학이 답하다',author:'이경래',publisher:'경희대학교 출판문화원'},
        {imgSrc:'/images/slide/humanSlide/20633768.jpg',title:'낙연쌤의 파란펜',author:'박상주',publisher:'예미'},
        {imgSrc:'/images/slide/humanSlide/20672446.jpg',title:'수도자처럼 생각하기',author:'제이 셰티',publisher:'다산북스'},
        {imgSrc:'/images/slide/humanSlide/20685372.jpg',title:'매혹의 아이콘-내가 읽은 21세기의 시인들',author:'이숭원',publisher:'파란'},
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
    const {humanSlideList}=this.state
    const result = humanSlideList.map(data=><div id="hard-cover">
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

export default HumanSlider;
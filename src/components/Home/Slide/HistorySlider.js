import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../../css/Home/Slide/Slider.css";

class HistorySlider extends Component {

  constructor(props){
    super(props)
    this.state={
      historySlideList:[
        {imgSrc:'/images/slide/historySlide/20743750.jpg',title:'인간은 왜 불평등해졌을까',author:'알랭 테스타',publisher:'퍼플'},
        {imgSrc:'/images/slide/historySlide/20666090.jpg',title:'10년 후 세계사',author:'구정은',publisher:'추수밭'},
        {imgSrc:'/images/slide/historySlide/20701263.jpg',title:'한 권으로 읽는 조선 인물실록',author:'김형광',publisher:'시아'},
        {imgSrc:'/images/slide/historySlide/20711877.jpg',title:'독일 통합의 비전을 제시한 프리드리히 2세',author:'김장수',publisher:'푸른사상'},
        {imgSrc:'/images/slide/historySlide/20701286.jpg',title:'하룻밤에 읽는 한국 근현대사',author:'최용범',publisher:'페이퍼로드'},
        {imgSrc:'/images/slide/historySlide/20731821.jpg',title:'일연과 13세기, 나는 이렇게 본다',author:'고운기',publisher:'보리'},
        {imgSrc:'/images/slide/historySlide/20633855.jpg',title:'아리랑 민족의 디아스포라',author:'이혜옥',publisher:'글을읽다'},
        {imgSrc:'/images/slide/historySlide/20672451.jpg',title:'역사를 배우는 사람들',author:'도쿄역사과학연구회',publisher:'어문학사'},
        {imgSrc:'/images/slide/historySlide/20682893.jpg',title:'발견, 한서 라는 역사책',author:'가옵순',publisher:'북드라망'},
        {imgSrc:'/images/slide/historySlide/20740881.jpg',title:'민속의 착함 삶의 온기를 담다',author:'임승범',publisher:'흐름출판사'},
        {imgSrc:'/images/slide/historySlide/20682858.jpg',title:'또 하나의 조선',author:'이숙인',publisher:'한겨례 출판사'},
        {imgSrc:'/images/slide/historySlide/20653194.jpg',title:'세상이 탐한 보석의 역사',author:'에이자 레이든',publisher:'다른'},
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
    const {historySlideList}=this.state
    const result = historySlideList.map(data=><div id="hard-cover">
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

export default HistorySlider;
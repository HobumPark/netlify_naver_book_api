import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../../css/Home/Slide/Slider.css";

class EcoSlider extends Component {

  constructor(props){
    super(props)
    this.state={
        ecoSlideList:[
            {imgSrc:'/images/slide/ecoSlide/20739181.jpg',title:'지시 말고 질문하라',author:'이관노',publisher:'씽크스마트'},
            {imgSrc:'/images/slide/ecoSlide/20740868.jpg',title:'코로나 시대의 역발상 트렌드',author:'민병운',publisher:'부키'},
            {imgSrc:'/images/slide/ecoSlide/20740879.jpg',title:'금융 초보자가 가장 알고 싶은 최다질문 TOP80',author:'김유성',publisher:'메이트북'},
            {imgSrc:'/images/slide/ecoSlide/20685722.jpg',title:'이것이 마이데이터다',author:'고은이',publisher:'슬로디미디어'},
            {imgSrc:'/images/slide/ecoSlide/20701410.jpg',title:'나의 첫 경제 공부',author:'오무라 오지로',publisher:'바다출판사'},
            {imgSrc:'/images/slide/ecoSlide/20711812.jpg',title:'이것이 ESG다',author:'매일경제 ESG팀',publisher:'매일경제 신문사'},
            {imgSrc:'/images/slide/ecoSlide/20634302.jpg',title:'다시 브랜딩을 생각하다',author:'스티븐 고',publisher:'청림출판'},
            {imgSrc:'/images/slide/ecoSlide/20618684.jpg',title:'이웃집 투자자들',author:'조슈아 브라운',publisher:'이너북'},
            {imgSrc:'/images/slide/ecoSlide/20732043.jpg',title:'당신의 유튜브를 컨설팅해드립니다',author:'유튜브랩(강민형)',publisher:'21세기북스'},
            {imgSrc:'/images/slide/ecoSlide/20682926.jpg',title:'(개정판)쇼핑의 과학',author:'파코 언더힐',publisher:'세종서적'},
            {imgSrc:'/images/slide/ecoSlide/20701464.jpg',title:'국내외 반려동물관련 산업분석보고서',author:'비피기술거래',publisher:'비티타임즈'},
            {imgSrc:'/images/slide/ecoSlide/20672933.jpg',title:'절망의 죽음과 자본주의의 미래',author:'앵거스 디턴',publisher:'한국경제'},
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
    const {ecoSlideList}=this.state
    const result = ecoSlideList.map(data=><div id="hard-cover">
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

export default EcoSlider;

import React,{Component} from 'react';
import "../../css/Home/HomeSideBar.css";
import $ from 'jquery';

class HomeSideBar extends Component {
  
  componentDidMount(){
    $(document).ready(function(){
      var idx=0
      $("#home-side-top>li").hover(
      function(){
          idx=$(this).index()   
          console.log(idx,"번째!")
          console.log('mouserenter')
          $("#home-side-top>li").eq(idx).find("#home-side-lnb").show()
          //호버시 메뉴 모양 변경
          $("#home-side-top>li").eq(idx).find('span').removeClass("home_side_li"+(idx+1))
          $("#home-side-top>li").eq(idx).find('span').addClass("home_side_li"+(idx+1)+"_hover")
      },
      function(){
          console.log('mouserleave')
          $("#home-side-top>li").find("#home-side-lnb").hide()
          //호버시 메뉴 모양 변경
          $("#home-side-top>li").eq(idx).find('span').removeClass("home_side_li"+(idx+1)+"_hover")
          $("#home-side-top>li").eq(idx).find('span').addClass("home_side_li"+(idx+1))
      }
      )
    });
  }

  render(){
    return (
    <div id="home-side">
        <ul id="home-side-top">
          <li>
            <a href="#">
              <span className="home_side_li1"></span>
              <ul id="home-side-lnb">
                <li><a href="#">나라별 소설</a></li>
                <li><a href="#">고전/문학</a></li>
                <li><a href="#">장르소설</a></li>
                <li><a href="#">테마소설</a></li>
              </ul>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="home_side_li2"></span>
            <ul id="home-side-lnb">
                <li><a href="#">한국시</a></li>
                <li><a href="#">외국시</a></li>
                <li><a href="#">그림/포토 에세이</a></li>
                <li><a href="#">독서 에세이</a></li>
                <li><a href="#">명상 에세이</a></li>
                <li><a href="#">성공 에세이</a></li>
                <li><a href="#">여행 에세이</a></li>
                <li><a href="#">연애/사랑 에세이</a></li>
                <li><a href="#">인물 에세이</a></li>
                <li><a href="#">삶의 지혜/명언</a></li>
            </ul>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="home_side_li3"></span>
            <ul id="home-side-lnb">
                <li><a href="#">경제</a></li>
                <li><a href="#">경영</a></li>
                <li><a href="#">마케팅/세일즈</a></li>
                <li><a href="#">재테크/투자</a></li>
                <li><a href="#">창업/취업</a></li>
            </ul>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="home_side_li4"></span>
            <ul id="home-side-lnb">
                <li><a href="#">대화/협상</a></li>
                <li><a href="#">성공/처세</a></li>
                <li><a href="#">시간관리</a></li>
                <li><a href="#">인간관계</a></li>
                <li><a href="#">자기능력계발</a></li>
            </ul>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="home_side_li5"></span>
            <ul id="home-side-lnb">
                <li><a href="#">인문일반</a></li>
                <li><a href="#">심리</a></li>
                <li><a href="#">교육학</a></li>
                <li><a href="#">철학</a></li>
                <li><a href="#">문학론</a></li>
                <li><a href="#">언어학/기호학</a></li>
                <li><a href="#">종교학</a></li>
                <li><a href="#">신화</a></li>
            </ul>
            </a>
          </li>
          <li><a href="#"><span className="home_side_li6"></span></a></li>
          <li><a href="#"><span className="home_side_li7"></span></a></li>
          <li><a href="#"><span className="home_side_li8"></span></a></li>
          <li><a href="#"><span className="home_side_li9"></span></a></li>
          <li><a href="#"><span className="home_side_li10"></span></a></li>
          <li><a href="#"><span className="home_side_li11"></span></a></li>
          <li><a href="#"><span className="home_side_li12"></span></a></li>
          <li><a href="#"><span className="home_side_li13"></span></a></li>
          <li><a href="#"><span className="home_side_li14"></span></a></li>
          <li><a href="#"><span className="home_side_li15"></span></a></li>
          <li><a href="#"><span className="home_side_li16"></span></a></li>
          <li><a href="#"><span className="home_side_li17"></span></a></li>
          <li><a href="#"><span className="home_side_li18"></span></a></li>
          <li><a href="#"><span className="home_side_li19"></span></a></li>
          <li><a href="#"><span className="home_side_li20"></span></a></li>
          <li><a href="#"><span className="home_side_li21"></span></a></li>
          <li><a href="#"><span className="home_side_li22"></span></a></li>
          <li><a href="#"><span className="home_side_li23"></span></a></li>
          <li><a href="#"><span className="home_side_li24"></span></a></li>
          <li><a href="#"><span className="home_side_li25"></span></a></li>
        </ul>
        <ul id="home-side-bot">
        <li><a href="#"><span className="home_side_li26"></span></a></li>
        <li><a href="#"><span className="home_side_li27"></span></a></li>
        <li><a href="#"><span className="home_side_li28"></span></a></li>
        </ul>
    </div>
  );
  }
}

export default HomeSideBar;

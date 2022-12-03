
import React,{Component} from 'react';
import "../../css/Home/HomeContents.css";
import Yes24Tab from './TabMenu/Yes24Tab.js';
import Inetkyobo from './TabMenu/Inetkyobo.js';

import $ from 'jquery';

class HomeContents extends Component {

  componentDidMount(){
    var list=['yes24','inet_kyobo','aladin','interpark_books','yp_books','book11st','connects_book']
    $(document).ready(function(){
      $("#home-contents-btn-area>ul>li").click(function(){
          var idx=0
          idx=$(this).index()
          alert("클릭:"+idx+"번째")
          //다 비활성화 시키곤
          for(var i=0; i<=6; i++){
            $("#home-contents-btn-area>ul>li").eq(i).find('span').removeClass(list[i]+"_on")
            $("#home-contents-btn-area>ul>li").eq(i).find('span').addClass(list[i])
          }
          //클릭한것만 활성화
          $("#home-contents-btn-area>ul>li").eq(idx).find('span').removeClass(list[idx])
          $("#home-contents-btn-area>ul>li").eq(idx).find('span').addClass(list[idx]+'_on')

          //밑의 탭메뉴
          $("#home-contents-cont-area>#tab>div").hide();
          $("#home-contents-cont-area>#tab>div").eq(idx).show();
      })
    });
  }


  render(){
    return (
    <div id="home-contents">
        <div id="home-contents-title">
            <span className="this_week_bestseller"></span>
        </div>
        <div id="home-contents-btn-area">
           <ul id="top_ul">
             <li><a href="#"><span className="yes24_on"></span></a></li>
             <li><a href="#"><span className="inet_kyobo"></span></a></li>
             <li><a href="#"><span className="aladin"></span></a></li>
             <li><a href="#"><span className="interpark_books"></span></a></li>
             <li><a href="#"><span className="yp_books"></span></a></li>
             <li><a href="#"><span className="book11st"></span></a></li>
             <li><a href="#"><span className="connects_book"></span></a></li>
           </ul>
        </div>
        <div id="home-contents-cont-area">
            <div id="tab">
                <Yes24Tab></Yes24Tab>
                <Inetkyobo></Inetkyobo>
            </div>
            <div id="see-more">
                <div id="see-more-inner">
                  <span>
                    <a href="#">
                    더보기
                    </a>
                  </span>
                </div>
            </div>
        </div>
    </div>
  );
  }
}

export default HomeContents;

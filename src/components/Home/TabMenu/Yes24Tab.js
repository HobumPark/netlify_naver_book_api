import React, { Component } from 'react';
import '../../../css/Home/TabMenu/Yes24Tab.css';
import $ from 'jquery';

class Yes24Tab extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        $(document).ready(function(){
          var idx=0
          $("#yes24-tab>ul>li").click(function(){
            alert("click!")
            idx=$(this).index()

            $("#yes24-tab-contents>div").hide()
            $("#yes24-tab-contents>div").eq(idx).show()

          }
              
          )

        });
    }

    render() {

        return (
            <div id="yes24-tab">
                <ul id="bot_ul">
                    <li><a href="#"><span className="total_off"></span></a></li>
                    <li><a href="#"><span className="novel_off"></span></a></li>
                    <li><a href="#"><span className="poem_and_essay_off"></span></a></li>
                    <li><a href="#"><span className="economy_and_manage_off"></span></a></li>
                    <li><a href="#"><span className="child_off"></span></a></li>
                    <li><a href="#"><span className="infant_off"></span></a></li>
                    <li><a href="#"><span className="history_and_culture_off"></span></a></li>
                    <li><a href="#"><span className="human_off"></span></a></li>
                    <li><a href="#"><span className="human_off"></span></a></li>
                    <li><a href="#"><span className="human_off"></span></a></li>
                </ul>
                <div id='yes24-tab-contents'>
                    <div id="tab-cont1">
                        Yes24-탭컨텐츠1
                        <ul id="top">
                            <li><a href="#">  
                                <h3>1</h3> 
                                <span>
                                    <img src="./images/TabMenu/yes24Tab/16823099.jpg"/>
                                </span>
                                
                                <h1>어떻게 말해줘야 할까</h1>
                                <h2>오은영</h2>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <h3>2</h3> 
                                <span>
                                    <img src="./images/TabMenu/yes24Tab/20788665.jpg"/>
                                </span>
                                    <h1>4~7세보다 중요한 시기는 없습니다.</h1>
                                    <h2>이임숙</h2>    
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <h3>3</h3> 
                                <span>
                                    <img src="./images/TabMenu/yes24Tab/17546229.jpg"/>
                                </span>
                                    <h1>하루 한 장 365 인문학 달력</h1>
                                    <h2>김종원</h2>    
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <h3>4</h3> 
                                <span>
                                    <img src="./images/TabMenu/yes24Tab/21402733.jpg"/>
                                </span>
                                    <h1>임포스터</h1>
                                    <h2>리사손</h2>    
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <h3>5</h3> 
                                <span>
                                    <img src="./images/TabMenu/yes24Tab/20828223.jpg"/>
                                </span>
                                    <h1>EBS 당신의 문해력</h1>
                                    <h2>김윤정</h2>    
                                </a>
                            </li>
                        </ul>
                        <ul id="bottom">
                            <li>
                                <a href="#">
                                    <h3>6</h3> 
                                    <span>
                                    <img src="./images/TabMenu/yes24Tab/21356199.jpg"/>
                                    </span>   
                                    
                                    <h1>영어 공부 잘하는 아이는 이렇게 공..</h1>
                                    <h2>김도연</h2>    
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h3>7</h3>     
                                    <span>
                                    <img src="./images/TabMenu/yes24Tab/21404506.jpg"/>
                                    </span>  
                                    <h1>소워니놀이터의 띠부띠부 직업놀이</h1>
                                    <h2>조윤성</h2>    
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h3>8</h3>     
                                    <span>
                                    <img src="./images/TabMenu/yes24Tab/21079733.jpg"/>
                                    </span>
                                    <h1>아들의뇌</h1>
                                    <h2>곽윤정</h2>    
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h3>9</h3> 
                                    <span>
                                    <img src="./images/TabMenu/yes24Tab/14257644.jpg"/>
                                    </span>
                                    <h1>튼이 이유식</h1>
                                    <h2>정주희</h2>    
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h3>10</h3>     
                                    <span>
                                    <img src="./images/TabMenu/yes24Tab/21367076.jpg"/>
                                    </span>
                                    <h1>어린이를 위한 초등매일 글쓰기의 힘</h1>
                                    <h2>이은경</h2>    
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="tab-cont2">
                        Yes24-탭컨텐츠2
                    </div>
                </div>
            </div>
        );
    }
}

export default Yes24Tab;
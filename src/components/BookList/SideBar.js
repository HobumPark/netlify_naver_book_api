import React, { Component } from 'react';
import "../../css/BookList/SideBar.css";

class SideBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="side-bar">
                <div id="side-head">
                    <span>전체</span>
                    <span>1645건</span>
                </div>
                <div id="ul1">
                    <h1>화제의책</h1>
                    <ul>
                      <li><a href="#">신간</a></li>
                      <li><a href="#">베스트셀러</a></li>
                      <li><a href="#">스테디셀러</a></li>
                    </ul>
                </div>
                <div id="ul2">
                    <h1>분야별</h1>
                    <ul>
                      <li><a href="#">인문</a></li>
                      <li><a href="#">취업/수험서</a></li>
                      <li><a href="#">학습/참고서</a></li>
                      <li><a href="#">과학/공학</a></li>
                      <li><a href="#">시/에세이</a></li>
                    </ul>
                    <span id="more"><a href="#">더보기</a></span>
                </div>
                <div id="ul3">
                    <h1>추천 책</h1>
                    <ul>
                      <li><a href="#">오늘의책</a></li>
                      <li><a href="#">지서재</a></li>
                      <li><a href="#">학습/참고서</a></li>
                      <li><a href="#">과학/공학</a></li>
                      <li><a href="#">시/에세이</a></li>
                    </ul>
                </div>
                <div id="ul4">
                    <h1>추천 책</h1>
                    <ul>
                      <li><a href="#">오늘의책</a></li>
                      <li><a href="#">지서재</a></li>
                      <li><a href="#">TV책을말하다</a></li>
                    </ul>
                </div>
                <div id="ul5">
                    <h1>시리즈</h1>
                    <ul>
                      <li><a href="#">호모사피엔스의 축제</a></li>
                      <li><a href="#">호모사피엔스의 축제</a></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default SideBar;

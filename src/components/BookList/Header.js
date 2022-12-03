import React, { Component } from 'react';
import "../../css/BookList/Header.css";

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="header">
              <div id="menu">
                  분야별 찾기
              </div>
              <div id="search-result">
                <span id="search-text">'{this.props.bookName}'</span>에 대한 검색결과
              </div>
              <div id="search-tab">
              <input type="radio" name="radio-search"/>
              <label>책 검색</label>
              <input type="radio" name="radio-search"/>
              <label>본문 검색</label>
              </div>

            </div>
        );
    }

}

export default Header;

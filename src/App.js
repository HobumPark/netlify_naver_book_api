
import React,{Component} from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import Home from './components/Home.js';
import Search from './components/Search.js';
import "./App.css";
import "./sprite.css";

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      searchText:''
    }
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  searchBook=()=>{
    const {searchText}=this.state
    const trimSearchText = searchText.trim()
    if(trimSearchText===''){
      alert("검색어를 입력하세요!")
      return
    }
    window.location.href='/search?bookName='+searchText
  }

  onKeyPress=(e)=>{
      if(e.key=='Enter'){
            this.searchBook()
      }
  }

  render(){
    return (
    <BrowserRouter>
        <div id="search-area"> 
            <div id="search-left">
            <a href="/"><img src="/images/bi_naver.gif" alt="로고"/></a>
            <a href="#"><img src="/images/h_book.gif" alt="로고"/></a>
            <a href="#"><img src="/images/h_ebook.gif" alt="로고"/></a>
            <a href="#"><img src="/images/h_audio.png" alt="로고"/></a>
            </div>

            <div id="search-input">
            <input type="text" onChange={this.handleChange} onKeyPress={this.onKeyPress} 
            name="searchText" id="searchText-input"/>
            <input type="image" src="/images/btn_search.gif"
            onClick={this.searchBook}></input>
            <input type="image" src="/images/btn_united_search.gif"></input>
            <span className="detail_search_off"><a></a></span>
            </div>

            <div id="search-right">
              <a href="#"><span>로그인</span></a>
              <a href="#"><span>회원가입</span></a>
            </div>
        </div>
        
        <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
  );
  }
}

export default App;

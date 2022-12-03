
import React,{Component} from 'react';
import "../css/Search.css";
import queryString from 'query-string'
import axios from 'axios';

import BookList from './BookList.js';
import PageNation from './PageNation.js';
import BookListFooter from './BookList/BookListFooter.js';

class Search extends Component {

  constructor(props){
    super(props)
    this.state={
      bookName:'',
      bookList:[],
      bookPerPage:5,
      totalBookLength:0,
      currentPage:1
    }
  }

  setCurrentPage=(page)=>{
    const {bookPerPage,totalBookLength,}=this.state
    const endPage=Math.ceil(totalBookLength / bookPerPage)
      if(page < 1 || page > endPage){
        alert('이동불가!')
        return
      }

      this.setState({
        currentPage:page
      })
  }

  getBookList = async(bookName)=>{
    await axios({
      method: 'get',
      url: `/v1/search/book.json?query="${bookName}"`,
      dataType: 'json',
      headers:{
        "X-Naver-Client-Id":'zFDQgS5mmKH9DVb3aECH',
        "X-Naver-Client-Secret":'QSBQLQ4Xhd'
      },
    })
    .then(response =>
        {
          console.log(response);
          this.setState({
            bookList:response.data.items
          },function(){
            this.setState({
              totalBookLength:this.state.bookList.length
            })
          })
        }
    );
  }

  componentDidMount(){
    console.log("location객체 출력")
      console.log("1",window.location)
      console.log("2",window.location.href)
      console.log("3",window.location.search)
      //?bookName=%EC%82%AC%ED%94%BC%EC%97%94%EC%8A%A4
      //?bookName="사피엔스"
      //?parameter1="value1"&parameter2="value2"
      const queryObj=queryString.parse(window.location.search)
        //queryString이 파라미터와 값 구문분석해줌...
        //window.location.search구문분석

      console.log("4",queryObj)
      //구문분석이 완료된 결과:{bookName: '사피엔스'}
      console.log("5",queryObj.bookName)
      //queryObj.bookName 책이름으로 네이버 검색 API 
      //axios날려서 결과를 한번 받아봅시다.
      const bookName=queryObj.bookName
    this.setState({
      bookName:bookName
    })
    this.getBookList(bookName)

  }

  currentBookList=(totalBookList)=> {
    if(totalBookList === []){
      alert("책데이터가 없음!")
      return;
    }
    const {currentPage,bookPerPage}=this.state;
    const indexOfLast = currentPage * bookPerPage;
    const indexOfFirst = indexOfLast - bookPerPage;
    const sliceBookList = totalBookList.slice(indexOfFirst, indexOfLast);
    return sliceBookList;
  }

  render(){
    const {bookList,bookPerPage,totalBookLength,currentPage,bookName}=this.state
    return (
    <div id="search">
      <BookList bookList={this.currentBookList(bookList)}
      bookName={bookName}></BookList>
      <PageNation bookPerPage={bookPerPage}
      totalBookLength={totalBookLength} currentPage={currentPage}
      setCurrentPage={this.setCurrentPage}></PageNation>
      <BookListFooter></BookListFooter>
    </div>
  );
  }
}

export default Search;

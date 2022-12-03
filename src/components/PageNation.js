
import React, { Component } from 'react';
import '../css/PageNation.css';
import queryString from 'query-string';

class PageNation extends Component {

    constructor(props){
        super(props);
        this.state={
            totalBookLength:this.props.totalBookLength,
            bookPerPage:this.props.bookPerPage,
            currentPage:this.props.currentPage,
            bookName:''
        }
    }

    pageClick=(page)=>{
        alert("pageClick:"+page);
        this.props.setCurrentPage(page);
    }

    prevFunc=()=>{
        const {currentPage}=this.props
        this.props.setCurrentPage(currentPage-1)
        alert("prevFunc");
    }

    nextFunc=()=>{
        const {currentPage}=this.props
        this.props.setCurrentPage(currentPage+1)
        alert("nextFunc");
    }

    componentDidMount(){

    }

    render(){
        const {bookName}=this.state
        const {totalBookLength,bookPerPage,currentPage}=this.props;
        /*페이지 배열 추가*/
        let pageNumbers = [];
        console.log(totalBookLength);
        console.log(bookPerPage);
        for (let i = 1; i <= Math.ceil(totalBookLength / bookPerPage); i++) {
        pageNumbers.push(i);
        }
        console.log(pageNumbers);

        var i=1;
        const pageList=pageNumbers.map((page,idx)=>(
            <span id="page" 
            className={currentPage == page? "active" : null}
            key={idx} onClick={()=>this.pageClick(page)}>
                {page}
            </span>
                )
            );

        return (
    <div id="PageNation">
        {/* <span>페이지당 포스트 갯수:{bookPerPage}</span><br/>
        <span>현재 페이지:{currentPage}</span><br/>
        <span>총 포스트 갯수:{totalBookLength}</span><br/> */}

        <div className="pageList">
        <a href="#" id="page" onClick={this.prevFunc}>&lt;</a>
        {pageList}
        <a href="#" id="page" onClick={this.nextFunc}>&gt;</a>
        </div>
        {/* <div>
           {bookName}에 대한 본문검색 결과
        </div> */}
    </div>
        );
    }

}

export default PageNation;

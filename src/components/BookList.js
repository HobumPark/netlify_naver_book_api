import React, { Component } from 'react';
import Book from './Book.js';
import '../css/BookList.css';
import Header from './BookList/Header.js';
import SideBar from './BookList/SideBar.js';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const result = this.props.bookList.map(book => (
            <Book imgSrc={book.image} 
                title={book.title}
                author={book.author}
                publisher={book.publisher}
                pubdate={book.pubdate}
                price={book.Price}
                discount={book.discount}
                desc={book.description}></Book>)
        )
        return (
            <div id="main-wrap">
                    <Header bookName={this.props.bookName}>

                    </Header>
                <div id="contents">
                      <SideBar>

                      </SideBar>
                    <div id="book-list">
                        {result}
                    </div>
                </div>
            </div>
        );
    }
}
export default BookList;

import React, { Component } from 'react';
import "../css/Book.css";

class Book extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
    let target = document.getElementById('title-area');
    let src = target.innerText;
    console.log( 'src(innerText)',src );
    /*
    src(innerText) <b>사피엔스</b> 그래픽 히스토리 2 (문명의 기둥)    
    */
    //src=target.innerHTML;
    //console.log( 'src(innerHTML)',src );
    /*
    src(innerHTML) &lt;b&gt;사피엔스&lt;/b&gt; 그래픽 히스토리 2 (문명의 기둥)
    */
    let extractedText = src.replace(/(<([^>]+)>)/ig,"");
    //replace메서드와 태그를 제거하는 정규표현식으로 태그를 제거한다.
    console.log( 'extractedText',extractedText );
    document.getElementById('title-area').innerHTML=extractedText
    }

    render() {
        const regex = /(<([^>]+)>)/ig;
        const edit_title=this.props.title.replace(regex, '')
        const edit_desc=this.props.desc.replace(regex, '')
        return (
            <div id="book">
                <div id="book-left">
                    <img src={this.props.imgSrc} />
                </div>
                <div id="book-right">
                    <div id="title-area">
                        {edit_title}
                    </div>
                    <div id="author-area">
                        <span>{this.props.author}</span>
                        <span>{this.props.publisher}</span>
                        <span>{this.props.pubdate}</span>
                    </div>
                    <div id="price-area">
                        <span>{this.props.price}</span>
                        <span>{this.props.discount}원</span>
                    </div>
                    <div id="desc-area">
                        {edit_desc}
                    </div>
                </div>

            </div>
        );
    }

}

export default Book;
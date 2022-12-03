import React, { Component } from 'react';
import '../../../css/Home/TabMenu/Inetkyobo.css';
import $ from 'jquery';

class Inetkyobo extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        $(document).ready(function(){
          var idx=0
          $("#inet-kyobo-tab>ul>li").click(function(){
            alert("click!")
            idx=$(this).index()

            $("#inet-kyobo-tab-contents>div").hide()
            $("#inet-kyobo-tab-contents>div").eq(idx).show()

          }
              
          )

        });
    }

    render() {

        return (
            <div id="inet-kyobo-tab">
                <ul id="bot_ul">
                    <li><a href="#"><span className="total_off"></span></a></li>
                    <li><a href="#"><span className="novel_off"></span></a></li>
                    <li><a href="#"><span className="poem_off"></span></a></li>
                </ul>
                <div id='inet-kyobo-tab-contents'>
                    <div id="tab-cont1">
                        인터넷교보문고-탭컨텐츠1
                    </div>
                    <div id="tab-cont2">
                        인터넷교보문고-탭컨텐츠2
                    </div>
                </div>
            </div>
        );
    }

}

export default Inetkyobo;

import React, { Component } from 'react';
import "../../css/Home/HomeFooter.css";

class HomeFooter extends Component {
    render() {
        return (
            <footer id="home-footer">
                <div id="footer1">
                    <ul>
                        <li><a href="#"><img src="/images/img_cp_yes24.gif"></img></a></li>
                        <li><a href="#"><img src="/images/img_cp_bandinlunis.gif"></img></a></li>
                        <li><a href="#"><img src="/images/img_cp_aladdin_2.gif"></img></a></li>
                        <li><a href="#"><img src="/images/img_cp_interpark.gif"></img></a></li>
                        <li><a href="#"><img src="/images/img_cp_kangcom.gif"></img></a></li>
                        <li><a href="#"><img src="/images/img_cp_11st.gif"></img></a></li>
                        <li><a href="#"><img src="/images/img_cp_kyobo.gif"></img></a></li>
                        <li><a href="#"><img src="/images/img_cp_ypbooks_v2.gif"></img></a></li>
                        <li><a href="#"><img src="/images/connectsbook.png"></img></a></li>
                    </ul>
                </div>

                <div id="footer2">
                    <ul>
                        <li><a href="#">이용약관</a></li>
                        <li><a href="#">개인정보처리방침</a></li>
                        <li><a href="#">책임의 한계와 법적고지</a></li>
                        <li><a href="#">도서관 안내</a></li>
                        <li><a href="#">책 고객센터</a></li>
                    </ul>
                </div>
                <div id="footer3">
                    <span>네이버책은 통신판매중개자로서 통신판매의 당사자가 아니며, 상품 주문, 배송 및 환불의 의무와 책임은 각 판매업체에 있습니다.</span>
                    <span>본 콘텐츠의 저작권은 저자 또는 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적책임을 질 수 있습니다.</span>
                    <span>외부 저작권자가 제공한 콘텐츠는 네이버의 입장과 다를 수 있습니다.</span>
                </div>
                <div id="footer4">
                    <span>
                        <ul>
                            <li>사업자등록번호 : 220-81-62517</li>
                            <li>통신판매업 신고번호 : 경기성남 제 2006 - 692호</li>
                            <li>대표이사 : 한성숙</li>
                            <li><a href="#">사업자등록정보 확인</a></li>
                        </ul>
                    </span>
                    <span>
                        <ul>
                            <li>주소 : 경기도 성남시 분당구 불정로 6 네이버 그린팩토리 463-867</li>
                            <li>대표전화 : 1588-3820</li>
                        </ul>
                    </span>
                </div>
                <div id="footer5">
                        <ul>
                            <li><img src="/images/bi_naver.gif" alt="로고"/></li>
                            <li>Copyright ©</li>
                            <li><a href="#">NAVER Corp.</a></li>
                            <li>All Rights Reserved.</li>
                        </ul>
                </div>
            </footer>
        );
    }
}

export default HomeFooter;

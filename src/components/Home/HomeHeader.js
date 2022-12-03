
import React,{Component} from 'react';
import "../../css/Home/HomeHeader.css";

class HomeHeader extends Component {
  render(){
    return (
    <header id="home-header">
        <ul>
          <li><a href="#"><span className="home_header_li1"></span></a></li>
          <li><a href="#"><span className="home_header_li2"></span></a></li>
          <li><a href="#"><span className="home_header_li3"></span></a></li>
          <li><a href="#"><span className="home_header_li4"></span></a></li>
        </ul>
    </header>
  );
  }
}

export default HomeHeader;

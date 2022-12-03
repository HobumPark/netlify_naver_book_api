
import React,{Component} from 'react';
import "../../css/Home/HomeMain.css";
import HomeSlide from './HomeSlide';
import HomeContents from './HomeContents';
import HomeSideBar from './HomeSideBar';

class HomeMain extends Component {
  render(){
    return (
    <div id="home-main">
        <div id="left-side">
            <HomeSideBar></HomeSideBar>
        </div>
        <div id="right-side">
            <HomeSlide></HomeSlide>
            <HomeContents></HomeContents>
        </div> 
    </div>
  );
  }
}

export default HomeMain;


import React,{Component} from 'react';
import "../css/Home.css";
import HomeHeader from './Home/HomeHeader';
import HomeMain from './Home/HomeMain';
import HomeFooter from './Home/HomeFooter';

class Home extends Component {
  render(){
    return (
    <div id="home">
       <HomeHeader></HomeHeader>
       <HomeMain></HomeMain>
       <HomeFooter></HomeFooter>
    </div>
  );
  }
}

export default Home;

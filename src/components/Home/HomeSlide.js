
import React,{Component} from 'react';
import "../../css/Home/HomeSlide.css";
import NovelSlider from './Slide/NovelSlider';
import PoemSlider from './Slide/PoemSlider';
import EcoSlider from './Slide/EcoSlider';
import SelfSlider from './Slide/SelfSlider';
import HumanSlider from './Slide/HumanSlider';
import HistorySlider from './Slide/HistorySlider';
import LifeSlider from './Slide/LifeSlider';

import $ from 'jquery';

class HomeSlide extends Component {

  constructor(props){
    super(props)
    this.state={
      novelSlide:true,
      poemSlide:false,
      ecoSlide:false,
      selfSlide:false,
      humanSlide:false,
      historySlide:false,
      lifeSlide:false
    }
  }
  slideSelect=(e)=>{
    var name = e.target.getAttribute('name'); 
    alert(name)

    this.AllSlideOff()

    this.setState({
      [name]:true
    })

  }

  AllSlideOff=()=>{
    this.setState({
      novelSlide:false
    })
    this.setState({
      poemSlide:false
    })
    this.setState({
      ecoSlide:false
    })
    this.setState({
      selfSlide:false
    })
    this.setState({
      humanSlide:false
    })
    this.setState({
      historySlide:false
    })
    this.setState({
      lifeSlide:false
    })
  }

  componentDidMount(){
    $(document).ready(function(){
      var idx=0
      $("#tab-btn-area>ul>li").click(
      function(){
          idx=$(this).index()
          console.log(idx+"번째 클릭")
            for(var i=0; i<=6; i++){
              $("#tab-btn-area>ul>li").eq(i).find('span').removeClass('new_book_slide_li'+(i+1)+'_on')
              $("#tab-btn-area>ul>li").eq(i).find('span').addClass('new_book_slide_li'+(i+1)+'_off')
            }
            
            $("#tab-btn-area>ul>li").eq(idx).find('span').removeClass('new_book_slide_li'+(idx+1)+'_off')   
            $("#tab-btn-area>ul>li").eq(idx).find('span').addClass('new_book_slide_li'+(idx+1)+'_on')   
      })
    });
  }

  render(){
    return (
    <div id="home-slide">
        <div id="tab">
          <div id="tab-title">
          <img src="/images/tit_thesedays.png"></img>
          </div>
          
          <div id="tab-btn-area">
            <ul>
              <li><a href="#" ><span className="new_book_slide_li1_on" name="novelSlide" onClick={this.slideSelect}></span></a></li>
              <li><a href="#" ><span className="new_book_slide_li2_off" name="poemSlide" onClick={this.slideSelect}></span></a></li>
              <li><a href="#" ><span className="new_book_slide_li3_off" name="ecoSlide" onClick={this.slideSelect}></span></a></li>
              <li><a href="#" ><span className="new_book_slide_li4_off" name="selfSlide" onClick={this.slideSelect}></span></a></li>
              <li><a href="#" ><span className="new_book_slide_li5_off" name="humanSlide" onClick={this.slideSelect}></span></a></li>
              <li><a href="#" ><span className="new_book_slide_li6_off" name="historySlide" onClick={this.slideSelect}></span></a></li>
              <li><a href="#" ><span className="new_book_slide_li7_off" name="lifeSlide" onClick={this.slideSelect}></span></a></li>
            </ul>
          </div>
          <div id="tab-cont">
            {
              this.state.novelSlide?
              <NovelSlider></NovelSlider>:''
            }
            {
              this.state.poemSlide?
              <PoemSlider></PoemSlider>:''
            }
            {
              this.state.ecoSlide?
              <EcoSlider></EcoSlider>:''
            }
            {
              this.state.selfSlide?
              <SelfSlider></SelfSlider>:''
            }
            {
              this.state.humanSlide?
              <HumanSlider></HumanSlider>:''
            }
            {
              this.state.historySlide?
              <HistorySlider></HistorySlider>:''
            }
            {
              this.state.lifeSlide?
              <LifeSlider></LifeSlider>:''
            }

          </div>
        </div>
    </div>
  );
  }
}

export default HomeSlide;

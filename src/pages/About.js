import React, { Component } from 'react';
import "./About.css";
import mePic from "../assets/mePic.JPG";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={mePic}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Esteban Leal</div>
        <div className="brief_description">
          <p>I am a current student majoring in Computer Science student at UTSA, while working at Best Buy 
            as a Product FLow Specialist as well as a Sales Associate.
            When I'm not at work, I am usually out fishing or kayaking.
            My favorite show is One Piece
          </p>
        </div>
      </div>
    </div> 
      </div>
    )
  }
}
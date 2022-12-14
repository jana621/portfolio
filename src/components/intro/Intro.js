import React from 'react'
import "./intro.css";
import Me from "../../img/meee.png";


const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I'm</h2>
          <h1 className="i-name"><span className="name-jana">Janarthanan</span></h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">MERN</div>
              <div className="i-title-item">HTML</div>
              <div className="i-title-item">CSS</div>
              <div className="i-title-item">JavaScript</div>
            </div>
          </div>
          <p className="i-desc">
            MERN Stack Developer - Knack of building applications with front
            and back end operations.
          </p>
          <div className="div-resume">
          <a href="https://drive.google.com/file/d/14YPOR5Y68QVy28ES04NAwwYoDsOnsNSz/view?usp=drivesdk" rel="noreferrer" target="_blank">
          <button className="btn-resume">Resume</button>
          </a>
          </div>
        </div>
      </div>

      <div className="i-right">
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro
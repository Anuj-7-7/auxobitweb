// src/components/AboutUs.js
import React from 'react';
import '../styles/abtus.css';

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-content">

        {/* Left: Intro Section */}
        <div className="intro-panel">
          <h2>About Us</h2>
          <p className="subtitle">Aerospace & Marine Tech</p>
          <h3 className="company">Auxobit Aerospace</h3>
          <p className="description">
Driven by a passion for rapid innovation, our team pioneers cutting-edge loitering-munition swarm tactics and develops next-generation surveillance platforms engineered to thrive in the world’s most demanding operational environments. With a strong foundation in aerospace autonomy and real-time data fusion, Auxobit Aerospace is at the forefront of delivering high-resolution, actionable intelligence with unprecedented precision and reliability.

We specialize in adaptive systems designed to respond dynamically to complex battlefield scenarios—empowering defense forces with  autonomous coordination, and long-range capabilities. Our solutions are architected for the future of defense technology.          </p>
        </div>

        {/* Right: Leadership Cards */}
        <div className="cards-panel">
          <div className="card card-top">
            <div className="avatar-wrapper">
              <img src="/images/shrvn-removebg-preview.png" alt="Shravan Yadav" />
            </div>
            <div className="card-content">
              <p className="role">CEO & Founder</p>
              <p className="name">Shravan Yadav</p>
              <p className="bio">
                I’m the CEO and founder of Auxobit, where innovation isn’t a goal—it’s our DNA. I lead teams from ideation to execution, delivering game-changing unmanned systems for defense and beyond.
              </p>
            </div>
          </div>

          <div className="card card-bottom">
            <div className="avatar-wrapper">
              <img src="/images/ysh.png" alt="Yash Bhise" />
            </div>
            <div className="card-content">
              <p className="role">Director & Co-Founder</p>
              <p className="name">Yash Bhise</p>
              <p className="bio">
                As Director, I drive operations and strategic planning, championing drone autonomy for surveillance, payload delivery, and defense—ensuring peak performance every flight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

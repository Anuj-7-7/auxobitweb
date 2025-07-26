import React from 'react';
import '../styles/abtus.css';

export default function AboutPage() {
  return (
    <div className="container">
      <section className="content">

        {/* Left Column */}
        <div className="leftColumn">
          <div className="titleBox">
            <h2 className="about-title">
              About us
            </h2>
            <span className="about-subtitle">Aerospace and Marine Tech</span>
            <h3 className="company-name">Auxobit Aerospace</h3>
          </div>
          <div className="textBox">
            <p className="company-desc">
Driven by a passion for rapid innovation and an uncompromising drive to exceed industry standards in unmanned airborne systems, our team at Auxobit Aerospace pioneers cutting‑edge loitering‑munition swarm tactics that redefine precision and coordination. We develop advanced surveillance platforms capable of delivering real‑time, high‑resolution intelligence in even the most challenging environments. </p>
          </div>
        </div>

        {/* Right Column: two stacked cards*/}
        <div className="rightColumn">

          {/* Card 1 */}
          <div className="card">
            <div className="photoDetails">
              <div className="photoPlaceholder">
                <img src="/images/shrvn-removebg-preview.png" alt="Shravan Yadav" className="ia" />
              </div>
              <div className="info">
                <p className="profile-role cto">CTO and Founder</p>
                <p className="bld profile-name">Shravan Yadav</p>
              </div>
            </div>
            <p className="profile-bio">
              I’m the CTO and founder of Auxobit, where innovation isn’t just a goal—it’s a mindset. I build disruptive technologies from ideation to execution, leading teams that transform ambitious concepts into high-performance, game-changing unmanned systems for defense and beyond.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="photoDetails">
              <div className="photoPlaceholder">
                <img src="/images/ysh.png" alt="Yash Bhise" className="ia" />
              </div>
              <div className="info">
                <p className="profile-role dir">Director and Co-Founder</p>
                <p className="bld profile-name">Yash Bhise</p>
              </div>
            </div>
            <p className="profile-bio">
              I believe in drone autonomy in applications of surveillance, long-range payload delivery and defence. Currently managing operations by implementing strategic planning and relentlessly improving team efficiency.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

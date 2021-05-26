import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Hi, I am Cherrie and I am a student at UC Berkeley Extension completing the Web Development Class. I am aspiring freelance developer based in Bay Area.
        </p>
        
      </div>
    </section>
  );
}

export default About;

import Image from "next/image";
import './about.css'
export default function About() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text-a">About Me</h1>
              <p className="main-para">
                A creative technologist with a passion for combining design and technology. I specialize in building meaningful digital experiences.
                I believe in making the complex simple, and always strive for excellence in everything I do.
              </p>
              <button className="resume-btn">
                <a href="/resume.png" download>Download Resume</a>
              </button>
            </div>
            <div>
              <Image src="/pic.png" width={300} height={300} alt="person" />
            </div>
          </div>
        </div>
      </section>

    
      <section id="certification" className="info-section">
        <h3>Certification</h3>
        <ul>
        <li><p><b>HTML, CSS:</b> From Adamjee Coaching Centre</p></li>
        <li><p><b>Artificial Intelligence, Web 3.0 & Metaverse:</b> From Governor House Karachi (ongoing)</p></li>
        </ul>
      </section>

      
      <section id="education" className="info-section">
        <h3>Education</h3>
        <ul>
         <li> <p><b>Intermediate:</b> From Government Degree College</p></li>
         <li><p><b>Matriculation:</b> From The Islamic School</p></li>
        </ul>
      </section>

     
      <section id="skills" className="info-section">
        <h3>Skills</h3>
        <ul>
          <li>Computation of Information</li>
          <li>MS Office</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Communication Skills</li>
        </ul>
      </section>
    </>
  );
}

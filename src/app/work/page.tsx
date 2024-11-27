import Image from 'next/image';

import './work.css'
export default function Work() {
  return (
    <>
      <section className="work-hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">My Work</h1>
              <p className="main-para">
                Explore my work across design and development. I create digital experiences that blend aesthetics and functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="work-gallery">
        <div className="container">
          <div className="main">
            <h3 className="section-heading">Featured Projects</h3>
            <div className="card-parent">
              <div className="card">
              import Image from 'next/image';

<Image 
  src="/resume.png" 
  alt="Project 1" 
  className="card-image"
  width={500} // specify width
  height={300} // specify height
/>

                <div className="card-content">
                  <h2>Resume builder</h2>
                  <p>
                  Developed a customizable resume builder application using HTML, CSS, and TypeScript. The tool allows users to quickly create professional resumes with an intuitive and responsive design
                  </p>
                </div>
              </div>
              <div className="card">
                <img src="/todo.png" alt="Project 2" className="card-image" />
                <div className="card-content">
                  <h2>To-do List</h2>
                  <p>
                  Created a CLI-based to-do list app using TypeScript, Inquirer, Node.js, and Chalk. It allows users to efficiently add tasks, prompts continuously until they finish, and displays a summary of all added tasks in an organized chart
                  </p>
                </div>
              </div>
              <div className="card">
                <img src="/word-counter.png" alt="Project 3" className="card-image" />
                <div className="card-content">
                  <h2>Word Counter</h2>
                  <p>
                  Developed a CLI-based word counter using TypeScript, Inquirer, Node.js, and Chalk. It accurately counts words while ignoring whitespace, providing a fast and reliable word count for any input.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-social-links">
        <div className="container">
          <div className="main">
            <h3>Connect with Me</h3>
            <div className="iconsDiv">
              <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/sheikh-atiqa-48682a2b6/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/Sheikhatiqaofficial" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

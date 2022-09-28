import React from "react";

class About extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col mt-5 text-center">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row justify-content-center fs-5 mt-5 mb-5">
            <div className="col-10">
              <p>
                Hello, my name is Annisa Mufidah Sopian, i'm an Informatics student at Jenderal Achmad Yani University. I'm a lifelong learner and i have high interest in web programming, design thinking, and AI Research. 
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

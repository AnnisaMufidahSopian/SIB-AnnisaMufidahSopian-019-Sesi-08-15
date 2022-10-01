import React from "react";
import "./experience.css"
import teachingImage from '../assets/teaching.jpg'
import hipsterImage from '../assets/hipster.png'

class Experience extends React.Component {
  render() {
    return (
        <section id="experience">
        <div class="container">
          <div class="row">
            <div class="col mt-5 text-center">
              <h2>Experiences</h2>
            </div>
          </div>
          <div class="row mt-5 mb-5">
            <div class="col-6">
              <div class="card">
                <img src={teachingImage} class="image" alt="..." />
                <div class="card-body">
                  <h3>Teaching Assistant</h3>
                  <p class="card-text">Teaching Assistant at Informatics Department, Jenderal Achmad Yani University and teached for Computer Application Practice</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card">
                <img src={hipsterImage} class="image" alt="..." />
                <div class="card-body">
                  <h3>Hipster</h3>
                  <p class="card-text">Hipster at IS-Chain (top 200 project) fintech category, Indonesia Digital Tribe event presented by BUMN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;



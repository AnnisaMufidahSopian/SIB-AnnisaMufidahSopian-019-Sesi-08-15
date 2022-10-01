import React from "react";
import ThumbnailImg from "../assets/thumbnail.png";

class Thumbnail extends React.Component {
  render() {
    return (
      <div id="home">
        <div className="col mb-5">
          <img src={ThumbnailImg} alt="thumbnail" />
        </div>
      </div>
    );
  }
}

export default Thumbnail;

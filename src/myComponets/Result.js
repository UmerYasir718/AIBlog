import React from "react";
import "../App.css";
// import Slider from './Slider';
import { useLocation } from "react-router-dom";
import Slider2 from "./Slider2";
export default function Result() {
  let location = useLocation();
  return (
    <div className="CompletePage">
      <Slider2 />
      <div className="container ResultSection my-2">
        <div className="main">
          <h3 className="title text-primary">{location.state.post.title}</h3>
          <h5 className="description">{location.state.post.description}</h5>
        </div>
        <h3 className="heading">Blog on {location.state.post.title}</h3>
        <p className="content">
          <h6 className="text-primary">{location.state.post.title}</h6>
          <p
            dangerouslySetInnerHTML={{
              __html: location.state.post.postContent,
            }}
          ></p>
        </p>
      </div>
    </div>
  );
}

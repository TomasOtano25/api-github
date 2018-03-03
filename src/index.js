import React from "react";
import ReactDom, { render } from "react-dom";
import style from "./styles.css";

/*const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};*/

const Card = props => {
  return (
    <div className="card">
      <img src="http://placehold.it/75" />
      <div className="info">
        <div>Name here ...</div>
        <div>Company Name here ...</div>
      </div>
    </div>
  );
};

ReactDom.render(<Card />, document.getElementById("root"));

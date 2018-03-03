import React from "react";
import ReactDom, { render } from "react-dom";
import style from "./styles.css";

/*const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};*/

// http://placehold.it/75

const Card = props => {
  console.log(props.avatar);
  return (
    <div style={{ margin: "1rem" }}>
      <img width="75" src={props.avatar_url} />
      <div style={{ display: "inline-block", marginLeft: 10 }}>
        <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

let data = [
  {
    name: "Paul O’Shannessy",
    avatar_url: "https://avatars1.githubusercontent.com/u/8445?v=4",
    company: "Facebook"
  },
  {
    name: "null",
    avatar_url: "https://avatars2.githubusercontent.com/u/35155721?v=4",
    company: "null"
  }
];

const CardList = props => {
  return (
    <div>
      {props.cards.map(card => (
        <Card
          {...card}
          /*name={card.name}
          avatar_url={card.avatar_url}
          company={card.company}*/
        />
      ))}
    </div>
  );
};

class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Github username" />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <CardList cards={data} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDom, { render } from "react-dom";
import style from "./styles.css";
import axios from "axios";

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

const CardList = props => {
  return (
    <div>
      {props.cards.map(card => (
        <Card
          key={card.id}
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
  state = { userName: "" };
  // Cada funcion de evento en react recibe un argumento event
  handleSubmit = event => {
    // Su funcion es hacer que el formulario no actualize la pagina
    event.preventDefault();
    // console.log("Event: Form Submit", this.userNameInput.value);
    // ajax ... {fecth or axios}
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        // console.log(resp);
        this.props.onSubmit(resp.data);
        this.setState({ userName: "" });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.userName}
          onChange={event => {
            this.setState({
              userName: event.target.value
            });
          }}
          type="text"
          placeholder="Github username"
          required
          // ref={input => (this.userNameInput = input)}
        />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    cards: [
      /*{
        name: "Paul O’Shannessy",
        avatar_url: "https://avatars1.githubusercontent.com/u/8445?v=4",
        company: "Facebook"
      },
      {
        name: "fdds",
        avatar_url: "https://avatars2.githubusercontent.com/u/35155721?v=4",
        company: "gyg"
      }*/
    ]
  };

  addNewCard = cardInfo => {
    // console.log(cardInfo);

    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));

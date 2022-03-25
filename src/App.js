import React from "react";
import "./App.scss";
import AuthorCard from "./Components/AuthorCard";
import Header from "./Components/Header";

class App extends React.Component {
  state = {
    name: "Chris",
    type: "Billpay",
  };
  render() {
    return (
      <div className="App">
        <Header />
        <AuthorCard name={this.state.name} type={this.state.type} />
      </div>
    );
  }
}

export default App;

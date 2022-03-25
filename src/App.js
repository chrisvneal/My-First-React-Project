import React from "react";
import List from "./List";

class App extends React.Component {
  state = {
    parents: [
      {
        name: "Michele",
        id: 578,
      },
      {
        name: "Vaughn",
        id: 789,
      },
    ],
    companies: [
      {
        name: "HHB",
        id: 678,
      },
      {
        name: "BCI Security",
        id: 991,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <List list={this.state.parents} title="Parents" />
        <List list={this.state.companies} title="Companies" />
      </div>
    );
  }
}

export default App;

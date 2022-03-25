import React from "react";

function makeListItemsFromArray(array) {
  let listItems = array.map((item) => <li key={item.id}>{item.name}</li>);
  return listItems;
}

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <h2>{this.props.title}</h2>

        <ul>{makeListItemsFromArray(this.props.list)}</ul>
      </div>
    );
  }
}

export default List;

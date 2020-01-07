import React, { Component } from "react";
import DropdownMenu from "./DropdownMenu";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <DropdownMenu />
      </div>
    );
  }
}

export default List;

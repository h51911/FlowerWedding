import React, { Component } from "react";
import { Col, Row } from "antd";
import DropdownMenu from "./DropdownMenu";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul className="drop">
          <li>
            <DropdownMenu />
          </li>
          <li>
            <DropdownMenu />
          </li>
          <li>
            <DropdownMenu />
          </li>
        </ul>
      </div>
    );
  }
}

export default List;

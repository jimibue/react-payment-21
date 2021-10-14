import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Navbar extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Menu>
        <Link to="/">
          <Menu.Item active={location.pathname === "/"}>Home</Menu.Item>
        </Link>
        <Link to="/things">
          <Menu.Item active={location.pathname === "/things"}>Things</Menu.Item>
        </Link>
        <Link to="/components">
          <Menu.Item active={location.pathname === "/components"}>
            Components
          </Menu.Item>
        </Link>
      </Menu>
    );
  }
}

export default withRouter(Navbar);

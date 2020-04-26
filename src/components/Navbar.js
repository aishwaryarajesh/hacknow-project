import React from "react";
import { Link } from "react-router-dom";
import { Menu, Item } from "semantic-ui-react";

const Navbar = props => {
  const loggedIn = !!props.currentUser.id;
  const handleNavToggle = () => {
    if (loggedIn) {
      return (
        <Item>
          <Link to="/login" onClick={props.handleLogout} className="ui item">
            Log Out
          </Link>
        </Item>
      );
    } else {
      return (
        <Item>
          <Link to="/signup" className="ui item">
            Sign Up
          </Link>
          <Link to="/login" className="ui item">
            Sign In
          </Link>
        </Item>
      );
    }
  };
  return (
    <Menu
      secondary
      style={{
        backgroundColor: "rgba(185,136,136,0.6)",
        height: "40px",
        marginBottom: "40px"
      }}
    >
      <Menu.Item style={{ fontStyle: "italic" }}>
        Welcome to Quarantine Qalender!
      </Menu.Item>
      <Menu.Menu position="right">{handleNavToggle()}</Menu.Menu>
    </Menu>
  );
};

export default Navbar;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class MenuBar extends Component {

  constructor(props, context) {
    super(props, context);
    console.log(context);
  }

  static contextTypes: {
    router: PropTypes.object.isRequired
  }

  handleOnNavClick = (path) => {
    console.log(path);
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Andhika Ventausa</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav onSelect={this.handleOnNavClick}>
            <NavItem eventKey="instagram">Instagram</NavItem>
          </Nav>
          <Nav onSelect={this.handleOnNavClick} pullRight>
            <NavItem eventKey="about">About</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MenuBar;
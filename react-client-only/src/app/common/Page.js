import React, { Component } from 'react';
import MenuBar from '../menu/MenuBar';

class Page extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
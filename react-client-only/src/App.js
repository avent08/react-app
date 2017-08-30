import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import Page from './app/common/Page';

class App extends Component {
  static childContextTypes = {
    router: PropTypes.object.isRequired
  }

  getChildContext() {
    return { router: this.props.router };
  }

  render() {
    return (
      <Page>
        {Children.only(this.props.children)}
      </Page>
    );
  }
}

export default App;

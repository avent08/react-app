import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import ProfileInfoView from './ProfileInfoView';

class AboutPage extends Component {

  render() {
    return (
      <Grid>
        <ProfileInfoView />
      </Grid>
    )
  }
}

export default AboutPage;
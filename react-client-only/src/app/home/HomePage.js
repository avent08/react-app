import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const styles = {
  topBanner: {
    height: '20rem',
    backgroundColor: '#ccc',
    overflow: 'hidden',
    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/0/04/Makati_Skyline_for_banner.jpg")',
    backgroundSize: '100%',
    backgroundPosition: '0 -5rem',
    opacity: '0.8',
  },
  bannerImage: {
    width: '100%',
    height: 'auto'
  }
}

class HomePage extends Component {
  static contextTypes: {
    router: PropTypes.object
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <div style={styles.topBanner} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HomePage;
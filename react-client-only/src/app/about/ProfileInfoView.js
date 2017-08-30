import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProfileImageSrc from '../images/andhika-profile.jpg'

const styles = {
  profilePicture: {
    width: '16rem',
    height: '16rem',
    backgroundColor: '#ccc',
    backgroundImage: `url(${ProfileImageSrc})`,
    backgroundSize: '100%',
    borderRadius: '50%',
    margin: '0 auto'
  },
  profileInfo: {
    textAlign: 'left'
  },
  profileInfoTitle: {
    padding: '0 .5rem',
    verticalAlign: 'top',
    paddingLeft: '0'
  },
  profileInfoContent: {
    padding: '0 .5rem',
    verticalAlign: 'top'
  }
}

class ProfileInfoView extends Component {

  getProfileInfo() {
    return [{
      title: 'Phone',
      value: <a href="tel:+6285646566552">+6285646566552</a>
    }, {
      title: 'Email',
      value: <a href="mailto:andhika.ventausa@gmail.com?Subject=Hello%20Andhika" target="_top">andhika.ventausa@gmail.com</a>
    }, {
      title: 'Address',
      value: 'Griya Shanta J-318, Malang, East Java, Indonesia'
    }, {
      title: 'Linkedin',
      value: <a href="https://www.linkedin.com/in/andhikaventausa/" target="_blank">andhikaventausa</a>
    }];
  }

  render() {
    return (
      <Row>
        <Col sm={4} md={2} mdOffset={3} >
          <div style={styles.profilePicture} />
        </Col>
        <Col sm={8} md={4}>
          <div style={styles.profileInfo}>
            <h3 style={{ marginTop: '1rem' }}>Andhika Ventausa</h3>
            <table>
              <tbody>
              {this.getProfileInfo().map((item) => (
                <tr key={item.title}>
                  <td style={styles.profileInfoTitle}>{item.title}</td>
                  <td style={styles.profileInfoContent}>:</td>
                  <td style={styles.profileInfoContent}>{item.value}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    );
  }
}

export default ProfileInfoView;
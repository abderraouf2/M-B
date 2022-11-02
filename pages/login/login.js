import React, { Component } from 'react';
import PropTypes from 'prop-types';

class login extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container');
    setVerifier(window.recaptchaVerifier)
    recaptchaVerifier.render();
  }

 
  render() {
    return (
      <div>

      </div>
    );
  }
}

login.propTypes = {

};

export default login;
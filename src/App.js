import React from 'react';
import PropTypes from 'prop-types';
import Component from './Component';
import styles from './style.css';

const App = ({ title }) => (
  <div>
    <h3>{title}</h3>
    <Component />
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;

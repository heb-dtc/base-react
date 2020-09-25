import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const App = ({ title }) => <div>{title}</div>;

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;

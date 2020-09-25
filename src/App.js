import React from 'react';
import PropTypes from 'prop-types';
import RedSquare from './red_square.png'
import styles from './style.css';

const App = ({ title }) => <div><h3>{title}</h3><img src={RedSquare} /></div>;

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;

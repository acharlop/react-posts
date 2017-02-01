/**
*
* AppBar
*
*/

import React from 'react';
import IconButton from '../IconButton';
import { Link } from 'react-router';

import styles from './styles.css';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || (<Link to="/login">login</Link>);
  return (
    <div className={styles.appBar}>
      <IconButton
        buttonClass={styles.iconButton}
        iconClass={styles.icon}
        icon="bars"
        onClick={toggleDrawer}
      />
      <div className={styles.heading}>
        Coder Daily
      </div>
      <div className={styles.linkContainer}>
        {loginLink}
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  email: React.PropTypes.string,
};

export default AppBar;

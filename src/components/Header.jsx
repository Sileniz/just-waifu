import React from 'react';
import NavBar from './NavBar';
import styles from "../styles/Header.module.css"
function Header() {
  return (
    <header className={styles.HeaderComponent}>
      <NavBar />
    </header>
  );
}

export default Header;
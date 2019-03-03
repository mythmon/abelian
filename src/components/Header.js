import PropTypes from "prop-types";
import React from "react";

import Emoji from "../components/Emoji";
import styles from "./Header.module.css";

export default function Header({ siteTitle }) {
  return (
    <header>
      <h1>
        <Emoji className={styles.headerFlair} symbol="🚧" label="construction" />
        {siteTitle}
        <Emoji className={styles.headerFlair} symbol="🚧" />
      </h1>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

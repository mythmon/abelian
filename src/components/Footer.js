import React from "react";

import packageMeta from "../../package.json";
import style from "./Footer.module.css";

export default function Footer({ siteTitle }) {
  return (
    <footer className={style.footer}>
      © {new Date().getFullYear()}, built with <a href="https://www.gatsbyjs.org">Gatsby</a>,
      source on <a href={packageMeta.repository.url}>Github</a>.
    </footer>
  );
}

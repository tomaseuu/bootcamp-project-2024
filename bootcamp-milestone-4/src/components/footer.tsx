import React from "react";
import style from "./footer.module.css";

export default function Footer() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to
    // change all the "class" to "className"
    // <header className={style.footer}>
    <footer className={style.footer}>
      © 2025 Thomas Le | All Rights Reserved
    </footer>
    // </header>
  );
}

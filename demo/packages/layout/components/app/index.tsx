import React, { FunctionalComponent } from "react";
import { LeftMenu } from "../left-menu";
import { Header } from "../header";

import styles from "./styles.css";

export const App: FunctionalComponent = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <LeftMenu />
      <div className={styles.slot}>
        {children}
      </div>
    </div>
  );
}

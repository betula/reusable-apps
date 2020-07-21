import React, { FunctionalComponent } from "react";
import { LoginForm } from "../login-form";

import styles from "./styles.css";

export const App: FunctionalComponent = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}

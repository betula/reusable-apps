import React, { FunctionalComponent } from "react";
import { ProfileForm } from "../profile-form";

import styles from "./styles.css";

export const App: FunctionalComponent = () => {
  return (
    <div className={styles.container}>
      <ProfileForm />
    </div>
  );
}

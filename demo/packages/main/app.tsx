import React, { FunctionalComponent } from "react";

import { App as Login } from "login";
import { App as Layout } from "layout";
import { App as Profile } from "profile";

export const App: FunctionalComponent = () => (
  <>
    <Login />
    <Layout>
      <Profile />
    </Layout>
  </>
);

01 Интерфейс аппа

```javascript
import { App } from "./App";
import { CurrentUserDetails, GetUser, UpdateUser, UserUpdated } from "./user";

export {
  App,               // Application (P)React component
  render,            // Render to DOM element for non react vendors

  GetUser,           // GetUser remote call
  UpdateUser,        // UpdateUser remote call

  UserUpdated,       // UserUpdates event

  CurrentUserDetails // Current user details signal
}

function render(props = {}, element) {
  ReactDOM.render(<App {...props} />, element);
}
```












02 Как использовать аппы

Для сборки нужно использовать либо современные и легкоиспользуемые средства, либо нужно написать свой bundler который будет работать так же просто, что бы человек мог собрать наше приложение из компонентов в одном html файле, который он запустит одной командой. Предполагаемый синтаксис такой:

```javascript
// script.js
import { Core, make, h } from "@whisklabs/b2b-fe-core";
import { Main } from "@whisklabs/b2b-fe-main";
import { Login } from "@whisklabs/b2b-fe-login";
import { Business } from "@whisklabs/b2b-fe-bussines";
import { Api } from "@whisklabs/b2b-fe-tools-api";
import { Monetization } from "@whisklabs/b2b-fe-monetization";
/** @jsx h */

make(
  <Core>
    <Login />
    <Main>
      <Business />
      <Api />
      <Monetization />
    </Main>
  </Core>,
  document.getElementById("id")
);
```

```html
<html><body>
  <div id="id"></div>
  <script src="./script.js"></script>
</body></html>
```

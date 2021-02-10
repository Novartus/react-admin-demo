import React from "react";
import { Admin, Resource, defaultTheme, Loading } from "react-admin";
import restProvider from "ra-data-simple-rest";

import authProvider from "./auth/authProvider";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";
import UserList from "./components/user/UserList";
import UserEdit from "./components/user/UserEdit";
import { createMuiTheme } from "@material-ui/core/styles";
import { darkTheme } from "./theme/dark";
// import UserCreate from "./components/user/UserCreate";

const theme = createMuiTheme({
  ...darkTheme,
  sidebar: {
    width: 180, // The default value is 240
    closedWidth: 70, // The default value is 55
  },
});

function App() {
  return (
    <Admin
      theme={theme}
      dataProvider={restProvider("http://localhost:3000")}
      authProvider={authProvider}
    >
      <Resource
        name="messages"
        list={PostList}
        // create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name="users"
        list={UserList}
        // create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  );
}

export default App;

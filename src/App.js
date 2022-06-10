import * as React from "react";
import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./components/Posts";
import { UserList } from "./components/Users";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import Dashboard from "./components/Dashboard";
import authProvider from "./Auth/authProvider";

import jsonServerProvider from "ra-data-json-server";
// import dataProvider from "./DataProvider/dataProvider";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    {/* <Resource name='posts' list={ListGuesser} /> */}
    {/* ListGuesser guesses the format to use */}
    {/* for the columns of the list based on the data fetched from the API */}
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;

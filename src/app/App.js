import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import Contacts from "./components/Contacts";
import Posts from "./components/Posts";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <NavBar/>
      <h1>App</h1>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/posts/:postId?" component={Posts} />
          <Route path="/contacts" component={Contacts} />
          <Redirect from="/lk" to="/signin" />
          <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

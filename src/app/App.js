import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import PostsList from "./components/PostsList";
import Contacts from "./components/Contacts";
import Post from "./components/Post";

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" }
];

function App() {
  return (
    <div>
      <NavBar/>
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/posts/:postId">
                    {(props) => <Post {...props} posts={posts} />}
                </Route>
        <Route path="/posts">
                    {(props) => <PostsList {...props} posts={posts} />}
                </Route>
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  );
}

export default App;

import { Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import Posts from "./components/Posts";
import Contacts from "./components/Contacts";




function App() {
  return (
    <div>
      <NavBar/>
      <h1>App</h1>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/posts" component={Posts} />
      <Route path="/contacts" component={Contacts} />
    </div>
  );
}

export default App;

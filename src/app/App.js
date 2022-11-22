import NavBar from "./components/NavBar";
import { Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from "./components/Dashboard"
import Posts from './components/Posts'
import Login from './components/Login'
import Home from './components/Home'
import Stats from "./components/Stats";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <NavBar/>
      <h1>App</h1>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/dashboard/stats' component={Stats}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/login' component={Login}/>
        <Route path='/posts/:postId?/:display?' component={Posts}/>
        <Route path='/404' component={NotFound} />
        <Redirect from="/admin" to='/dashboard' />
        <Redirect to='/404'/>
      </Switch>
    </div>
  );
}

// Второй вариант
// const App = () => {
//   return (
//       <div>
//           <NavBar />
//           <h1>App</h1>
//           <Switch>
//               <Route path="/" exact component={Home} />
//               <Route path="/login" component={Login} />
//               <Route path="/posts/:postId?" component={Posts} />
//               <Route path='/dashboard/stats' component={Stats}/>
//               <Route path="/dashboard" component={Dashboard} />
//               <Redirect from="/lk" to="/signin" />
//               <Route component={NotFound} />
//           </Switch>
//       </div>
//   )
// }
export default App

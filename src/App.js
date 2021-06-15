import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/login" exact component={Login} ></Route>
        <Route path="/profile/:id"><Profile/></Route>
      </Switch>
    </Router>
  );
}

export default App;

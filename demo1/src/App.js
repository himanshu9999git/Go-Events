import './App.css';
import Nav from './Nav/nav';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home/Home';
import Event from './Home/event/event';
import EventLink from './eventLink/eventlink';
import EventList from './eventLink/EventList/eventlist';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useContext } from 'react';
import { Context } from "./context/Context";

// import Carousel from './Carousel/carousel';
function App() {

  const {user} = useContext(Context);
  // const user = true;
  return (
    <Router>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register"> {user ? <Home /> : <Register />} </Route>
          <Route path="/login"> {user ? <Home /> : <Login />} </Route>
          <Route path="/eventlink"> <EventLink /> </Route>
          <Route path="/eventList"> <EventList /> </Route>
        </Switch>
        {/* <EventList /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Home />  */}
        {/* <Event /> */}
        {/* <EventLink /> */}
    </Router>
  );
}

export default App;

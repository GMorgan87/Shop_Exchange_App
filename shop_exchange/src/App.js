import React from 'react';
import './App.css';
import Homepage from './containers/Homepage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/navbar'
import AdminContainer from './containers/AdminContainer';
import UserPageContainer from './containers/UserPageContainer'


function App() {
  return (
    <Router >
      <React.Fragment>
         <NavBar/>
         <Switch>
         <Route path="/admin" component={AdminContainer}/>
         <Route path="/user/:id" component={UserPageContainer}/>
         <Route component={Homepage} />
        </Switch>
     </React.Fragment>
    </Router>
  );
}

export default App;

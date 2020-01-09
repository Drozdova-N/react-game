import React from 'react';
import { Switch, Route} from 'react-router-dom'
import HomeGamePage from "./page/HomeGamePage";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import './App.css';

function App() {
  return (
      <Switch>
        <Route exact path='/game' component={HomeGamePage}/>
        <Route exact path='/signIn' component={SignIn} />
        <Route exact path='/signUp' component={SignUp} />
      </Switch>

  );
}

export default App;

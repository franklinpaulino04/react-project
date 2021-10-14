import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";

// Context
import TaskState from "./context/TaskState";

function App() {
  return (
      <TaskState>
          <Router>
              <Switch>
                  <Route exact path="/" component={Login}/>
                  <Route exact path="/new-account" component={NewAccount}/>
                  <Route exact path="/projects" component={Projects}/>
              </Switch>
          </Router>
      </TaskState>
  );
}

export default App;

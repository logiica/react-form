import React from 'react';
import { Route,  Switch, BrowserRouter } from 'react-router-dom';
import './App.scss';

import HomePage from 'components/HomePage';
import SimpleForm from 'components/SimpleForm';
import ValidateForm from 'components/ValidateForm';
import NewEditForm from 'components/NewEditForm';

class App extends React.Component {
  render() {
    return (
      <React.Fragment> 
        <h1>React Final-Form Demo</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/simpleform" component={SimpleForm} />   
            <Route path="/validateform" component={ValidateForm} /> 
            <Route path="/neweditform" component={NewEditForm} />                                     
          </Switch>
        </BrowserRouter>
        
      </React.Fragment>
    )
  }
}

export default App;

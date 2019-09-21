import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './App.scss'

import HomePage from 'components/HomePage'
import FinalFormForm from 'components/FinalFormForm'
import FormikForm from 'components/FormikForm'
import ComponentForm from 'components/ComponentForm'
import HooksForm from 'components/HooksForm'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>       
        <header>
          <div className="header">
            <h1>React Form Demo</h1>              
          </div> 
        </header>

        <main>
          <div className="content-area">
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/componentform" component={ComponentForm} />
                <Route path="/hooksform" component={HooksForm} />            
                <Route path="/finalform" component={FinalFormForm} />
                <Route path="/formikform" component={FormikForm} />
              </Switch>
            </BrowserRouter>              
          </div>
        </main>

      </React.Fragment>
    )
  }
}

export default App

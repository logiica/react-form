import React from 'react';

import Menu from 'components/Menu';
import './App.scss';

///////////////////
// App           //
///////////////////
class App extends React.Component {
  render() {
    return (
      <React.Fragment> 
        <h1>React Final-Form Demo</h1>
        <Menu options={[{text: 'Simple Form!'}, 
                        { text: 'Validation' },
                        { text: 'New/Edit Form' }]}
        />        
      </React.Fragment>
    )
  }
}

export default App;

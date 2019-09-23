import React, { Component } from 'react'
import Menu from 'components/menu/Menu'

class HomePage extends Component {
  render () {
    return (
      <React.Fragment>
        <h2>Select a Form Implementation Style</h2>
        <Menu
          title=''
          options={[
            { text: 'Class Component', path: '/componentform' },
            { text: 'Functional Component with Hooks', path: '/hooksform' },
            { text: 'React-Final-Form', path: '/finalform' },
            { text: 'Formik', path: '/formikform' }
          ]}
        />
      </React.Fragment>

    )
  }
}

export default HomePage

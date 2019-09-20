import React, { Component } from 'react'
import Menu from 'components/Menu'

class HomePage extends Component {
  render () {
    return (
      <Menu
        title='Select a Form'
        options={[
          { text: 'Simple Form', path:'/simpleform' },
          { text: 'Validate Form', path:'/validateform' },
          { text: 'New and Edit Form', path:'/neweditform' }
        ]}
      />
    )
  }
}

export default HomePage

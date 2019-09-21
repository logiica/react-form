import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

class Menu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeItem: '',
      menuItems: props.options
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (activeItem) {
    return e => {
      e.preventDefault()
      console.log('Clicked on', activeItem)
    }
  }

  renderTitle () {
    const { title } = this.props;

    if (title && title.length>0 ) {
      return (
        <div className="menu-row">
          <h2 className="title">{title}</h2>
        </div>        
      )
    }
    return null;
  }

  render () {
    const { options } = this.props
    return (
      <div className="menu-container">
        <div className="menu-box">
          {this.renderTitle()}
          { options.map((option, index) =>
            <div className="menu-row menu-option" key={index}>
              <Link to={option.path}>{option.text}</Link>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Menu

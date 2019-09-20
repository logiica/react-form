import { Component } from 'react'
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

  render () {
    const { title, options } = this.props
    return (
      <div className="menu-container">
        <div className="menu-box">
          <div className="menu-row">
            <h2 className="title">{title}</h2>
          </div>
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

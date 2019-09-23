import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Form.scss'

class ComponentForm extends Component {
  InitialState = { pristine: true, petName: '', type: 'dog', ageGroup: '< 1', toppings: ['chicken'] };

  TypeOptions = [
    { value: 'dog', label: 'Dog' },
    { value: 'cat', label: 'Cat' },
    { value: 'bird', label: 'Bird' }
  ]
 
  AgeOptions = [
    { value: '< 1', label: 'Less than 1 Year' },
    { value: '<= 5', label: '1 to 5 Years' },
    { value: '<= 10', label: '6 to 10 Years' },
    { value: 'old guy', label: 'More than 10 Years Old' }
  ]

  constructor (props) {
    super(props)
    this.state = this.InitialState

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleArrayChange = this.handleArrayChange.bind(this)
  }

  handleCancel = () => this.props.history.push('/')
  handleReset = () => this.setState(this.InitialState)

  handleChange (event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      ...this.state,
      pristine: false,
      [name]: value
    })
  }

  handleArrayChange (event) {
    const name = event.target.name
    const options = event.target.options
    const values = []
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        values.push(options[i].value)
      }
    }
    this.setState({
      ...this.state,
      pristine: false,
      [name]: values
    }) 
  }

  handleSubmit (event) {
    event.preventDefault()
    alert ('Form Submitted: ' + JSON.stringify(this.state, 0, 2))
    this.props.history.push('/')
  }

  isChecked (name, value) {
    return (this.state[name] === value)
  }

  isSelected (name, value) {
    return this.state[name].includes(value)
  }

  renderRadioButtons (name, options) {
    return options.map((opt) => {
      const { value, label } = opt
      return (
        <div key={value}>
          <input type="radio"
            name={name}
            value={value}
            checked={this.isChecked(name, value)}
            onChange={this.handleChange}
          />
          {label}
        </div>
      )
    })
  }

  renderSelectOptions (name, options, multiple) {
    return options.map((opt) => {
      const { value, label } = opt
      return (
        <option key={value} value={value} selected={multiple? this.isSelected(name,value) : this.isChecked(name, value)}>{label}</option>
    ) })
  }

  render () {
    const { pristine } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Pet Name</label>
          <input type="text" name="petName" value={this.state.petName} onChange={this.handleChange} />
        </div>
        <div>
          <label>Type</label>
          <div>
            {this.renderRadioButtons('type', this.TypeOptions)}
          </div>
        </div>
        <div>
          <label>Age Group</label>
          <select name="ageGroup" onChange={this.handleChange}>
            {this.renderSelectOptions('ageGroup', this.AgeOptions, false)}     
          </select>
        </div>
        <div>
          <label>Toppings</label>
          <select name="toppings" onChange={this.handleArrayChange} multiple>        
            {this.renderSelectOptions(
              'toppings',
              [
                { value: 'chicken', label: '🐓 Chicken' },
                { value: 'ham', label: '🐷 Ham' },
                { value: 'mushrooms', label: '🍄 Mushrooms' },
                { value: 'cheese', label: '🧀 Cheese' },
                { value: 'tuna', label: '🐟 Tuna' },
                { value: 'pineapple', label: '🍍 Pineapple' }                                                                                                                                                                     
              ],
              true
            )}
          </select>
        </div>
        <div className="buttons">
          <button type="submit" disabled={pristine}>
            Submit
          </button>
          <button
            type="button"
            onClick={this.handleReset}
            disabled={pristine}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={this.handleCancel}
          >
            Cancel
          </button>
        </div>
        <pre>Form Values: {JSON.stringify(this.state, 0, 2)}</pre>
      </form>
    )
  }
}

export default withRouter(ComponentForm)

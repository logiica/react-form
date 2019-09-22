import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Form.scss'

class ComponentForm extends Component {
  InitialState = { pristine: true, petName: '', type: 'dog', ageGroup: '< 1' };

  constructor (props) {
    super(props)
    this.state = this.InitialState

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleCancel () {
    this.props.history.push('/')
  }

  handleReset () {
    this.setState(this.InitialState)
  }

  handleChange (event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      ...this.state,
      pristine: false,
      [name]: value
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

  renderSelectOptions (name,options) {
    return options.map((opt) => {
      const { value, label } = opt
      return (
        <option value={value} selected={this.isChecked(name, value)}>{label}</option>
    )})
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
            {this.renderRadioButtons('type',
              [{ value: 'dog', label: 'Dog' },
                { value: 'cat', label: 'Cat' },
                { value: 'bird', label: 'Bird' }])}
          </div>
        </div>
        <div>
          <label>Age Group</label>
          <select name="ageGroup" onChange={this.handleChange}>
            {this.renderSelectOptions(
              'ageGroup',
              [
                { value: '< 1', label: 'Less than 1 Year' },
                { value: '<= 5', label: '1 to 5 Years' },
                { value: '<= 10', label: '6 to 10 Years' },
                { value: 'old guy', label: 'More than 10 Years Old' }                                                                                                  
              ]
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

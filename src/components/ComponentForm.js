import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Form.scss'

class ComponentForm extends Component {

  InitialState = {pristine: true, petName: ''};

  constructor(props) {
    super(props);
    this.state = this.InitialState;
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  
  handleCancel () {
    this.props.history.push('/');  
  }
  handleReset () {
    this.setState(this.InitialState)
  }

  handleChange (event) {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({
      ...this.state,
      pristine: false,
      [name]: value
    });      
  }
  
  handleSubmit(event) {
    event.preventDefault();    
    alert('Form Submitted: ' + JSON.stringify(this.state, 0, 2));
    this.props.history.push('/');    
  }
  
  render () {
    const { pristine } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Pet Name</label>
          <input type="text" name="petName" value={this.state.petName} onChange={this.handleChange} />
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

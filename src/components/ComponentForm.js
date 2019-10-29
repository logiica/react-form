import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Select, { createFilter } from 'react-select';

import { DefaultValues, TypeOptions, AgeOptions, ActivityOptions, isValidFieldName } from 'components/FormConstants';
import './Form.scss';

class ComponentForm extends Component {
  InitialState = {
    pristine: true,
    ...DefaultValues
  };

  constructor (props) {
    super(props);
    this.state = this.InitialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.handleActivitiesChange = this.handleActivitiesChange.bind(this);
  }

  // button handlers
  handleCancel = () => this.props.history.push('/');
  handleReset = () => this.setState(this.InitialState);
  handleSubmit = (event) => {
    console.log('Handle submit!');
    // event.preventDefault();
    // To Do: activities[] from React Select will have objects (label+value)
    // Results for submit should map activities to just contain the values
    alert('Form Submitted: ' + JSON.stringify(this.state, 0, 2));
    this.props.history.push('/');
  }

  // change handlers
  handleChange (event) { // For simple form elmement
    const { name, value } = event.target;
    if (isValidFieldName(name)) {
      this.setState({
        ...this.state,
        pristine: false,
        [name]: value
      });
    }
  }

  handleArrayChange (event) { // for HTML selelct
    const { name, options } = event.target;
    const values = [];
    if (isValidFieldName(name)) {
      for (let i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          values.push(options[i].value);
        }
      }
      this.setState({
        ...this.state,
        pristine: false,
        [name]: values
      });
    }
  }

  handleActivitiesChange (selected) { // for React-Select for activities
    this.setState({
      ...this.state,
      pristine: false,
      activities: selected
    });
  }

  renderRadioButtons (name, options) {
    return options.map((opt) => {
      const { value, label } = opt;
      const isChecked = this.state[name] === value;
      return (
        <div key={value}>
          <input type="radio"
            name={name}
            value={value}
            checked={isChecked}
            onChange={this.handleChange}
          />
          {label}
        </div>
      );
    });
  }

  renderSelectOptions (name, options, multiple) {
    return options.map((opt) => {
      const { value, label } = opt;
      let isSelected;
      if (multiple) {
        isSelected = this.state[name].includes(value);
      } else {
        isSelected = this.state[name] === value;
      }
      // Note: react complains about 'selected' but using defaultValue doesn't work for reset
      return (
        <option key={value} value={value} selected={isSelected} >{label}</option>
      );
    });
  }

  render () {
    const { pristine } = this.state;

    return (
      <form method="POST" >
        <input type="hidden" name="form-name" value="componentform" />
        <div>
          <label>Pet Name</label>
          <input type="text" name="petName" value={this.state.petName} onChange={this.handleChange} />
        </div>
        <div>
          <label>Type</label>
          <div>
            {this.renderRadioButtons('type', TypeOptions)}
          </div>
        </div>
        <div>
          <label>Age Group</label>
          <select name="ageGroup" onChange={this.handleChange}>
            {this.renderSelectOptions('ageGroup', AgeOptions, false)}
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
        <div>
          <label>Favorite Activities</label>
          <Select
            name="activities"
            searchable filterOption={createFilter({ matchFrom: 'start' })} isMulti
            value={this.state.activities}
            onChange={this.handleActivitiesChange}
            options={ActivityOptions}
          />
        </div>
        <div>
          <label>Notes</label>
          <textarea name="notes" onChange={this.handleChange} value={this.state.notes}></textarea>
        </div>

        <div className="buttons">
          <button type="submit" disabled={pristine} onClick={this.handleSubmit}>
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
    );
  }
}

export default withRouter(ComponentForm);

import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form'
import './Form.scss'


class SimpleForm extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    window.alert(JSON.stringify(values, 0, 2));
    this.props.history.push('/');
  }

  renderInputField = (name,type,placeholder) => (
    <Field
      name={name}
      component="input"
      type={type}
      placeholder={placeholder}
    />
  )

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        initialValues={{ stooge: 'larry', employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              {this.renderInputField("firstName","text","First Name")}
              />
            </div>               
            <div>
              <label>Last Name</label>
              {this.renderInputField("lastName","text","Last Name")}     
            </div>
            <div>
              <label>Employed</label>
              {this.renderInputField("employed","checkbox",null)} 
            </div>
            <div>
              <label>Favorite Color</label>
              <Field name="favoriteColor" component="select">
                <option />
                <option value="#ff0000">❤️ Red</option>
                <option value="#00ff00">💚 Green</option>
                <option value="#0000ff">💙 Blue</option>
              </Field>
            </div>  
            <div>
              <label>Toppings</label>
              {/* multiple select */}
              <Field name="toppings" component="select" multiple>
                <option value="chicken">🐓 Chicken</option>
                <option value="ham">🐷 Ham</option>
                <option value="mushrooms">🍄 Mushrooms</option>
                <option value="cheese">🧀 Cheese</option>
                <option value="tuna">🐟 Tuna</option>
                <option value="pineapple">🍍 Pineapple</option>
              </Field>
            </div>
            <div>
              <label>Sauces</label>
              <div>
                {/* multi-select checkbox */}
                <label>
                  <Field
                    name="sauces"
                    component="input"
                    type="checkbox"
                    value="ketchup"
                  />{' '}
                  Ketchup
                </label>
                <label>
                  <Field
                    name="sauces"
                    component="input"
                    type="checkbox"
                    value="mustard"
                  />{' '}
                  Mustard
                </label>
                <label>
                  <Field
                    name="sauces"
                    component="input"
                    type="checkbox"
                    value="mayonnaise"
                  />{' '}
                  Mayonnaise
                </label>
                <label>
                  <Field
                    name="sauces"
                    component="input"
                    type="checkbox"
                    value="guacamole"
                  />{' '}
                  Guacamole 🥑
                </label>
              </div>
            </div>  
            <div>
              <label>Best Stooge</label>
              {/* radio button set */}
              <div>
                <label>
                  <Field
                    name="stooge"
                    component="input"
                    type="radio"
                    value="larry"
                  />{' '}
                  Larry
                </label>
                <label>
                  <Field
                    name="stooge"
                    component="input"
                    type="radio"
                    value="moe"
                  />{' '}
                  Moe
                </label>
                <label>
                  <Field
                    name="stooge"
                    component="input"
                    type="radio"
                    value="curly"
                  />{' '}
                  Curly
                </label>
              </div>
            </div>
            <div>
              <label>Notes</label>
              <Field name="notes" component="textarea" placeholder="Notes" />
            </div>                                                    
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    )
  }

}
  export default withRouter(SimpleForm);


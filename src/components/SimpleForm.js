import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Field } from 'react-final-form'
import Select from 'react-select'
import './Form.scss'

const ReactSelectAdapter = ({ input, ...rest }) => (
  <Select {...input} {...rest} searchable ismulti style={{width: '100%'}}/>
)

const activityList = { 'E': 'Eat', 'P': 'Play','S': 'Sleep'};
class SimpleForm extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onSubmit(values) {
    window.alert(JSON.stringify(values, 0, 2));
    this.props.history.push('/');
  }

  onCancel() {
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

  renderRadioButtonSet = (name, options) => {
    return (
      <React.Fragment>
        {options.map ((opt,index) => (
          <label key={index}>
            <Field
              name={name}
              component="input"
              type="radio"
              value={opt.value}
            />{' '}
            {opt.label}
          </label>         
        ))}
      </React.Fragment>
    )
  }

  renderSelect = (name, options, multiple) => {
    let opts = {};
    if (multiple === "multiple") {
        opts['multiple'] = 'multiple';
    }
    return (
      <Field name={name} component="select" type="select" {...opts} >
        {options.map ((opt,index) => 
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        )}
      </Field>
    )
  }

  render() {
    let activityList = [{value: 'eat', label: 'Eat'},
                        {value: 'play', label: 'Play'},
                        {value: 'party', label: 'Party'},
                        {value: 'sleep', label: 'Sleep'}]
    return (
      <Form
        onSubmit={this.onSubmit}
        initialValues={{ type: 'dog', ageGroup:"<= 5" }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Pet Name</label>
              {this.renderInputField("petName","text","Pet Name")}
            </div> 
            <div>
              <label>Type</label>
              <div>
                {this.renderRadioButtonSet(
                      "type",[
                        {value:"cat",label:"Cat"},
                        {value:"dog",label:"Dog"},
                        {value:"bird",label:"Bird"},                                            
                      ]
                )}
              </div>
            </div>                          
            <div>
              <label>Age Group</label>
              {this.renderSelect("ageGroup",
                                [ 
                                  {value:"< 1", label:"Less than 1 Year"},
                                  {value:"<= 5", label:"1 to 5 Years"},
                                  {value:"<= 10", label:"6 to 10 Years"},
                                  {value:"old guy", label:"More than 10 Years Old"},                                                                                                      
                                ], 
                                "single")
              }
            </div>  
            <div>
              <label>Toppings</label>
              {this.renderSelect("toppings",
                                [ 
                                  {value:"chicken", label:"🐓 Chicken"},
                                  {value:"ham", label:"🐷 Ham"},
                                  {value:"mushrooms", label:"🍄 Mushrooms"},
                                  {value:"cheese", label:"🧀 Cheese"},
                                  {value:"tuna", label:"🐟 Tuna"}, 
                                  {value:"pineapple", label:"🍍 Pineapple"},                                                                                                                                                                           
                                ], 
                                "multiple")
              }
            </div>
            <div>
              <label>Favorite Activities</label>
              <Field
                name="activities"
                component={ReactSelectAdapter}
                options={activityList}
                style={{width:"100%",background:"pink"}}
              />
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
              <button
                type="button"
                onClick={this.onCancel}
                disabled={submitting}
              >
                Cancel
              </button>              
            </div>
            <pre>Form Values: {JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    )
  }

}
  export default withRouter(SimpleForm);


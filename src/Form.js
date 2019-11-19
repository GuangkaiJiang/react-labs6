import React from 'react'
class Form extends React.Component {    
    constructor(props) {
        super(props);
        this.state = { 
            employees:props.employees
         }
         this.callBack=this.callBack.bind(this);
    }
    callBack()
    {
        this.props.formOpenHandler();
        this.props.savingHandler();
    }
  render() {
    return (
      <div>
          <form onSubmit={this.SubmitForm}>
            <label>
              Name:
            </label>
            <input type="text" name="name" />
            <br />
            <label>
              Email:
            </label>
            <input type="text" name="email" />
            <br />
            <label>
              Company:
            </label>
            <input type="text" name="company" />
            <br />
            <label>
              Age:
            </label>
            <input type="text" name="age" />
            <br />
            <label>
              isActive:
            </label>
            <input type="checkbox" name="isActive" />
            <br />
            <input type="submit" value="Submit" />
            <button onClick={this.callBack}>Cancel</button>
            <br/>
            <label>{this.state.saving}</label>
          </form>
      </div>
    )
  }
}

export default Form
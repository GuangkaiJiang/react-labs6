import React from 'react'
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saving:""
        }
this.SubmitForm=this.SubmitForm.bind(this);
this.handleReset=this.handleReset.bind(this);
      }
      SubmitForm(event){
        event.preventDefault();
        const data = new FormData(event.target);
        this.setState({saving:"Saving..."})
        fetch('http://localhost:3004/employees', {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id:Math.random().toString(16).substr(2,12)+Math.random().toString(16).substr(2,12),
                isActive: data.get("isActive") ? true : false,
                age: Number(data.get("age")),
                name: data.get("name"),
                company: data.get("company"),
                email: data.get("email")
              })
            })
              .then(response => response.json())
              .then(() => this.setState({saving:"Saved"}));
      }
      handleReset(){
        this.myFormRef.reset();
        this.setState({saving:""});
      }
    
render()
{
    return (

          <div style={{ borderStyle: 'solid', borderWidth: 5, margin: 20 }}> 
            <form ref={(el) => this.myFormRef = el} onSubmit={(e)=>this.SubmitForm(e)}>
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
            </form>
            <button onClick={this.handleReset}>Reset</button>
            <br/>
            <label>{this.state.saving}</label>
          </div>

      )
}




}
export default Form
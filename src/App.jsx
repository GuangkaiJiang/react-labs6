import React from 'react'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      isLoading: true,
      employeesAreFetched: false,
      open: false,
      saving:""
    }
    this.SubmitForm = this.SubmitForm.bind(this);

  }
  componentDidMount() {
    fetch('http://localhost:3004/employees')
      .then(response => response.json())
      .then(data => this.setState({ employees: data }))
      .then(() => this.setState({ employeesAreFetched: true }))
      .then(() => this.setState({ isLoading: false }));
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
          .then(() => this.componentDidMount())   
          .then(() => this.setState({saving:"Saved"}))
  }
  render() {
    console.log('render was fired');
    return (
      <div>
        {<>{this.state.isLoading ? "Loading..." : ("Loaded:" + this.state.employees.length.toString())}</>}
        <button onClick={() => { this.setState({ open: true }) }} >Add employee</button>
        {this.state.open &&
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
            <button onClick={() => { this.setState({ open: false }),this.setState({saving:""}) }} >Cancel</button>
            <br/>
            <label>{this.state.saving}</label>
          </form>

     
        }
      </div>
    )
  }
}

export default App
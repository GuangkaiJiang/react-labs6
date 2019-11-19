import React from 'react'
import List from './List'
import Form from './Form'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      isLoading: true,
      employeesAreFetched: false,
      open: false,
      saving: ""
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
  SubmitForm(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    this.setState({ saving: "Saving..." })
    fetch('http://localhost:3004/employees', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: Math.random().toString(16).substr(2, 12) + Math.random().toString(16).substr(2, 12),
        isActive: data.get("isActive") ? true : false,
        age: Number(data.get("age")),
        name: data.get("name"),
        company: data.get("company"),
        email: data.get("email")
      })
    })
      .then(response => response.json())
      .then(() => this.componentDidMount())
      .then(() => this.setState({ saving: "Saved" }))
  }
  formOpenHandler(event) {
    this.setState({ open: false })
  }
  savingHandler(event) {
    this.setState({ saving: "" })
  }
  render() {
    console.log('render was fired');
    return (
      <div>
        {<>{this.state.isLoading ? "Loading..." : <List employees={this.state.employees} />}</>}
        {/*<>{this.state.isLoading ? "Loading..." : ("Loaded:" + this.state.employees.length.toString())}</>*/}
        {/*<>{this.state.isLoading ? "Loading..." : (this.state.employees.map(employees=><li key={employees.id}>{employees.id+"  "+employees.name}</li>))}</>*/}
        <button onClick={() => { this.setState({ open: true }) }} >Add employee</button>
        {this.state.open && <Form formOpenHandler={this.formOpenHandler} savingHandler={this.savingHandler} />}

      </div>
    )
  }
}

export default App
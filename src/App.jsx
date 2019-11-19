import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      isLoading: true,
      employeesAreFetched: false,
      open: false
    }
  }
  componentDidMount() {
    fetch('http://localhost:3004/employees')
      .then(response => response.json())
      .then(data => this.setState({ employees: data }))
      .then(() => this.setState({ employeesAreFetched: true }))
      .then(() => this.setState({ isLoading: false }));
  }
  render() {
    console.log('render was fired');
    return (
      <div>
        {<>{this.state.isLoading ? "Loading..." : ("Loaded:" + this.state.employees.length.toString())}</>}
        <button onClick={() => { this.setState({ open: true }) }} >Add employee</button>
        {this.state.open &&
          <form >
            <label>
              Name:
    <input type="text" name="name" />
            </label>
            <br />
            <label>
              Email:
    <input type="text" name="email" />
            </label>
            <br />
            <label>
              Company:
    <input type="text" name="company" />
            </label>
            <br />
            <label>
              Age:
    <input type="text" name="age" />
            </label>
            <br />
            <label>
              isActive:
    <input type="text" name="isActive" />
            </label>
            <br />
            <input type="submit" value="Submit" />
            <button onClick={() => { this.setState({ open: false }) }} >Cancel</button>
          </form>
        }
      </div>
    )
  }
}

export default App
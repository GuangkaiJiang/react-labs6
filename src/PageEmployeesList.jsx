import React from 'react'
class PageEmployeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      isLoading: true,
      employeesAreFetched: false,
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
        {<>{this.state.isLoading ? "Loading..." : (this.state.employees.map(employees=><li key={employees.id}>{ employees.id+"  "+employees.name}</li>))}</>}
      </div>
    )
  }
}

export default PageEmployeesList
import React from 'react';
import{Link} from "react-router-dom";
class PageEmployeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      isLoading: true,
    }
  }
  componentDidMount() {
    fetch('http://localhost:3004/employees')
      .then(response => response.json())
      .then(data => this.setState({ employees: data }))
      .then(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <div>
        {<>{this.state.isLoading ? "Loading..." : (this.state.employees.map(employees=><li key={employees.id}>{ employees.id+"  "+employees.name}</li>))}</>}
        <button><Link to="/new">Create Employee</Link></button>
      </div>
    )
  }
}

export default PageEmployeesList
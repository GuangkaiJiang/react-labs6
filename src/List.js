import React from 'react'
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: props.employees
    }

  }
  render() {
    return (
      <div>
        {this.state.employees.map(employees => <li key={employees.id}>{employees.id + "  " + employees.name}</li>)}
      </div>
    )
  }
}

export default List
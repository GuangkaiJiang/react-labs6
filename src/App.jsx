import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      employees:[],
      isLoading:true,
      employeesAreFetched:false,
      open:false
    }
  }
  componentDidMount(){
    fetch('http://localhost:3004/employees')
    .then(response => response.json())
    .then(data=>this.setState({employees:data}))
    .then(()=>this.setState({employeesAreFetched:true}))
    .then(()=>this.setState({isLoading:false}));
  }
render(){
  console.log('render was fired');
  return (
    <div>
    <>{this.state.isLoading?"Loading...":("Loaded:"+this.state.employees.length.toString())}</>
    </div>
  )
}
}

export default App
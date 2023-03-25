import React, {Component} from 'react'
import Task1 from './Tasks/Task1'
import Task2 from './Tasks/Task2'
import Task3 from './Tasks/Task3'
import Task4 from './Tasks/Task4'
import Task5 from './Tasks/Task5'
import Task6_7 from './Tasks/Task6'

class App extends Component{
  render(){
    return(
      <div>
        Task 1: <Task1/>
        <br/>
        Task 2: <Task2/>
        <br/>
        Task 3: <Task3/>
        <br/>
        Task 4: <Task4/>
        <br/>
        Task 5: <Task5/>
        <br/>
        Task 6-7: <Task6_7/>
      </div>
    )
  }
}

export default App;

import React, {Component} from 'react'
import Task1 from './Tasks/Task1'
import Task2 from './Tasks/Task2'
import Task3 from './Tasks/Task3'
import Task4 from './Tasks/Task4'
import Task5 from './Tasks/Task5'
import Task6 from './Tasks/Task6'
import Task7 from './Tasks/Task7'
import Task8 from './Tasks/Task8'
import Task9 from './Tasks/Task9'
import Task10 from './Tasks/Task10'

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
        Task 6: <Task6/>
        <br/>
        Task 7: <Task7/>
        <br/>
        Task 8: <Task8/>
        <br/>
        Task 9: <Task9/>
        <br/>
        Task 10: <Task10/>
        <br/>
      </div>
    )
  }
}

export default App;

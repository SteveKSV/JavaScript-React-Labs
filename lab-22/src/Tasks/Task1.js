import React, {Component} from 'react'

class Task1 extends Component{
    constructor(){
      super()
      this.state = {
        value: '',
      }
    }
  
    handleInput(event){
      this.setState({value: event.target.value});
    }
  
    render(){
    const style = {
        border:
          this.state.value.length >= 4 && this.state.value.length <= 9
            ? '3px solid green'
            : '3px solid red',
    };
      
      return(
        <div>
          <input style={style} value={this.state.value} onChange={this.handleInput.bind(this)}/>
        </div>
      )
    }
}

export default Task1;

import {Component} from 'react'

class Task4 extends Component{
    constructor(){
        super()
        this.state = {
            options: [], 
            value:'',
        }
    }

    handleSelectChange(event){
        this.setState({value: event.target.value});
    }

    addOption(event){
        event.preventDefault();
        
        const option = event.target.city.value;
        this.setState({options: [...this.state.options, option]});
        event.target.reset();
    }

    render(){
        const options = this.state.options.map((option, index) =>{
            return <option key={index} value={index}>{option}</option>
        })
        return (
            <div>
                <select value={this.state.value} onChange={this.handleSelectChange.bind(this)}>{options}</select>
                
                <form onSubmit={this.addOption.bind(this)}>
                    <label>City: </label>
                    <input name="city"/>
                    <input type="submit"/>
                </form>

                <p>Our choice of the city: {this.state.options[this.state.value] || this.state.options[0]}</p>
            </div>
        )
    }
}

export default Task4;
import {Component} from 'react'

class Task2 extends Component{
    constructor(){
        super()
        this.state = {
           users: [
            {name: 'Ivan', surname: 'Ivanenko', salary: 2000, sex: 'Male'},
            {name: 'Ivanka', surname: 'Ivanchuk', salary: 2500, sex: 'Female'},
            ],
        }
    }


    addItem(event){
        event.preventDefault();
        const name = event.target.name.value;
        const surname = event.target.surname.value;
        const salary = event.target.salary.value;
        const sex = event.target.sex.value;

        const newUser = {name: name, surname: surname, salary: salary, sex: sex};
        this.setState({users: [...this.state.users, newUser]});
        event.target.reset();
    }
    
    render(){
        return(
            <div>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Salary</th>
                        <th>Sex</th>
                    </thead>
                    <tbody>
                        {
                        this.state.users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.salary}</td>
                                <td>{user.sex}</td>
                            </tr>)
                            )
                        }
                        </tbody>
                </table>
                <form onSubmit={this.addItem.bind(this)}>
                    <h2>New user: </h2>

                    <label>Name: </label>
                    <input name="name"/>

                    <br/>
                    <br/>
                    
                    <label>Surname: </label>
                    <input name="surname"/>
                    
                    <br/>
                    <br/>

                    <label>Salary: </label>
                    <input name="salary"/>

                    <br/>
                    <br/>
                    <label>Sex: </label>
                    <select name="sex">
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                    
                    <br/>
                    <br/>

                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default Task2;
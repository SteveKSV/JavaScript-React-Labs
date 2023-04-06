import React, {Component} from 'react'

class User extends Component {
	render() {
		return <div>
			<table>
                <thead>
                    <th>Прізвище</th>
                    <th>Ім'я</th>
                    <th>Вік</th>
                    <th>Click!</th>
                </thead>
                <tbody>
                    <td>{this.props.surname}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.age}</td>
                    <td>
                    <button onClick={this.props.deleteUser.bind(null, this.props.index)}>
				        Натисни на мене та я видалю цей елемент.
			        </button>
                    </td>
                </tbody>
            </table>
		</div>;
	}
}

class Task5 extends Component {
	constructor() {
		super();
		
		//Переробляємо стейт з юзерами на масив:
		this.state = {
			users: [
				{name: 'Микола', surname: 'Шевченко', age: 15},
				{name: 'Василь', surname: 'Ковальчук', age: 19},
				{name: 'Петро', surname: 'Петренко', age: 21},
			]
		};
	}
	
	//Видаляємо заданий елемент:
	deleteUser(index) {
		this.state.users.splice(index, 1);
		this.setState({users: this.state.users});
	}


	render() {
		
		//Формуємо компоненти в циклі:
		const users = this.state.users.map((item, index) => {
			return <User
				key={index}
				name={item.name}
				surname={item.surname}
				age={item.age}
                num={index + 1}
                deleteUser={this.deleteUser.bind(this)}
			/>;
		});
		return <div>
			{users}
		</div>;
	}
}
 export default Task5;
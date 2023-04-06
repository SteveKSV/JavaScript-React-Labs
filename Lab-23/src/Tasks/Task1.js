import React, {Component} from 'react'

class User extends Component {
	render() {
		return <div>
			<table>
                <thead>
                    <th>Прізвище</th>
                    <th>Ім'я</th>
                    <th>Вік</th>
                </thead>
                <tbody>
                    <td>{this.props.surname}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.age}</td>
                </tbody>
            </table>
		</div>;
	}
}

class Task1 extends Component {
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
	
	render() {
		
		//Формуємо компоненти в циклі:
		const users = this.state.users.map((item, index) => {
			return <User
				key={index}
				name={item.name}
				surname={item.surname}
				age={item.age}
			/>;
		});
		return <div>
			{users}
		</div>;
	}
}
 export default Task1;
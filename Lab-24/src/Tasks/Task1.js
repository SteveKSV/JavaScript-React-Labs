import React, {Component} from 'react'

class EmployeesTable extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		employees: props.employees,
	  };
	}
  
	handleDaysWorkedChange = (index, event) => {
	  const updatedEmployees = [...this.state.employees];
	  updatedEmployees[index].daysWorked = event.target.value;
	  this.setState({ employees: updatedEmployees });
	};
  
	handleSalaryRateChange = (index, event) => {
	  const updatedEmployees = [...this.state.employees];
	  updatedEmployees[index].salaryRate = event.target.value;
	  this.setState({ employees: updatedEmployees });
	};
  
	getTotalSalary = () => {
	  return this.state.employees.reduce((total, employee) => {
		return total + employee.daysWorked * employee.salaryRate;
	  }, 0);
	};
  
	render() {
	  return (
		<div>
		  <table>
			<thead>
			  <tr>
				<th>Ім'я</th>
				<th>Прізвище</th>
				<th>Кількість відпрацьованих днів</th>
				<th>Зарплатна ставка за день</th>
				<th>Зарплата</th>
			  </tr>
			</thead>
			<tbody>
			  {this.state.employees.map((employee, index) => {
				return (
				  <tr key={index}>
					<td>{employee.firstName}</td>
					<td>{employee.lastName}</td>
					<td>
					  <input
						type="number"
						value={employee.daysWorked}
						onChange={(event) => this.handleDaysWorkedChange(index, event)}
					  />
					</td>
					<td>
					  <input
						type="number"
						value={employee.salaryRate}
						onChange={(event) => this.handleSalaryRateChange(index, event)}
					  />
					</td>
					<td>{employee.daysWorked * employee.salaryRate}</td>
				  </tr>
				);
			  })}
			</tbody>
		  </table>
		  <div>Сумарна зарплата: {this.getTotalSalary()}</div>
		</div>
	  );
	}
}
  
class Task1 extends Component {
	constructor() {
		super();
		
		this.state = {
			employees: [
				{firstName: 'Микола', lastName: 'Шевченко', daysWorked: 15, salaryRate: 300},
				{firstName: 'Василь', lastName: 'Ковальчук', daysWorked: 20, salaryRate: 345},
				{firstName: 'Петро', lastName: 'Петренко', daysWorked: 5, salaryRate: 200},
			]
		};
	}
	
	render() {
		return <div>
			<EmployeesTable employees={this.state.employees}/>
		</div>;
	}
}
 export default Task1;
import {Component} from 'react'

class Task3 extends Component {
    constructor() {
      super();
      this.state = {
        employees: [
            {name: 'Ivan', surname:'Ivanenko', salary: 3000},
            {name: 'Anton', surname:'Antonenko', salary: 3030},
            {name: 'John', surname:'Johnenko', salary: 4000},
            {name: 'Jeka', surname:'Jekers', salary: 5000},
            {name: 'Poka', surname:'Pokers', salary: 6000},
            {name: 'Moka', surname:'Mokers', salary: 7000},
            {name: 'Cena', surname:'Ceners', salary: 8000},
            {name: 'Geralt', surname:'Rivias', salary: 1000},
            {name: 'Ivana', surname:'Ivanenkoa', salary: 3000},
            {name: 'Antona', surname:'Antonenkoa', salary: 3030},

            {name: 'Joha', surname:'Johnenkoa', salary: 4000},
            {name: 'Jekaa', surname:'Jekersa', salary: 5000},
            {name: 'Pokaa', surname:'Pokersa', salary: 6000},
            {name: 'Mokaa', surname:'Mokersa', salary: 7000},
            {name: 'Cenaaa', surname:'Cenersa', salary: 8000},
            {name: 'Geralta', surname:'Riviasa', salary: 1000},
        ], 
        page: 1, 
      };
    }
  
    renderTable() {
        const { employees, page } = this.state;
        const startIndex = (page - 1) * 10;
        const endIndex = page * 10;
    
        const rows = employees
          .slice(startIndex, endIndex)
          .map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.salary}</td>
            </tr>
          ));
    
        return (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        );
      }

    renderPageLinks() {
        const { employees } = this.state;
        const pageCount = Math.ceil(employees.length / 10);
        const pageLinks = [];
    
        for (let i = 1; i <= pageCount; i++) {
          const link = (
            <button key={i} onClick={() => this.setState({ page: i })}>
              {i}
            </button>
          );
          pageLinks.push(link);
        }
    
        return <div>{pageLinks}</div>;
    }

    render() {
      return (
        <div>
            {this.renderTable()}
            {this.renderPageLinks()}
        </div>
      );
    }
}

export default Task3;
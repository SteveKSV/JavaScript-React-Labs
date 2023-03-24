import React, {useState} from 'react'

class Task1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['Item 1', 'Item 2', 'Item 3'],
      checked: {},
    };
  }

  handleCheckboxClick = (item) => {
    this.setState((prevState) => {
      const newChecked = { ...prevState.checked };
      newChecked[item] = !newChecked[item];
      return { checked: newChecked };
    });
  };

  render() {
    const { list, checked } = this.state;
    return (
      <ul>
        {list.map((item) => (
          <li key={item}>
            <input
              type="checkbox"
              checked={checked[item] || false}
              onChange={() => this.handleCheckboxClick(item)}
            />
            <span
              style={{
                textDecoration: checked[item] ? 'line-through' : 'none',
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

class Task2 extends React.Component{
  constructor(){
    super()
    this.state = {
      employees: [
        { id: 1, firstName: 'John', lastName: 'Doe', salary: 5000, isChecked: true },
        { id: 2, firstName: 'Jane', lastName: 'Doe', salary: 6000, isChecked: true },
        { id: 3, firstName: 'Bob', lastName: 'Smith', salary: 7000, isChecked: true },
      ],
    }
  }

  // оновлюємо state компонента при зміні значення чекбокса для працівника.
  // Ми створюємо новий масив updatedEmployees, де міняємо значення
  // isChecked для працівника з вказаним id. 
  // Потім повертаємо новий об'єкт state з оновленим масивом employees.

  handleCheckboxChange = (employeeId) => {
    this.setState((prevState) => {
      const updatedEmployees = prevState.employees.map((employee) => {
        if (employee.id === employeeId)
          return { ...employee, isChecked: !employee.isChecked };
        
        return employee;
      });

      return { employees: updatedEmployees };
    });
  };

  render() {
    const { employees } = this.state;

    const totalSalary = employees
      .filter((employee) => employee.isChecked)
      .reduce((total, employee) => total + employee.salary, 0);

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Salary</th>
              <th>Is Checked</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.salary}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={employee.isChecked}
                    onChange={() => this.handleCheckboxChange(employee.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total Salary: {totalSalary}</p>
      </div>
    );
  }
}

function CheckboxParagraph(props) {
  const [isChecked, setIsChecked] = useState(true); // початково всі чекбокси відзначені

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        {props.label}
      </label>
      {isChecked && <p>{props.text}</p>}
    </>
  );
}

class Task3 extends React.Component{
  render(){
    const arr = ['One', 'Two', 'Three', 'Four', 'Five'];
    return (
      <div>
        {arr.map((elem, index) => (
          <CheckboxParagraph key={index} label={`Element ${index+1}`} text={elem} />
        ))}
      </div>
    );
  } 
}

class Task4 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: 'Микола', surname: 'Шевченко', age: 30 },
        { name: 'Василь', surname: 'Чумак', age: 40 },
        { name: 'Петро', surname: 'Стеценко', age: 50 },
      ],
      showDetails: [],
    };
  }

  handleCheckboxChange(index) {
    const showDetails = [...this.state.showDetails];
    showDetails[index] = !showDetails[index];
    this.setState({ showDetails });
  }

  render() {
    const list = this.state.users.map((user, index) => (
      <li key={index}>
        <label>
          <input
            type="checkbox"
            checked={this.state.showDetails[index]}
            onChange={() => this.handleCheckboxChange(index)}
            value={user.name}
          />
          {this.state.showDetails[index]
            ? `${user.name} ${user.surname} ${user.age}`
            : user.name}
        </label>
      </li>
    ))
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

class Task5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['item1', 'item2', 'item3'], // масив елементів
      currentItemIndex: null // індекс елемента, який редагується
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  // обробник натискання на елемент списку
  handleItemClick(index) {
    this.setState({ currentItemIndex: index });
  }

  // обробник зміни тексту в інпуті
  handleInputChange(event) {
    const { items, currentItemIndex } = this.state;
    const newItems = [...items];
    newItems[currentItemIndex] = event.target.value;
    this.setState({ items: newItems });
  }

  // обробник втрати фокусу на інпуті
  handleInputBlur() {
    this.setState({ currentItemIndex: null });
  }

  render() {
    const { items, currentItemIndex } = this.state;
    return (
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => this.handleItemClick(index)}
          >
            {currentItemIndex === index ? (
              <input
                type="text"
                value={item}
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
              />
            ) : (
              <span>{item}</span>
            )}
          </li>
        ))}
      </ul>
    );
  }
}


class Task6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: 'Микола', age: 30 },
        { name: 'Василь', age: 40 },
        { name: 'Петро', age: 50 },
      ],
      isEditable: false,
    };
  }

  handleEdit = (index) => {
    const { isEditable } = this.state;
    this.setState({ isEditable: !isEditable, editIndex: index });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const { users, editIndex } = this.state;

    const updatedUsers = [...users];
    updatedUsers[editIndex][name] = value;

    this.setState({ users: updatedUsers });
  };

  renderTableData() {
    const { users, isEditable, editIndex } = this.state;

    return users.map((user, index) => {
      return (
        <tr key={index}>
          <td>
            {isEditable && editIndex === index ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={this.handleInputChange}
              />
            ) : (
              user.name
            )}
          </td>
          <td>
            {isEditable && editIndex === index ? (
              <input
                type="text"
                name="age"
                value={user.age}
                onChange={this.handleInputChange}
              />
            ) : (
              user.age
            )}
          </td>
          <td>
            <button onClick={() => this.handleEdit(index)}>
              Редагувати
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

class Task7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        'Маршрут 1',
        'Маршрут 2',
        'Маршрут 3',
      ],
      selectedRoute: '',
    };
  }

  handleRouteChange = (event) => {
    this.setState({ selectedRoute: event.target.value });
  };

  renderRoutes() {
    const { routes } = this.state;
    return routes.map((route, index) => {
      return (
        <div key={index}>
          <input
            type="radio"
            id={route}
            name="route"
            value={route}
            onChange={this.handleRouteChange}
          />
          <label htmlFor={route}>{route}</label>
        </div>
      );
    });
  }

  render() {
    const { selectedRoute } = this.state;
    return (
      <div>
        <form>
          {this.renderRoutes()}
        </form>
        <p>Вибраний маршрут: {selectedRoute}</p>
      </div>
    );
  }
}

class Task8 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      currentNoteTitle: '',
      currentNoteText: ''
    };
  }

  handleTitleChange = (event) => {
    this.setState({ currentNoteTitle: event.target.value });
  }

  handleTextChange = (event) => {
    this.setState({ currentNoteText: event.target.value });
  }

  handleNoteSubmit = (event) => {
    event.preventDefault();
    const note = {
      title: this.state.currentNoteTitle,
      text: this.state.currentNoteText,
      createdAt: new Date()
    };
    const notes = [...this.state.notes, note];
    this.setState({
      notes,
      currentNoteTitle: '',
      currentNoteText: ''
    });
  }

  handleNoteDelete = (index) => {
    const notes = [...this.state.notes];
    notes.splice(index, 1);
    this.setState({ notes });
  }

  render() {
    return (
      <div>
        <h1>Notes</h1>
        <form onSubmit={this.handleNoteSubmit}>
          <label>
            Title:
            <input type="text" value={this.state.currentNoteTitle} onChange={this.handleTitleChange} />
          </label>
          <br />
          <label>
            Text:
            <textarea value={this.state.currentNoteText} onChange={this.handleTextChange}></textarea>
          </label>
          <br />
          <button type="submit">Add Note</button>
        </form>
        <div>
          {this.state.notes.map((note, index) => (
            <div key={index}>
              <h2>{note.title}</h2>
              <p>{note.text}</p>
              <p>Created at: {note.createdAt.toLocaleString()}</p>
              <button onClick={() => this.handleNoteDelete(index)}>Delete</button>
              <button>Edit</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

class Task9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { id: 1, firstName: 'John', lastName: 'Doe', salary: 1000 },
        { id: 2, firstName: 'Jane', lastName: 'Doe', salary: 1500 },
        { id: 3, firstName: 'Bob', lastName: 'Smith', salary: 1200 },
        { id: 4, firstName: 'Alice', lastName: 'Jones', salary: 2000 },
      ],
      sortColumn: '',
      sortOrder: 'asc'
    };
  }

  handleSort = (column) => {
    const sortOrder = this.state.sortOrder === 'asc' ? 'desc' : 'asc';
    const sortedEmployees = this.state.employees.sort((a, b) => {
      if (column === 'firstName') {
        return a.firstName.localeCompare(b.firstName);
      } else if (column === 'lastName') {
        return a.lastName.localeCompare(b.lastName);
      } else {
        return a.salary - b.salary;
      }
    });

    if (sortOrder === 'desc') {
      sortedEmployees.reverse();
    }

    this.setState({
      employees: sortedEmployees,
      sortColumn: column,
      sortOrder: sortOrder
    });
  }

  render() {
    const { employees, sortColumn, sortOrder } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th onClick={() => this.handleSort('firstName')}>
              First Name {sortColumn === 'firstName' ? sortOrder === 'asc' ? '↑' : '↓' : ''}
            </th>
            <th onClick={() => this.handleSort('lastName')}>
              Last Name {sortColumn === 'lastName' ? sortOrder === 'asc' ? '↑' : '↓' : ''}
            </th>
            <th onClick={() => this.handleSort('salary')}>
              Salary {sortColumn === 'salary' ? sortOrder === 'asc' ? '↑' : '↓' : ''}
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

class Task10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: 'ukrainian' };
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(event) {
    this.setState({ language: event.target.value });
  }

  render() {
    const daysOfWeek = {
      ukrainian: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'],
      english: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    };

    const options = Object.keys(daysOfWeek).map((language) => (
      <option key={language} value={language}>
        {language === 'ukrainian' ? 'Українська' : 'English'}
      </option>
    ));

    const days = daysOfWeek[this.state.language].map((day) => (
      <option key={day}>{day}</option>
    ));

    return (
      <div>
        <label htmlFor="language-select">Оберіть мову:</label>
        <select id="language-select" value={this.state.language} onChange={this.handleLanguageChange}>
          {options}
        </select>
        <br />
        <label htmlFor="days-of-week-select">
          {this.state.language === 'ukrainian' ? 'Дні тижня' : 'Days of the week'}
        </label>
        <select id="days-of-week-select">{days}</select>
      </div>
    );
  }
}

class App extends React.Component{
  render(){
    return (
      <div>
        Task 1 - <Task1 />
        Task 2 - <Task2 />
        Task 3 - <Task3 />
        Task 4 - <Task4 />
        Task 5 - <Task5 />
        Task 6 - <Task6 />
        Task 7 - <Task7 />
        Task 8 - <Task8 />
        Task 9 - <Task9 />
        Task 10 - <Task10 />
      </div>
    );
  }
}

export default App;

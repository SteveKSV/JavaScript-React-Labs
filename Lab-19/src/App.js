import * as React from "react";

class Task1 extends React.Component {
    constructor() {
        super();
        this.state = { items: ['Kola', 'Vasil', 'Petro'] }
    }

    render() {
        const list = this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>
        });
        return (
            <ul>{list}</ul>
        );
    }
}

class Task2 extends React.Component {
    constructor() {
        super();
        this.state = { items: ['Kola', 'Vasil', 'Petro'] }
    }

    addToList() {
        this.state.items.push('A new name');
        this.setState({ items: this.state.items });
    }
    render() {
        const list = this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>
        });

        return (
            <>
                <ul>{list}</ul>
                <button onClick={this.addToList.bind(this)}>Click on me to add point to list!</button>
            </>
        );
    }
}

class Task3 extends React.Component {
    constructor() {
        super();
        this.state = { items: ['Kola', 'Vasil', 'Petro'] }
    }
    deleteLastItem(index) {
        this.state.items.splice(index, 1);
        this.setState({ items: this.state.items });
    }
    render() {
        const list = this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>
        });

        return (
            <>
                <ul>{list}</ul>
                <button onClick={this.deleteLastItem.bind(this, this.state.items.length - 1)}>Click on me to delete last item of the list</button>
            </>
        );
    }
}

class Task4 extends React.Component {
    constructor() {
        super();
        this.state = { items: ['Kola', 'Vasil', 'Petro'] }
    }
    deleteLastItem(index) {
        this.state.items.splice(index, 1);
        this.setState({ items: this.state.items });
    }
    render() {
        const list = this.state.items.map((item, index) => {
            return <li key={index}>{item}
                <button onClick={this.deleteLastItem.bind(this, index)}>Click on me to delete this item from the list</button>
            </li>
        });

        return (
            <>
                <ul>{list}</ul>
            </>
        );
    }
}


class Task5 extends React.Component {
    constructor() {
        super();
        this.state = { content: "" };
    }

    handleChange(event) {
        this.setState({ content: event.target.value })
    }

    render() {
        return (
            <>
                <input onChange={this.handleChange.bind(this)}></input>
                <p>{this.state.content}</p>
            </>
        );
    }
}


class Task6 extends React.Component {
    constructor() {
        super();
        this.state = { content: "" };
    }

    handleChange(event) {
        this.setState({ content: event.target.value })
    }

    render() {
        return (
            <>
                <input onChange={this.handleChange.bind(this)}></input>
                <p>{this.state.content.toUpperCase()}</p>
            </>
        );
    }
}

class Task7 extends React.Component {
    constructor() {
        super();
        this.state = { year: "" };
    }

    birthdayYear(event) {
        const yearNow = new Date().getFullYear();
        const number = parseInt(event.target.value, 0);
        if (!isNaN(number)) {
            this.setState({ year: yearNow - number });
        }
    }
    render() {
        return (
            <>
                <input onChange={this.birthdayYear.bind(this)}></input>
                <p>{this.state.year}</p>
            </>
        );
    }
}

class Task8 extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }

    handleChanger(event) {
        const array = event.target.value.split(" ");

        this.setState({ items: array })
    }

    render() {
        return (
            <>
                <input onChange={this.handleChanger.bind(this)}></input>
                <p>{this.state.items[0]}</p>
                <p>{this.state.items[1]}</p>
                <p>{this.state.items[2]}</p>
            </>
        );
    }
}

class Task9 extends React.Component {
    constructor() {
        super();
        this.state = { content: '', output: '' }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        const inputValue = this.state.value;
        this.setState({ output: inputValue });
        event.preventDefault();
    }

    render() {
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <input onChange={this.handleChange.bind(this)} />
            <input type="submit" />
            <p>{this.state.output}</p>
        </form>
    }
}

class Task10 extends React.Component {
    constructor() {
        super();
        this.state = { value1: '', value2: '', sum: '' }
    }

    handleChange1(event) {
        this.setState({ value1: event.target.value });
    }

    handleChange2(event) {
        this.setState({ value2: event.target.value });
    }

    handleSubmit(event) {
        const firstNumber = parseInt(this.state.value1, 0);
        const secondNumber = parseInt(this.state.value2, 0);
        const sum = firstNumber + secondNumber;
        this.setState({ sum: sum });
        event.preventDefault();
    }

    render() {
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <input onChange={this.handleChange1.bind(this)} />
            <input onChange={this.handleChange2.bind(this)} />
            <input type="submit" />
            <p>{this.state.sum}</p>
        </form>
    }
}

class Task11 extends React.Component {
    constructor() {
        super();
        this.state = { surname: '', name: '', lastname: '' }
    }

    handleChange1(event) {
        this.setState({ surname: event.target.value });
    }

    handleChange2(event) {
        this.setState({ name: event.target.value });
    }

    handleChange3(event) {
        this.setState({ lastname: event.target.value });
    }

    handleSubmit(event) {
        const surname = this.state.surname;
        const name = this.state.name;
        const lastname = this.state.lastname;

        this.setState({ PIB: surname + ' ' + name + ' ' + lastname });
        event.preventDefault();
    }

    render() {
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <input onChange={this.handleChange1.bind(this)} />
            <input onChange={this.handleChange2.bind(this)} />
            <input onChange={this.handleChange3.bind(this)} />
            <input type="submit" />
            <p>{this.state.PIB}</p>
        </form>
    }
}

class Task12 extends React.Component {
    constructor() {
        super();
        this.state = { names: ['Ivan', 'Anton'], value: '' }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.state.names.push(this.state.value);
        this.setState({ names: this.state.names });
        event.preventDefault();
    }

    render() {
        const list = this.state.names.map((item, index) => {
            return <li key={index}>{item}</li>
        });

        return <form onSubmit={this.handleSubmit.bind(this)}>
            <input onChange={this.handleChange.bind(this)} />
            <input type="submit" />
            <ul>
                {list}
            </ul>
        </form>
    }
}

class Task13 extends React.Component {
    constructor() {
        super();
        this.state = { names: ['Ivan', 'Anton'], value: '' }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.state.names.push(this.state.value);
        this.setState({ names: this.state.names });
        event.preventDefault();
    }

    deleteName(index) {
        this.state.names.splice(index, 1);
        this.setState({ names: this.state.names });
    }

    render() {
        const list = this.state.names.map((name, index) => {
            return <ul><li key={index}>{name}
                <button onClick={this.deleteName.bind(this, index)}>Click on me to delete this item from the list</button>
            </li></ul>
        });

        return <form onSubmit={this.handleSubmit.bind(this)}>
            <input onChange={this.handleChange.bind(this)} />
            <input type="submit" />
            {list}
        </form>
    }
}


class Task14 extends React.Component {
    constructor() {
        super();
        this.state = {
            hrefs: [
                { href: '1.html', text: 'link 1' },
                { href: '2.html', text: 'link 2' },
                { href: '3.html', text: 'link 3' },
            ],
            newHref: '',
            newText: '',
        };
    }

    handleHrefChange(event) {
        this.setState({ newHref: event.target.value });
    }

    handleTextChange(event) {
        this.setState({ newText: event.target.value });
    }

    handleAddClick(event) {
        event.preventDefault();
        const hrefs = this.state.hrefs.concat({ href: this.state.newHref, text: this.state.newText });
        this.setState({ hrefs: hrefs, newHref: '', newText: '' });
    }

    render() {
        const listItems = this.state.hrefs.map((item, index) =>
            <li key={index}><a href={item.href}>{item.text}</a></li>
        );

        return (
            <div>
                <ul>{listItems}</ul>
                <form onSubmit={this.handleAddClick.bind(this)}>
                    <input type="text" value={this.state.newHref} onChange={this.handleHrefChange.bind(this)} placeholder="href" />
                    <input type="text" value={this.state.newText} onChange={this.handleTextChange.bind(this)} placeholder="text" />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

class Task15 extends React.Component {
    constructor() {
        super();
        this.state = {
            numbers: [1, 2, 3, 4, 5],
            inputNumber: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleInputChange(event) {
        this.setState({ inputNumber: event.target.value });
    }

    handleButtonClick() {
        const index = this.state.numbers.indexOf(parseInt(this.state.inputNumber));
        if (index !== -1) {
            this.setState({
                numbers: [...this.state.numbers.slice(0, index), ...this.state.numbers.slice(index + 1)],
                inputNumber: ''
            });
        }
    }

    render() {
        const numberList = this.state.numbers.map((number, index) => {
            return (
                <li key={index}>{number}</li>
            );
        });

        return (
            <div>
                <ul>{numberList}</ul>
                <input type="number" value={this.state.inputNumber} onChange={this.handleInputChange} />
                <button onClick={this.handleButtonClick}>Delete</button>
            </div>
        );
    }
}

class Task16 extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [
                { name: 'Anton', age: 30 },
                { name: 'Ivan', age: 40 },
                { name: 'Stepan', age: 50 },
            ],
            newName: '',
            newAge: '',
        };
    }

    handleNameChange(event) {
        this.setState({ newName: event.target.value });
    }

    handleAgeChange(event) {
        this.setState({ newAge: event.target.value });
    }

    handleSubmit(event) {
        const newUser = {
            name: this.state.newName,
            age: this.state.newAge,
        };
        this.setState({ users: [...this.state.users, newUser] });
        event.preventDefault();
    }

    render() {
        const userList = this.state.users.map((user, index) => (
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
            </tr>
        ));

        return (
            <div>
                <table>
                    <tbody>{userList}</tbody>
                </table>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={this.state.newName}
                        onChange={this.handleNameChange.bind(this)}
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        value={this.state.newAge}
                        onChange={this.handleAgeChange.bind(this)}
                    />
                    <button type="submit">Add users</button>
                </form>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <>
                <div><Task1 /></div>
                --------------------
                <div><Task2 /></div>
                --------------------
                <div><Task3 /></div>
                --------------------
                <div><Task4 /></div>
                --------------------
                <div>Task 5 <Task5 /></div>
                --------------------
                <div>Task 6 <Task6 /></div>
                --------------------
                <div>Task 7 <Task7 /></div>
                --------------------
                <div>Task 8 <Task8 /></div>
                --------------------
                <div>Task 9 <Task9 /></div>
                --------------------
                <div>Task 10 <Task10 /></div>
                --------------------
                <div>Task 11 <Task11 /></div>
                --------------------
                <div>Task 13 <Task13 /></div>
                --------------------
                <div>Task 14 <Task14 /></div>
                --------------------
                <div>Task 15 <Task15 /></div>
                --------------------
                <div>Task 16 <Task16 /></div>
                --------------------
            </>
        );
    }
}

export default App;

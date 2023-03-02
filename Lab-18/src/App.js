import React from 'react';


class Task1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Ivan',
            age: 25
        };
    }
    render() {
        return (<div>Name:{this.state.name}, age: {this.state.age}</div>);
    }
}


class Task2 extends React.Component {
    showMessage() {
        alert("Hello");
    }
    render() {
        return (<button onClick={this.showMessage}>Click on me!</button>);
    }
}


class Task3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Ivan',
            age: 25
        };
    }

    showName() {
        alert('Name: ' + this.state.name);
    }
    render() {
        return (<button onClick={this.showName.bind(this)}>Click on me!</button>);
    }
}

class Task4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Ivan',
            age: 25
        };
    }

    change() {
        this.setState({ name: 'Kola', age: 30 });
    }


    render() {
        return (
            <>
                <div>Name: {this.state.name}, age: {this.state.age}</div>
                <button onClick={this.change.bind(this)}>Click on me and I show you changed name and age!</button>
            </>
        );
    }
}

class Task5 extends React.Component {
    constructor() {
        super();
        this.state = { show: true, name: 'Ivan' };
    }

    change() {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div>
                {this.state.show ? 'Hello, ' + this.state.name : 'Goodbye, ' + this.state.name}
                <br></br>
                <button onClick={this.change.bind(this)}>Click on me!</button>
            </div>)
    }
}

class Task6 extends React.Component {
    constructor() {
        super();
        this.state = { show: false, name: 'Ivan', age: 25 };
    }

    added() {
        if (this.state.show) {
            const res = <p>Name: {this.state.name}, age: {this.state.age}</p>
            return res;
        }
    }

    hideText() {
        this.setState({ show: true })
    }

    render() {
        const output = this.added();
        return (
            <div>
                <button onClick={this.hideText.bind(this)}>Click on me!</button>
                {output}
            </div>)
    }
}

class Task7 extends React.Component {
    constructor() {
        super();
        this.state = { show: false, name: 'Ivan', age: 25 };
    }

    added() {
        if (this.state.show) {
            const res = <p>Name: {this.state.name}, age: {this.state.age}</p>
            return res;
        }
    }

    hideText() {
        this.setState({ show: !this.state.show })
    }

    render() {
        const output = this.added();
        return (
            <div>
                <button onClick={this.hideText.bind(this)}>Click on me!</button>
                {output}
            </div>)
    }
}

class Task8 extends React.Component {
    constructor() {
        super();
        this.state = { show: false, name: 'Ivan', age: 25 };
    }

    added() {
        if (this.state.show) {
            const res = <p>Name: {this.state.name}, age: {this.state.age}</p>
            return res;
        }
    }

    hideText() {
        this.setState({ show: !this.state.show })
    }

    render() {
        const output = this.added();
        return (
            <div>
                <button onClick={this.hideText.bind(this)}>{this.state.show ? 'Hide' : 'Show'}</button>
                {output}
            </div>)
    }
}

class Task9 extends React.Component {
    constructor() {
        super();
        this.state = { items: ['Kola', 'Vasil', 'Petro'] };
    }



    render() {
        const list = this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>
        });
        return (
            <ul>{list}</ul>
        )
    }
}

class Task10 extends React.Component {
    constructor() {
        super();
        this.state = { items: ['Kola', 'Vasil', 'Petro'] };
    }



    render() {
        const list = this.state.items.map((item, index) => {
            return <li key={index}>{item} - {index + 1}</li>
        });
        return (
            <ul>{list}</ul>
        )
    }
}

class Task11 extends React.Component {
    constructor() {
        super();
        this.state = {
            hrefs:
                [
                    { href: '1.html', text: 'link 1' },
                    { href: '2.html', text: 'link 2' },
                    { href: '3.html', text: 'link 3' },
                ]
        };
    }

    render() {
        const list = this.state.hrefs.map((link, index) => {
            return <li key={index}><a href={link.href}>{link.text}</a></li>
        });
        return <ul>{list}</ul>

    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <div><Task1 /></div>
                -------
                <div><Task2 /></div>
                -------
                <div><Task3 /></div>
                -------
                <div><Task4 /></div>
                -------
                <div><Task5 /></div>
                -------
                <div><Task6 /></div>
                -------
                <div><Task7 /></div>
                -------
                <div><Task8 /></div>
                -------
                <div><Task9 /></div>
                -------
                <div><Task10 /></div>
                -------
                <div><Task11 /></div>
                -------
            </div>
        );
    }
}

export default App;

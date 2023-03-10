import * as React from "react";

class Task1 extends React.Component {
    constructor() {
        super();
        this.state = { value: '' };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <>
                <p>Task1 text: {this.state.value}</p>
                <textarea value={this.state.value} onChange={this.handleChange.bind(this)} />
            </>);
    }
}

class Task2 extends React.Component {
    constructor() {
        super();
        this.state = { checked: false };
    }

    handleCheckboxChange(event) {
        this.setState({ checked: !this.state.checked });
    }

    render() {
        return (
            <>
                <p>Task2 status of the checkbox: {this.state.checked ? 'checked' : 'not checked'}</p>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckboxChange.bind(this)} />
            </>
        );
    }
}

class Task3 extends React.Component {
    constructor() {
        super();
        this.state = { checked: false };
    }

    handleCheckboxChange(event) {
        this.setState({ checked: !this.state.checked });
    }

    render() {
        return (
            <>
                <p>{this.state.checked ? 'Task2: some TEXT' : ''}</p>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckboxChange.bind(this)} />
            </>
        );
    }
}

class Task4 extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'None',
            towns: [
                'None',
                'Chernivtsy',
                'Kyiv',
                'Charkiw',
            ]
        };

    }

    handleSelectChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const options = this.state.towns.map((item, index) => {
            return <option key={index} value={index}>{item}</option>;
        });

        return(
            <>
                <select value={this.state.value} onChange={this.handleSelectChange.bind(this)}>
                    {options}
                </select>
                <p>Task4: Town -> {this.state.towns[this.state.value]}</p>
            </>
        );
    }
}

class Task5 extends React.Component {
    constructor() {
        super();
        this.state = { option: 'option1' };
    }

    handleRadioChange(event) {
        this.setState({ option: event.target.value });
    }

    render() {
        return (
            <>
                <p>Task5: Which option? {this.state.option}</p>
                <input
                    name="lang"
                    type="radio"
                    value="option1"
                    checked={this.state.option == 'option1'}
                    onChange={this.handleRadioChange.bind(this)}
                />

                <input
                    name="lang"
                    type="radio"
                    value="option2"
                    checked={this.state.option == 'option2'}
                    onChange={this.handleRadioChange.bind(this)}
                />

                <input
                    name="lang"
                    type="radio"
                    value="option3"
                    checked={this.state.option == 'option3'}
                    onChange={this.handleRadioChange.bind(this)}
                />
            </>
        );
    }
}

class Task6 extends React.Component {
    constructor() {
        super();

        this.state = {
            texts: []
        };
    }

    handleButtonClick = () => {
        const { texts } = this.state;
        const currentText = this.textarea.value;

        this.setState({
            texts: [...texts, currentText]
        });

        this.textarea.value = "";
    };

    render() {
        const { texts } = this.state;

        return (
            <div>
                <textarea ref={el => (this.textarea = el)} />
                <button onClick={this.handleButtonClick}>Add Text</button>
                {texts.map(text => (
                    <p>{text}</p>
                ))}
            </div>
        );
    }
}

class Task7 extends React.Component {
    constructor() {
        super();

        this.state = {
            color: "#000000"
        };
    }

    handleColorChange = event => {
        this.setState({
            color: event.target.value
        });
    };

    render() {
        const { color } = this.state;

        return (
            <div>
                <select value={color} onChange={this.handleColorChange}>
                    <option value="#000000">Black</option>
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option>
                </select>
                <p style={{ color }}>This text is going to change color</p>
            </div>
        );
    }
}

class Task8 extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedOption: 'unmarked',
            checkboxValue: false,
        };
    }

    handleSelectChange = (event) => {
        const { value } = event.target;
        this.setState({
            selectedOption: value,
            checkboxValue: value === 'marked',
        });
    };

    handleCheckboxChange = () => {
        this.setState((prevState) => ({
            checkboxValue: !prevState.checkboxValue,
            selectedOption: prevState.checkboxValue ? 'unmarked' : 'marked',
        }));
    };

    render() {
        const { selectedOption, checkboxValue } = this.state;

        return (
            <div>
                <select value={selectedOption} onChange={this.handleSelectChange}>
                    <option value="позначено">marked</option>
                    <option value="не позначено">unmarked</option>
                </select>
                <label>
                    <input type="checkbox" checked={checkboxValue} onChange={this.handleCheckboxChange} />
                    {checkboxValue ? 'marked' : 'unmarked'}
                </label>
            </div>
        );
    }
}

class Task9 extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedOption: ''
        };
    }

    handleOptionChange = event => {
        this.setState({
            selectedOption: event.target.value
        });
    };

    render() {
        let paragraphToShow;
        if (this.state.selectedOption === 'option1') {
            paragraphToShow = <p>First p</p>;
        } else if (this.state.selectedOption === 'option2') {
            paragraphToShow = <p>Second p</p>;
        } else if (this.state.selectedOption === 'option3') {
            paragraphToShow = <p>Third p</p>;
        }

        return (
            <div>
                <select value={this.state.selectedOption} onChange={this.handleOptionChange}>
                    <option value="">Choose option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                {paragraphToShow}
            </div>
        );
    }
}

class Task10 extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
        };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleButtonClick = () => {
        
    };

    render() {
        return (
            <>
                <input value={this.state.value} onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleButtonClick}>Add option</button>
            </>);
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
                <div><Task5 /></div>
                --------------------
                <div>Task6: <Task6 /></div>
                --------------------
                <div>Task7: <Task7 /></div>
                --------------------
                <div>Task8: <Task8 /></div>
                --------------------
                <div>Task9: <Task9 /></div>
                --------------------
                <div>Task10: <Task10 /></div>
                --------------------
            </>
        );
    }
}

export default App;

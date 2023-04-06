import React, {Component} from 'react'

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      value: this.props.value,
    };
  }

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleEditDone = () => {
    this.setState({ editing: false });
    this.props.onEditDone(this.props.index, this.state.value);
  };

  handleEditInputChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleEditDone();
    }
  };

  render() {
    const { value, editing } = this.state;
    return (
      <li>
        {editing ? (
          <input
            type="text"
            value={value}
            onChange={this.handleEditInputChange}
            onBlur={this.handleEditDone}
            onKeyDown={this.handleKeyDown}
          />
        ) : (
          <div>
            {value}
            <button onClick={this.handleEdit}>Edit</button>
          </div>
        )}
      </li>
    );
  }
}

  class Task6 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: ['item 1', 'item 2', 'item 3'],
      };
    }
  
    handleEditDone = (index, value) => {
      const newItems = [...this.state.items];
      newItems[index] = value;
      this.setState({ items: newItems });
    };
  
    render() {
      const { items } = this.state;
      return (
        <ul>
          {items.map((item, index) => (
            <ListItem
              key={index}
              value={item}
              index={index}
              onEditDone={this.handleEditDone}
            />
          ))}
        </ul>
      );
    }
  }
 export default Task6;
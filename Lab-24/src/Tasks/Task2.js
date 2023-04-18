import React, { Component } from 'react';

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: {},
      isSubmitted: false,
    };

    this.props.questionsAnswers.forEach((item, index) => {
      this.state[index] = '';
    });
  }

  handleChange(event, index) {
    const answers = { ...this.state.answers };
    const isCorrect = event.target.value === this.props.questionsAnswers[index].correctAnswer;
    answers[index] = {
      value: event.target.value,
      isCorrect: isCorrect,
    };
    this.setState({ answers });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isSubmitted: true });
  }

  render() {
    const list = this.props.questionsAnswers.map((item, index) => {
		const style = this.state.answers[index]?.isCorrect ? 'border 3px green' : '';
    	let result;
		
     	if (this.state.isSubmitted) {
        	if (this.state.answers[index]?.isCorrect) {
          		result = <p style={{ color: 'green' }}>ваша відповідь така, правильно</p>;
        	} else {
          		result = (
            		<p style={{ color: 'red' }}>
              			ваша відповідь така, не правильно, правильна відповідь така - {item.correctAnswer}
            		</p>
          		);
        	}
       }

      return (
        <div key={index}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>{item.question}</h3>
            <input value={this.state.answers[index]?.value || ''} onChange={(event) => this.handleChange(event, index)} className={style} />
            {this.state.isSubmitted && result}
            {!this.state.isSubmitted && <input type="submit" />}
          </form>
        </div>
      );
    });

    return <div>{list}</div>;
  }
}

class Task2 extends Component {
  constructor() {
    super();

    this.state = {
      questionsAnswers: [
        {
          question: 'React - це...',
          correctAnswer: 'бібліотека JavaScript для створення інтерфейсів користувача на основі компонентів.',
        },
        {
          question: 'Angular - це...',
          correctAnswer: 'написаний на TypeScript front-end фреймворк',
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <View questionsAnswers={this.state.questionsAnswers} />
      </div>
    );
  }
}

export default Task2;

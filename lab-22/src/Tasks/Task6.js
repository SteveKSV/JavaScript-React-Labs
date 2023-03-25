import { Component } from "react";

class Task6_7 extends Component{
    constructor(){
        super()
        this.state = {
            test: [
                {
                    question: 'Питання 1',
                    answers: [
                        'Відповідь1',
                        'Відповідь2',
                        'Відповідь3',
                        'Відповідь4',
                        'Відповідь5',
                    ],
                    right: 3, //номер правильної відповіді
                },
                {
                    question: 'Питання 2',
                    answers: [
                        'Відповідь1',
                        'Відповідь2',
                        'Відповідь3',
                        'Відповідь4',
                        'Відповідь5',
                    ],
                    right: 2, //номер правильної відповіді
                },
            ]
        };
        
    }
    render() {
        return (
          <div>
            {
                this.state.test.map((question, index) => (
                <div key={index}>
                    <p>{question.question}</p>
                    {
                    question.answers.map((answer, answerIndex) => (
                        <label key={answerIndex}>
                            <input
                                type="radio"
                                name={`question-${index}`}
                                value={answerIndex}
                                onChange={(e) => {
                                    const isAnswerCorrect = parseInt(e.target.value) === question.right - 1;
                                    const questionElement = e.target.parentElement.parentElement.firstChild;
                                    if (isAnswerCorrect) {
                                    questionElement.style.backgroundColor = 'green';
                                    } else {
                                    questionElement.style.backgroundColor = 'red';
                                    }
                                }}
                            />
                            {answer}
                        </label>
                        ))
                    }
                </div>
                ))
            }
          </div>
        );
    }
}

export default Task6_7;
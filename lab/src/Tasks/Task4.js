import React, { useState } from 'react';

const questions = [
  {
    question: 'Що таке React?',
    options: [
      'Бібліотека JavaScript для створення інтерфейсів користувача на основі компонентів',
      'Мова програмування',
      'Місто в Україні',
      'Назва тварини', 
    ],
	answer: 'Бібліотека JavaScript для створення інтерфейсів користувача на основі компонентів'
  },
  {
    question: 'Що таке Angular?',
    options: [
      'Написаний на TypeScript front-end фреймворк', 
      'Мова програмування', 
      'Назва західної їжі',
      'Назва лікарні в місті Чернівці',
    ],
	answer: 'Написаний на TypeScript front-end фреймворк'
  },
];

function Task4() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState('');
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  
	const handleAnswerOptionClick = (answer) => {
	  setSelectedAnswer(answer);
	};
  
	const handleNextQuestionClick = () => {
	  const isCorrect = selectedAnswer === questions[currentQuestion].answer;
	  if (isCorrect) {
		setScore(score + 1);
	  }
  
	  setSelectedAnswer('');
	  if (currentQuestion < questions.length - 1) {
		setCurrentQuestion(currentQuestion + 1);
	  } else {
		setShowScore(true);
	  }
	};
  
	const handleRetakeQuizClick = () => {
	  setCurrentQuestion(0);
	  setScore(0);
	  setShowScore(false);
	};
  
	return (
	  <div className="quiz-container">
		{showScore ? (
		  <div className="score-section">
			<div>
			  Ви відповіли на {score} відповідей з {questions.length}
			</div>
			<button onClick={handleRetakeQuizClick}>Ще раз</button>
		  </div>
		) : (
			  <div className="question-section">
				<div className="question-count">
				  <span>Питання {currentQuestion + 1}</span>/{questions.length}
				</div>
				<div className="question-text">{questions[currentQuestion].question}</div>
				<div className="answer-section">
				  {questions[currentQuestion].options.map((answerOption) => (
					<label key={answerOption}>
					  <input
						type="radio"
						name="answer"
						value={answerOption}
						checked={selectedAnswer === answerOption}
						onChange={() => handleAnswerOptionClick(answerOption)}
					  />
					  {answerOption}
					</label>
			 	 ))}
				</div>
				<button onClick={handleNextQuestionClick}>Далі</button>
		  		</div>
			)}
	  </div>
	);
  }
  
  export default Task4;
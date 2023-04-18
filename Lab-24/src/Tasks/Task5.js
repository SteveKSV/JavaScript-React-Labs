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
    answer: ['Бібліотека JavaScript для створення інтерфейсів користувача на основі компонентів']
  },
  {
    question: 'Що таке Angular?',
    options: [
      'Написаний на TypeScript front-end фреймворк', 
      'Мова програмування', 
      'Назва західної їжі',
      'Назва лікарні в місті Чернівці',
    ],
    answer: ['Написаний на TypeScript front-end фреймворк']
  },
];

function Task5() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  
  const handleAnswerOptionClick = (answer) => {
    const selectedIndex = selectedAnswers.indexOf(answer);
    let newSelectedAnswers = [];

    if (selectedIndex === -1) {
      newSelectedAnswers = [...selectedAnswers, answer];
    } else if (selectedIndex === 0) {
      newSelectedAnswers = selectedAnswers.slice(1);
    } else if (selectedIndex === selectedAnswers.length - 1) {
      newSelectedAnswers = selectedAnswers.slice(0, -1);
    } else if (selectedIndex > 0) {
      newSelectedAnswers = [
        ...selectedAnswers.slice(0, selectedIndex),
        ...selectedAnswers.slice(selectedIndex + 1),
      ];
    }

    setSelectedAnswers(newSelectedAnswers);
  };
  
  const handleNextQuestionClick = () => {
    const isCorrect = selectedAnswers.sort().toString() === questions[currentQuestion].answer.sort().toString();
    if (isCorrect) {
      setScore(score + 1);
    }
  
    setSelectedAnswers([]);
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
            <div className="questioncount">
				<span>Питання {currentQuestion + 1}</span>/{questions.length}
			</div>
			<div className="question-text">{questions[currentQuestion].question}</div>
			<div className="answer-section">
				{questions[currentQuestion].options.map((answerOption) => (
				<label key={answerOption}>
					<input
						type="checkbox"
						name="answer"
						value={answerOption}
						checked={selectedAnswers.includes(answerOption)}
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

export default Task5;
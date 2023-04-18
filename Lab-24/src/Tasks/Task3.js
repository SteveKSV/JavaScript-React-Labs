import React, { useState } from 'react';

// масив з питаннями
const questions = [
  {
    question: 'React - це',
    answer: 'фреймворк'
  },
  {
    question: 'JavaScript та Java - різні мови програмування?',
    answer: 'Так'
  },
];

const Task3 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const handleAnswerChange = (event) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = event.target.value;
    setAnswers(newAnswers);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleCheckAnswers = () => {
    questions.forEach((question, index) => {
      const userAnswer = answers[index];
      const isCorrect = userAnswer.toLowerCase() === question.answer.toLowerCase();
      const message = `Ваша відповідь: ${userAnswer}. ${isCorrect ? 'Правильно!' : `Не правильно. Правильна відповідь: ${question.answer}.`}`;
      console.log(`Питання ${index + 1}: ${question.question}. ${message}`);
    });
  };

  return (
    <div>
      <h2>Тест</h2>
      <div>
        <p>{questions[currentQuestionIndex].question}</p>
        <input type="text" value={answers[currentQuestionIndex]} onChange={handleAnswerChange} />
      </div>
      <button onClick={handlePreviousQuestion}>Назад</button>
      <button onClick={handleNextQuestion}>Вперед</button>
      {currentQuestionIndex === questions.length - 1 && (
        <button onClick={handleCheckAnswers}>Перевірити відповіді</button>
      )}
    </div>
  );
};

export default Task3;

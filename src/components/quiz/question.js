import React, { useState } from 'react';
import './style1.css';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
        <body1>
		<div className='app1'>
			{showScore ? (
				<div className='score1-section1'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<d>
					<div className='question1-section1'>
						<div className='question1-count1'>
							<span1>Question {currentQuestion + 1}</span1>/{questions.length}
						</div>
						<div className='question1-text1'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer1-section1'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button1 onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button1>
						))}
					</div>
				</d>
			)}
		</div>
        </body1>
	);
}

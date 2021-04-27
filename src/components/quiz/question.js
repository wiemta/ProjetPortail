import React, { useState } from 'react';
import './style1.css';

export default function Java() {
	const questions = [
		{
			questionText: 'Java est un langage',
			answerOptions: [
				{ answerText: 'Compilé', isCorrect: false },
				{ answerText: 'Interprété', isCorrect: false },
				{ answerText: 'Compilé et interprété', isCorrect: true },
				{ answerText: 'Ni compilé ni interprété', isCorrect: false },
			]
		},
		{
			questionText: 'Lequel des éléments suivants n’est pas un concept POO en Java?',
			answerOptions: [
				{ answerText: 'Héritage', isCorrect: false },
				{ answerText: 'Encapsulation', isCorrect: false },
				{ answerText: 'Polymorphisme', isCorrect: false },
				{ answerText: 'Compilation', isCorrect: true },
			],
		},
		{
			questionText: 'La méthode toString() est définie dans ________',
			answerOptions: [
				{ answerText: 'java.lang.Object', isCorrect: true },
				{ answerText: ' java.lang.String', isCorrect: false },
				{ answerText: 'java.lang.util', isCorrect: true },
				{ answerText: 'Aucune de ces réponses n’est vraie.', isCorrect: false },
			],
		},
		{
			questionText: 'String en Java est ______',
			answerOptions: [
				{ answerText: 'une classe', isCorrect: true},
				{ answerText: 'un objet', isCorrect: false },
				{ answerText: 'une variable', isCorrect: false },
				{ answerText: 'un tableau de char', isCorrect: false },
			],
		},
		{
			questionText: 'Donnez l’abréviation de AWT?',
			answerOptions: [
				{ answerText: 'Applet Windowing Toolkit', isCorrect: false },
				{ answerText: ' Abstract Windowing Toolkit', isCorrect: true },
				{ answerText: 'Absolute Windowing Toolkit', isCorrect: false },
				{ answerText: 'Aucune de ces réponses n’est vraie.', isCorrect: false },
			],
		},
		{
			questionText: 'Quel est le nom de la classe Swing utilisée pour créer un frame?',
			answerOptions: [
				{ answerText: 'Window', isCorrect: false },
				{ answerText: 'Frame ', isCorrect: false },
				{ answerText: 'JFrame', isCorrect: true },
				{ answerText: 'SwingFrame', isCorrect: false },
			],
		},
		{
			questionText: 'Quel package fournit des classes pour la gestion des événements?',
			answerOptions: [
				{ answerText: 'java.awt', isCorrect: false },
				{ answerText: 'java.awt.Graphics', isCorrect: false},
				{ answerText: 'java.awt.event', isCorrect: true},
				{ answerText: 'Aucune de ces réponses n’est vraie.', isCorrect: false},
			],
		},
        {
			questionText: 'Dans java 8, Function est ________',
			answerOptions: [
				
				{ answerText: 'Une classe', isCorrect: false },
				{ answerText: 'Une interface', isCorrect: true},
				{ answerText: 'Une expression lambda', isCorrect: false },
				{ answerText: 'Un Objet', isCorrect: false },
			],
		},
		{
			questionText: 'Lequel de ces opérateurs est utilisé pour allouer de la mémoire à un tableau en Java?',
			answerOptions: [
				
				{ answerText: 'new malloc', isCorrect: false },
				{ answerText: ' alloc', isCorrect: false},
				{ answerText: ' malloc', isCorrect: false },
				{ answerText: 'new', isCorrect: true },
			],
		},
		{
			questionText: 'Lequel de ces énoncés est incorrect?',
			answerOptions: [
				
				{ answerText: 'int tab[ ] = int [] new', isCorrect: true },
				{ answerText: 'int tab[ ] = new int[4]', isCorrect: false},
				{ answerText: 'int [ ] tab = new int[4]', isCorrect: false },
				{ answerText: 'int tab[ ] = new int[4]', isCorrect: false },
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

import React, {useState} from 'react';
import QuizCard from "./components/QuizCard";
import {Difficulty, getAPIQuestions, QuestionState} from "./API";
import {GlobalStyles, Wrapper} from "./App.styled";

const TOTAL_QUESTIONS = 10

export type AnswerObject = {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string
}

const App: React.FC = () => {
    const [loading, setLoading] = useState(false)
    const [gameOver, setGameOver] = useState(true)
    const [score, setScore] = useState(0)
    const [number, setNumber] = useState(0)
    const [questions, setQuestions] = useState<QuestionState[]>([])
    const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])


    const startTrivia = async () => {
        setLoading(true)
        setGameOver(false)

        const data = await getAPIQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
        setQuestions(data)
        setScore(0)
        setNumber(0)
        setUserAnswer([])
        setLoading(false)
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value

            const correct = questions[number].correct_answer === answer

            if (correct) setScore(prev => prev + 1)

            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer
            }
            setUserAnswer(prev => [...prev, answerObject])
        }
    }

    const nextQuiz = () => {
        const nextQuestion = number + 1

        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true)
        } else {
            setNumber(nextQuestion)
        }
    }

    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <h1>Quiz App</h1>
                {
                    gameOver || userAnswer.length === TOTAL_QUESTIONS
                        ? <button className='start' onClick={startTrivia}>Start</button>
                        : null
                }
                {!gameOver ? <p className='score'>Score: {score}</p> : null}
                {loading && <p>Loading questions...</p>}
                {!loading && !gameOver && (
                    <QuizCard
                        questionNr={number + 1}
                        totalQuestions={TOTAL_QUESTIONS}
                        question={questions[number].question}
                        answers={questions[number].answers}
                        userAnswer={userAnswer ? userAnswer[number] : undefined}
                        callback={checkAnswer}
                    />)
                }
                {!loading && !gameOver && userAnswer.length === number + 1 && number !== TOTAL_QUESTIONS - 1
                    ? (<button className='next' onClick={nextQuiz}>Next</button>)
                    : null
                }
            </Wrapper>
        </>
    );
}

export default App;

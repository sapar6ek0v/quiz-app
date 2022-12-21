import { FC, useState } from 'react';
import QuizCard from './components/QuizCard';
import { Difficulty, getAPIQuestions, QuestionState } from './API';
import { GlobalStyles, Button, Wrapper, Title, ScoreTitle, LoadingTitle, Group } from './styles';
import Select from './components/Select';

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string
};

const App: FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [gameOver, setGameOver] = useState<boolean>(true);
    const [score, setScore] = useState<number>(0);
    const [number, setNumber] = useState<number>(0);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
    const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);

    const startTrivia = async (difficulty: Difficulty) => {
        setLoading(true);
        setGameOver(false);
        const data = await getAPIQuestions(TOTAL_QUESTIONS, difficulty);
        setQuestions(data);
        setScore(0);
        setNumber(0);
        setUserAnswer([]);
        setLoading(false);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value;
            const correct = questions[number].correct_answer === answer;

            if (correct) setScore(prev => prev + 1);

            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer
            };
            setUserAnswer(prev => [...prev, answerObject]);
        };
    };

    const nextQuiz = () => {
        const nextQuestion = number + 1;

        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true)
        } else {
            setNumber(nextQuestion)
        };
    };

    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <Title>Quiz App</Title>
                {
                    gameOver || userAnswer.length === TOTAL_QUESTIONS
                        ? <Group>
                            <Select difficulty={difficulty} setDifficulty={setDifficulty} />
                            <Button onClick={() => startTrivia(difficulty)}>Start</Button>
                        </Group>
                        : null
                }
                {!gameOver ? <ScoreTitle>Score: {score}</ScoreTitle> : null}
                {loading && <LoadingTitle>Loading questions...</LoadingTitle>}
                {
                    !loading
                    && !gameOver
                    && (
                        <QuizCard
                            questionNr={number + 1}
                            totalQuestions={TOTAL_QUESTIONS}
                            question={questions[number].question}
                            answers={questions[number].answers}
                            userAnswer={userAnswer ? userAnswer[number] : undefined}
                            callback={checkAnswer}
                        />)
                }
                {
                    !loading
                        && !gameOver
                        && userAnswer.length === number + 1
                        && number !== TOTAL_QUESTIONS - 1
                        ? (<Button onClick={nextQuiz}>Next</Button>)
                        : null
                }
            </Wrapper>
        </>
    );
};

export default App;

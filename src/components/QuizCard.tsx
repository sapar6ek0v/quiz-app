import React from 'react';
import {AnswerObject} from "../App";
import {ButtonWrapper, Wrapper} from "./QuizCard.styled";

type Props = {
    question: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    totalQuestions: number,
    questionNr: number
}

const QuizCard: React.FC<Props> = (
    {
        question,
        answers,
        questionNr,
        totalQuestions,
        callback,
        userAnswer
    }) => {


    return (
        <Wrapper>
            <p className='number'>{totalQuestions} / {questionNr}</p>
            <p dangerouslySetInnerHTML={{__html: question}} />
            <div>
                {
                    answers.map((answer, idx) => (
                        <ButtonWrapper
                            key={idx}
                            correct={userAnswer?.correctAnswer === answer }
                            userClicked={userAnswer?.answer === answer}
                        >
                            <button disabled={!!userAnswer} value={answer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{__html: answer}}/>
                            </button>
                        </ButtonWrapper>
                    ))
                }
            </div>
        </Wrapper>
    );
};

export default QuizCard;
import { FC } from 'react';
import { AnswerObject } from '../../App';
import { ButtonStack, ButtonWrapper, QuestionNumberTitle, QuestionTitle, Wrapper } from './styles';

type Props = {
    question: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    totalQuestions: number,
    questionNr: number,
};

const QuizCard: FC<Props> = ({
    question, answers, questionNr, totalQuestions, callback, userAnswer
}) => {


    return (
        <Wrapper>
            <QuestionNumberTitle>{totalQuestions} / {questionNr}</QuestionNumberTitle>
            <QuestionTitle dangerouslySetInnerHTML={{ __html: question }} />
            <ButtonStack>
                {
                    answers.map((answer, idx) => (
                        <ButtonWrapper
                            key={idx}
                            correct={userAnswer?.correctAnswer === answer}
                            userClicked={userAnswer?.answer === answer}
                        >
                            <button disabled={!!userAnswer} value={answer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>
                        </ButtonWrapper>
                    ))
                }
            </ButtonStack>
        </Wrapper>
    );
};

export default QuizCard;
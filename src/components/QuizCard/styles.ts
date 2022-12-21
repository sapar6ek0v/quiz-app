import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media only screen and (max-width: 480px) {
    gap: 10px;
  }
`;

export const QuestionNumberTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;

  @media only screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const QuestionTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 600;

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ButtonStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)'
        : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  }
`;

import styled, { createGlobalStyle } from 'styled-components';
import bg from './images/Quiz-bg.jpg';

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
  
  body {
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Fascinate Inline', sans-serif;
  background-image: linear-gradient(180deg, #fff, #87f1ff);
  font-weight: 400;
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  filter: drop-shadow(2px 2px #0085a3);
  font-size: 70px;
  text-align: center;
  margin: 20px;

  @media only screen and (max-width: 480px) {
    font-size: 60px;
    margin: 15px;
  }
`;

export const ScoreTitle = styled.p`
  color: #fff;
  font-size: 2rem;
  font-weight: 500;

  @media only screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const LoadingTitle = styled.p`
  color: #fff;
  font-weight: 400;
`;

export const Button = styled.button`
  cursor: pointer;
  background: linear-gradient(180deg, #ffffff, #ffcc91);
  border: 1px solid #d38558;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 40px;
  margin: 20px 0;
  padding: 0 40px;
  max-width: 200px;
  color: #d38558;
  font-size: 1rem;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    border: 1px solid #d38558;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }

  @media only screen and (max-width: 480px) {
    max-width: 180px;
    height: 30px;
    padding: 0 25px;
    font-size: 0.9rem;
  }
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;

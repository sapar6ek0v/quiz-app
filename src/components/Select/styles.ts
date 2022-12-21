import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 120px;
  height: 40px;
  color: #d38558;
  font-size: 1rem;
  background: linear-gradient(180deg, #ffffff, #ffcc91);
  border: 1px solid #d38558;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
  padding: 0 20px;
  margin: 20px 0;

  &:focus,
  &:focus-within {
    border-color: #d38558;
  }

  &:hover,
  &:active {
    border: 1px solid #d38558;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }

  @media only screen and (max-width: 480px) {
    width: 86px;
    height: 30px;
    padding: 0 10px;
    font-size: 0.9rem;
  }
`;

export const SelectWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 10px;
`;

type MenuProps = {
  visibility: string;
};

export const List = styled.ul`
  position: absolute;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  left: 0;
  margin-top: 1px;
  box-shadow: 0 1px 2px rgb(204, 204, 204);
  border-radius: 0 1px 2px 2px;
  overflow: hidden;
  display: ${(props: MenuProps) => props.visibility};
  max-height: 144px;
  overflow-y: auto;
  z-index: 10;
`;

export const Item = styled.div`
  padding: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  text-align: center;

  &:hover,
  &:active {
    background-color: #d38558;
    color: #fff;
  }
`;

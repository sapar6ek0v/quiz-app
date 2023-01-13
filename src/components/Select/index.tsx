import { Dispatch, FC, SetStateAction, useState } from 'react';

import { Difficulty } from '../../helpers/API';
import { Wrapper, List, SelectWrapper, Item } from './styles';

type Props = {
  difficulty: Difficulty,
  setDifficulty: Dispatch<SetStateAction<Difficulty>>,
}

const Select: FC<Props> = ({ difficulty, setDifficulty }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleChangeDifficulty = (difficulty: Difficulty) => {
    setDifficulty(difficulty);
    setVisible(false);
  };

  return (
    <Wrapper>
      <SelectWrapper onClick={() => setVisible(!visible)}>
        <span>{difficulty}</span>
        {visible ? <span>&#8679;</span> : <span>&#8681;</span>}
      </SelectWrapper>
      <List visibility={visible ? 'block' : 'none'}>
        {
          Object.values(Difficulty).map((item, idx) => (
            <Item key={idx} onClick={() => handleChangeDifficulty(item)}>{item}</Item>
          ))
        }
      </List>
    </Wrapper>
  );
};

export default Select;
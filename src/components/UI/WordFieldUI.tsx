import styled from 'styled-components';

interface WordDivProps {
  charCount: number;
}

export const WordDiv = styled.div<WordDivProps>`
  display: flex;
  grid-column: span ${props => props.charCount};

  & label {
    align-content: center;
    justify-content: center;
    text-align: center;
  }
`;

export const LetterInput = styled.input`
  width: 10px;
  margin: 1px;
  border-radius: 3px;
  border: 3px solid darkslategray;
  background-color: whitesmoke;
  justify-content: center;
`;

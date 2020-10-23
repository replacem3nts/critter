import styled from 'styled-components';

interface WordDivProps {
  charCount: number;
}

export const WordDiv = styled.span<WordDivProps>`
  grid-column: span ${props => props.charCount};
`;

export const LetterInput = styled.input`
  width: 10px;
  border-radius: 3px;
  border: 3px solid darkslategray;
  background-color: whitesmoke;
  justify-content: center;
`;

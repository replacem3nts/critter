import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(autofill, minimax(180px, 10fr));
  grid-gap: 10px;
`;

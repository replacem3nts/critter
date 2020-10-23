import React, { useState } from 'react';
import { WordField } from './WordField';
import { v4 as uuid } from 'uuid';
import { StyledForm } from './UI/PuzzleFormUI';

interface PuzzleFormProps {
  text: string[][];
}

const initKey: { [key: string]: string } = {
  a: '',
  b: '',
  c: '',
  d: '',
  e: '',
  f: '',
  g: '',
  h: '',
  i: '',
  j: '',
  k: '',
  l: '',
  m: '',
  o: '',
  n: '',
  p: '',
  q: '',
  r: '',
  s: '',
  t: '',
  u: '',
  v: '',
  w: '',
  x: '',
  y: '',
  z: '',
};

const bottomKey = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const PuzzleForm = (props: PuzzleFormProps) => {
  const [alpha, setAlpha] = useState(initKey);

  const fieldArr: JSX.Element[] = props.text.map(word => (
    <WordField key={uuid()} word={word} alphabet={alpha} setAlpha={setAlpha} />
  ));

  return (
    <StyledForm>
      {fieldArr}
      <br />
      <WordField
        key={uuid()}
        word={bottomKey}
        alphabet={alpha}
        setAlpha={setAlpha}
      />
    </StyledForm>
  );
};

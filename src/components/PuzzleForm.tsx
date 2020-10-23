import React, { useState } from 'react';
import { WordField } from './WordField';
import { v4 as uuid } from 'uuid';

interface PuzzleFormProps {
  text: string;
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

export const PuzzleForm = (props: PuzzleFormProps) => {
  const [alpha, setAlpha] = useState(initKey);

  const fieldArr: JSX.Element[] = props.text
    .split(' ')
    .map(word => (
      <WordField
        key={uuid()}
        word={word}
        alphabet={alpha}
        setAlpha={setAlpha}
      />
    ));

  return (
    <div>
      <form>{fieldArr}</form>
    </div>
  );
};

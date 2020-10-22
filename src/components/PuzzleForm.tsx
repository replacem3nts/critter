import { Form, Formik } from 'formik';
import React from 'react';
import { WordField } from './WordField';

interface PuzzleFormProps {
  text: string;
}

export const PuzzleForm = (props: PuzzleFormProps) => {
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

  const fieldArr: WordField[] = props.text
    .split(' ')
    .map(word => <WordField />);

  return (
    <div>
      <Formik
        initialValues={initKey}
        onSubmit={(values, actions) => {
          console.log(values);
          console.log(actions);
        }}
      >
        <Form>{fieldArr}</Form>
      </Formik>
    </div>
  );
};

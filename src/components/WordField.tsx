import { withFormik, FormikProps, Field } from 'formik';
import React from 'react';

interface WordFieldProps {
  word: string;
}

interface FormValues {
  [key: string]: string;
}

export const WordField = (props: WordFieldProps & FormikProps<FormValues>) => {
  const renderFields = (): JSX.Element[] => {
    console.log(props.word);
    return props.word
      .split('')
      .map((char: string) => (
        <Field id={char} name={char} autocomplete={false} />
      ));
  };

  return <div>{renderFields()}</div>;
};

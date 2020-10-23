import React from 'react';
import { v4 as uuid } from 'uuid';
import { LetterInput, WordDiv } from './UI/WordFieldUI';

interface WordFieldProps {
  word: string[];
  setAlpha: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string;
    }>
  >;
  alphabet: { [key: string]: string };
}

export const WordField = (props: WordFieldProps) => {
  const renderFields = (): JSX.Element[] => {
    return props.word.map((char: string) => {
      if (char.match(/[a-z]/)) {
        return (
          <span key={uuid()}>
            <LetterInput
              name={char}
              value={props.alphabet[char]}
              onChange={e =>
                props.setAlpha({ ...props.alphabet, [char]: e.target.value })
              }
              autoComplete="false"
            />
            <div>{char}</div>
          </span>
        );
      }
      return (
        <span key={uuid()}>
          <div>{char}</div>
        </span>
      );
    });
  };

  return <WordDiv>{renderFields()}</WordDiv>;
};

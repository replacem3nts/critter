import React from 'react';
import { v4 as uuid } from 'uuid';

interface WordFieldProps {
  word: string;
  setAlpha: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string;
    }>
  >;
  alphabet: { [key: string]: string };
}

export const WordField = (props: WordFieldProps) => {
  const renderFields = (): JSX.Element[] => {
    return props.word.split('').map((char: string) => {
      if (char.match(/[a-z]/)) {
        return (
          <span key={uuid()}>
            <div>
              <input
                name={char}
                value={props.alphabet[char]}
                onChange={e =>
                  props.setAlpha({ ...props.alphabet, [char]: e.target.value })
                }
                autoComplete="false"
              />
            </div>
            <div>{char}</div>
          </span>
        );
      }
      return (
        <span key={uuid()}>
          <div></div>
          <div>{char}</div>
        </span>
      );
    });
  };

  return <div>{renderFields()}</div>;
};

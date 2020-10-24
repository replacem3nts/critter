import { EventEmitter } from 'events';
import React, { BaseSyntheticEvent } from 'react';
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
  const updateChar = (e: BaseSyntheticEvent): void => {
    const { name, value } = e.target;
    e.preventDefault();
    props.setAlpha({ ...props.alphabet, [name]: value });
  };

  const renderFields = (): JSX.Element[] => {
    return props.word.map((char: string) => {
      if (char.match(/[a-zA-Z]/)) {
        return (
          <React.Fragment key={uuid()}>
            <label>
              <LetterInput
                name={char}
                value={props.alphabet[char]}
                onChange={updateChar}
                autoFocus={false}
              />
              <br />
              {char}
            </label>
          </React.Fragment>
        );
      }
      return <React.Fragment key={uuid()}>{char}</React.Fragment>;
    });
  };

  return <WordDiv charCount={props.word.length + 1}>{renderFields()}</WordDiv>;
};

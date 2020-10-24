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
          <React.Fragment key={uuid()}>
            <label>
              <LetterInput
                name={char}
                value={props.alphabet[char]}
                onChange={e =>
                  props.setAlpha({ ...props.alphabet, [char]: e.target.value })
                }
                autoComplete="false"
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

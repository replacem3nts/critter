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

export const WordField: React.FC<WordFieldProps> = ({
  word,
  setAlpha,
  alphabet,
}) => {
  const updateChar = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const { name, value } = e.target;
    setAlpha({ ...alphabet, [name]: value });
  };

  const renderFields = () => {
    return word.map((char: string) => {
      if (char.match(/[a-zA-Z]/)) {
        return (
          <React.Fragment key={uuid()}>
            <label>
              <LetterInput
                name={char}
                value={alphabet[char]}
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

  return <WordDiv charCount={word.length + 1}>{renderFields()}</WordDiv>;
};

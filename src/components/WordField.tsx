import React from 'react';
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
    return word.map((char, index) => {
      if (char.match(/[a-zA-Z]/)) {
        return (
          <React.Fragment key={index}>
            <label>
              <LetterInput
                type="text"
                maxLength={1}
                name={char}
                value={alphabet[char]}
                onChange={updateChar}
              />
              <br />
              {char}
            </label>
          </React.Fragment>
        );
      }
      return <React.Fragment key={index}>{char}</React.Fragment>;
    });
  };

  return <WordDiv charCount={word.length + 1}>{renderFields()}</WordDiv>;
};

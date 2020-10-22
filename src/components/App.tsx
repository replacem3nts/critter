import React from 'react';
import { PuzzleForm } from './PuzzleForm';

const placeholderText = 'To be or not to be, that is the question.';

export const App = () => {
  return (
    <div>
      <PuzzleForm text={placeholderText} />
    </div>
  );
};

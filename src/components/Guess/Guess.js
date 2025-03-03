import React from 'react';
import { range } from '../../utils';

function Guess({result}) {
  return <div className="guess">
    {range(0, 5, 1).map((i) => (
      <span key={i} className={`cell ${result[i].status}`}>{result[i].letter}</span>
    ))}
  </div>;
}

export default Guess;

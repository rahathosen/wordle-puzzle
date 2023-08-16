import React from "react";
import { range } from "../../utils";
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const cellClassName = status ? `cell ${status}` : 'cell';

  return <span className={cellClassName}>{letter}</span>;
}


function Guess({ value ,answer}) {
  const result  = checkGuess(value, answer)
  console.log(result)
  return (
    <>
      <p className="guess">
        {range(5).map((num) => (
         <Cell 
         key={num} 
         letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
         />
        ))}
      </p>
    </>
  );
}

export default Guess;

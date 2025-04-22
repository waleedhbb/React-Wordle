import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className='modal'>
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className='solution'>{solution}</p>
          <p>You found the solution in {turn} guesses!</p>
          <p>
            <span 
              style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }} 
              onClick={handleRefresh}
            >
              Refresh
            </span> to play again
          </p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>You Lost :(</h1>
          <p className='solution'>{solution}</p>
          <p>Better luck next time!</p>
          <p>
            <span 
              style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }} 
              onClick={handleRefresh}
            >
              Refresh
            </span> to try again
          </p>
        </div>
      )}
    </div>
  );
}
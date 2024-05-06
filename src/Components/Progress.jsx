import React from 'react';
import App from "../App.jsx";



const Progress = ({targetAmount, donations}) => {
let sum = donations.reduce((accum, donation) => 
  accum + donation.amount, 0)

  return (
    <div className="progress">Raised <span className="secondary">${sum}</span> of <span className="secondary">${targetAmount}</span></div>
  )
}

export default Progress
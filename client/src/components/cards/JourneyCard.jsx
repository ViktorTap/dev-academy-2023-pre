import React from 'react'

import '../../style/cards/JourneyCard.css'

function JourneyCard({ departureStation, returnStation, coveredDistance, duration }) {

    const coveredDistanceInKm = coveredDistance / 1000;
    const durationInMin = duration / 60;

  return (
    <main className='journey-card--main-container'>
        <h3>{departureStation}</h3>
        <h3>{returnStation}</h3>
        <h3>{coveredDistanceInKm.toFixed(2)}</h3>
        <h3>{durationInMin.toFixed(2)}</h3>
    </main>
  )
}

export default JourneyCard
import React from 'react'

import '../../style/cards/StationCard.css'

function StationCard({ stationID, stationName }) {
  return (
    <main className='station-card--main-container'>
        <h3>{stationID}</h3>
        <h3>{stationName}</h3>
    </main>
  )
}

export default StationCard
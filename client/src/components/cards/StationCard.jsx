import React, { useState } from 'react'

import '../../style/cards/StationCard.css'

function StationCard({ stationID, stationName, stationData }) {
  const [expande, setExpande] = useState(false);

  console.log(stationData)

  return (
    <main className='station-card--main-container' onClick={() => setExpande(!expande)}>

      <section className='station-card--title-container'>
        <h3>{stationID}</h3>
        <h3>{stationName}</h3>
      </section>

      {expande && (
              <section className='station-card--modal-container'>
                <h3>Toimii</h3>
              </section>
      )}

    </main>
    
  )
}

export default StationCard
import React, { useState } from 'react'
import * as stations from '../../api/stations.js'
import expandStationCard from './station-card-functions/expandStationCard.js';
import '../../style/cards/StationCard.css'

function StationCard({ stationID, stationName }) {
  const [expande, setExpande] = useState(false);
  const [stationNumbers, setStationNumbers] = useState([]);
  const [stationInformation, setStationInformation] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getStationNumbers(){

  }

  


  return (
    <main className='station-card--main-container' onClick={() => expandStationCard({stationID})}>

      <section className='station-card--title-container'>
        <h3>{stationID}</h3>
        <h3>{stationName}</h3>
      </section>

      {expande && (
              <section className='station-card--modal-container'>
                <h3>Total number of Journeys starting from here</h3>
                <h3>Total number of Journeys ending here</h3>
              </section>
      )}

    </main>
    
  )
}

export default StationCard
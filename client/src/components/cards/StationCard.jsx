import React, { useState } from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

import expandStationCard from './station-card-functions/expandStationCard.js';
import '../../style/cards/StationCard.css'

function StationCard({ stationID, stationName }) {
  const [expande, setExpande] = useState(false);
  const [stationInformationAndNumbers, setStationInformationAndNumbers] = useState();
  const [loading, setLoading] = useState(false);

  async function getStationInformationAndNumbers({ stationID }){

    if(expande === false){
      setExpande(!expande)
      setLoading(true)
      const stationData = await expandStationCard({ stationID })
      setLoading(false)
      console.log(stationData)
      setStationInformationAndNumbers(stationData)
    } else {
      setExpande(false)
    }

    
  }


  return (
    <main className='station-card--main-container' onClick={() => getStationInformationAndNumbers({stationID})}>

      <section className='station-card--title-container'>
        <h3>{stationID}</h3>
        <h3>{stationName}</h3>
      </section>

    {expande && <section className='station-card--modal-container'>
        {loading ? <div className='station-card--loading-container'>
         
          <PropagateLoader loading={loading} size={15} color='#1d3557'/>
        </div> : <section className='station-card--information'>

                  <div className='station-card--left-info-box'>
                <h5>Journeys starting from here:</h5>
                <h5>Journeys ending here:</h5>
                </div>
                <div className='station-card--right-info-box'>
                  <div className='station-card--address-container'>
                 <h5>Address:</h5><p>{stationInformationAndNumbers.stationInformation.Osoite}</p>
                 </div>
                 <div className='station-card--map-container'>
                  this is the map container
                 </div>
                </div>
                
                </section>}
      </section>}
    </main>
    
  )
}

export default StationCard
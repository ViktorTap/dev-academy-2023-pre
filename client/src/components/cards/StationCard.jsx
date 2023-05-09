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
    
      setStationInformationAndNumbers(stationData)

      setLoading(false)
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

                  <div className='station-card--left-info-departures'>
                    <h5>Journeys starting from here:</h5>
                    <p>MAY: {stationInformationAndNumbers.stationNumbers.departures.may}</p>
                    <p>JUNE: {stationInformationAndNumbers.stationNumbers.departures.june}</p>
                    <p>JULY: {stationInformationAndNumbers.stationNumbers.departures.july}</p>
                    <p>TOTAL: {stationInformationAndNumbers.stationNumbers.departures.all}</p>
                  </div >

                  <div className='station-card--left-info-arrivals'>
                    <h5>Journeys ending here:</h5>
                    <p>MAY: {stationInformationAndNumbers.stationNumbers.arrivals.may}</p>
                    <p>JUNE: {stationInformationAndNumbers.stationNumbers.arrivals.june}</p>
                    <p>JULY: {stationInformationAndNumbers.stationNumbers.arrivals.july}</p>
                    <p>TOTAL: {stationInformationAndNumbers.stationNumbers.arrivals.all}</p>
                  </div>

                </div>

                <div className='station-card--right-info-box'>
                  <div className='station-card--address-container'>
                 <h5>Address:</h5><p>{stationInformationAndNumbers.stationInformation.Osoite}</p>
                 </div>
                 <div  className='station-card--average-info-container'>
                  <div>
                    <h5>Average distance of starting: </h5>
                    <p>MAY: {stationInformationAndNumbers.stationNumbers.average.may.departures.AverageDepartureDistanceMay.toFixed(0) / 1000} km</p>
                    <p>JUNE: {parseInt(stationInformationAndNumbers.stationNumbers.average.june.departures.AverageDepartureDistanceJune).toFixed(0) / 1000} km</p>
                    <p>JULY: {parseInt(stationInformationAndNumbers.stationNumbers.average.july.departures.AverageDepartureDistanceJuly).toFixed(0) / 1000} km</p>
                  </div>
                  <div>
                    <h5>Average distance of ending: </h5>
                    <p>MAY: {stationInformationAndNumbers.stationNumbers.average.may.arrivals.AverageArrivalDistanceMay.toFixed(0) / 1000} km</p>
                    <p>JUNE: {parseInt(stationInformationAndNumbers.stationNumbers.average.june.arrivals.AverageArrivalDistanceJune).toFixed(0) / 1000} km</p>
                    <p>JULY: {parseInt(stationInformationAndNumbers.stationNumbers.average.july.arrivals.AverageArrivalDistanceJuly).toFixed(0) / 1000} km</p>
                  </div>
                  </div>
                </div>
                
                </section>}
      </section>}
    </main>
    
  )
}

export default StationCard
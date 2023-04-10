import React, { useEffect, useState } from 'react'
import '../style/JourneyView.css'

import * as journeys from '../api/journeys.js';
import JourneyCard from './cards/JourneyCard';

function JourneyView() {
  const [journeyList, setJourneyList] = useState([]);
  const [pagination, setPagination] = useState("");

  async function getJourneyData(page, month){
    const responseData = await journeys.getJourneys(page, month);

    console.log(responseData);

    setPagination(responseData.pagination);

    const mappedJourneyData = responseData.data.map((journey, index) => {
      return (<JourneyCard key={index} departureStation={journey.DepartureStationName} returnStation={journey.ArrivalStationName} coveredDistance={journey.CoveredDistance} duration={journey.Duration}/>)
   })

   setJourneyList(mappedJourneyData);

  }
  
  useEffect(() => {

    getJourneyData(1, 'may');

  }, [])
  return (
    <main className='journey-view--main-container'>

      <section className='journey-view--title-container'>
        <h3>Departure Station</h3>
        <h3>Return Station</h3>
        <h3>Covered Distance (km)</h3>
        <h3>Duration (min)</h3>
      </section>

      <section className='journey-view--journey-list-container'>
        {journeyList}
      </section>

      <section className='journey-view--pagination-footer'>
      <button 
                        disabled={pagination.page === 1} 
                        className='journey-view--pagination-footer-elements'
                        onClick={() => getJourneyData(1, 'may')}
      >{'<<'}</button>
        <button
                  disabled={pagination.page === 1} 
                  className='journey-view--pagination-footer-elements'
                  onClick={() => getJourneyData(pagination.page - 1, 'may')}
        >{'<'}</button>

        <h3 className='journey-view--pagination-footer-elements'>{pagination.page} / {pagination.totalPage}</h3>
        <button
                          disabled={pagination.page === pagination.totalPage} 
                          className='journey-view--pagination-footer-elements'
                          onClick={() => getJourneyData(pagination.page - 1, 'may')}
        > {'>'} </button>

        <button
                            disabled={pagination.page === pagination.totalPage} 
                            className='journey-view--pagination-footer-elements'
                            onClick={() => getJourneyData(pagination.totalPage, 'may')}
        >{'>>'}</button>
        </section>
        
    </main>
  )
}

export default JourneyView
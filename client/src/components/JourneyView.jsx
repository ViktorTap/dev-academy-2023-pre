import React, { useEffect, useState } from 'react'
import '../style/JourneyView.css'

import * as journeys from '../api/journeys.js';
import JourneyCard from './cards/JourneyCard';

function JourneyView() {
  const [journeyList, setJourneyList] = useState([]);
  const [pagination, setPagination] = useState("");
  const [currentOrderBy, setCurrentOrderBy] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");

  async function getJourneyData(page, month, orderBy){

    setCurrentMonth(month);
    console.log(currentMonth);

    let responseData;

    if (!orderBy){
      
      responseData = await journeys.getJourneys(page, month);   
    } else {
      
      setCurrentOrderBy(orderBy);
      responseData = await journeys.getJourneysOrderBy(page, month, orderBy);
    }

    setPagination(responseData.pagination);

    const mappedJourneyData = responseData.data.map((journey, index) => {
      return (<JourneyCard key={index} departureStation={journey.DepartureStationName} returnStation={journey.ArrivalStationName} coveredDistance={journey.CoveredDistance} duration={journey.Duration}/>)
   })

   setJourneyList(mappedJourneyData);

  }

  function getJourneyDataByMonth(month){

    setCurrentMonth(month);
    getJourneyData(pagination.page, month, currentOrderBy);

  }
  useEffect(() => {

    getJourneyData(1, 'may');

  }, [])

  return (
    <main className='journey-view--main-container'>

      <section className='journey-view--title-container'>
        <h3 onClick={() => getJourneyData(pagination.page, currentMonth, 'departure')}>Departure Station</h3>
        <h3 onClick={() => getJourneyData(pagination.page, currentMonth, 'arrival')}>Return Station</h3>
        <h3 onClick={() => getJourneyData(pagination.page, currentMonth, 'distance')}>Covered Distance (km)</h3>
        <h3 onClick={() => getJourneyData(pagination.page, currentMonth, 'duration')}>Duration (min)</h3>
      </section>

      <section className='journey-view--month-container'>
          <div className={currentMonth === 'may' ? "--month-active" : ""} onClick={() => getJourneyDataByMonth('may')}><p>MAY</p></div>
          <div className={currentMonth === 'june' ? "--month-active" : ""} onClick={() => getJourneyDataByMonth('june')}><p>JUNE</p></div>
          <div className={currentMonth === 'july' ? "--month-active" : ""} onClick={() => getJourneyDataByMonth('july')}><p>JULY</p></div>
          <div className={currentMonth === 'all' ? "--month-active" : ""}><p>ALL</p></div>
      </section>

      <section className='journey-view--journey-list-container'>
        {journeyList}
      </section>

      <section className='journey-view--pagination-footer'>
      <button 
                        disabled={pagination.page === 1} 
                        className='journey-view--pagination-footer-elements'
                        onClick={() => getJourneyData(1, currentMonth, currentOrderBy)}
      >{'<<'}</button>
        <button
                  disabled={pagination.page === 1} 
                  className='journey-view--pagination-footer-elements'
                  onClick={() => getJourneyData(pagination.page - 1, currentMonth, currentOrderBy)}
        >{'<'}</button>

        <h3 className='journey-view--pagination-footer-elements'>{pagination.page} / {pagination.totalPage}</h3>
        <button
                          disabled={pagination.page === pagination.totalPage} 
                          className='journey-view--pagination-footer-elements'
                          onClick={() => getJourneyData(pagination.page + 1, currentMonth, currentOrderBy)}
        > {'>'} </button>

        <button
                            disabled={pagination.page === pagination.totalPage} 
                            className='journey-view--pagination-footer-elements'
                            onClick={() => getJourneyData(pagination.totalPage, currentMonth, currentOrderBy)}
        >{'>>'}</button>
        </section>
        
    </main>
  )
}

export default JourneyView
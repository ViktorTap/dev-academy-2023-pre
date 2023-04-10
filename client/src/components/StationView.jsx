import React, { useEffect, useState } from 'react'
import '../style/StationView.css'

import * as stations from '../api/stations.js';
import StationCard from './cards/StationCard';

function StationView() {
  const [stationList, setStationList] = useState([])
  const [pagination, setPagination] = useState("")

  async function getStationData(page, month){
    const responseData = await stations.getStations(page, month);

    console.log(responseData);

    setPagination(responseData.pagination);

    const mappedStationData = responseData.data.map((station, index) => {
      return (<StationCard key={index} stationID={station.DepartureStationID} stationName={station.DepartureStationName}/>)
   })

   setStationList(mappedStationData);
  }


  useEffect(() => {
    getStationData(1, 'may');
  }, [])

  
  return (
    <main className='station-view--main-container'>
        <section className='station-view--title-container'>
          <h3>Station ID</h3>
          <h3>Station Name</h3>
        </section>

        <section className='station-view--station-list-container'>
          {stationList}
        </section>

        <section className='station-view--pagination-footer'>
        <button
                            disabled={pagination.page === 1} 
                            className='station-view--pagination-footer-elements'
                            onClick={() => getStationData(1, 'may')}
        >{'<<'}</button>
          <button 
          disabled={pagination.page === 1} 
          className='station-view--pagination-footer-elements'
          onClick={() => getStationData(pagination.page - 1, 'may')}
          >{'<'}</button>

          <h3 className='station-view--pagination-footer-elements'>{pagination.page} / {pagination.totalPage}</h3>

          <button 
          disabled={pagination.page === pagination.totalPage} 
          className='station-view--pagination-footer-elements'
          onClick={() => getStationData(pagination.page + 1, 'may')}>{'>'}</button>
                  <button
                            disabled={pagination.page === pagination.totalPage} 
                            className='station-view--pagination-footer-elements'
                            onClick={() => getStationData(pagination.totalPage, 'may')}
        >{'>>'}</button>
        </section>
    </main>
  )
}

export default StationView;
import React, { useEffect, useState } from 'react'
import '../style/StationView.css'
import PropagateLoader from "react-spinners/PropagateLoader";

import * as stations from '../api/stations.js';
import StationCard from './cards/StationCard';

function StationView() {
  const [stationList, setStationList] = useState([]);
  const [allStations, setAllStations] = useState([]);
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState("");
  const [searchBy, setSearchBy] = useState("");

  async function getStationData(page, month, orderBy){
    setLoading(true)
    let responseData;

    if (orderBy === 'name'){
      responseData = await stations.getStationsByName(1, 'may');

    } else {
      responseData = await stations.getStations(page, month); 
    }
    
    const allStationsData = await stations.getStationsWithoutLimit(month)
    setAllStations(allStationsData);

    setPagination(responseData.pagination);

    const mappedStationData = responseData.data.map((station, index) => {
      return (<StationCard key={index} stationID={station.DepartureStationID} stationName={station.DepartureStationName} stationData={station}/>)
   })

   setStationList(mappedStationData);
   setLoading(false);
  }


  function searchStation(searchBy){

    if(searchBy > 0) {

      searchStationById(searchBy);

    } else {

      searchStationByName(searchBy)
    }
  }

  function searchStationByName(searchBy){
    
    const foundResult = allStations.data.filter(function(station) {
      return station.DepartureStationName.toLowerCase() === searchBy.toLowerCase()
    });

    if (foundResult.length > 0) {
      setStationList(<StationCard stationID={foundResult[0].DepartureStationID} stationName={foundResult[0].DepartureStationName}/>);
    } else {
      setStationList(<p>No station found with {searchBy} name.</p>)
    }
  }

  function searchStationById(searchBy){
    
    const foundResult = allStations.data.filter(function(station) {
      return station.DepartureStationID === parseInt(searchBy);
    });
    
    if (foundResult.length > 0) {
      setStationList(<StationCard stationID={foundResult[0].DepartureStationID} stationName={foundResult[0].DepartureStationName} stationData={foundResult[0]}/>);
    } else {
      setStationList(<p>No station found with {searchBy} ID.</p>)
    }
    
  }

  useEffect(() => {
    getStationData(1, 'may');
  }, [])

  
  return (
    <main className='station-view--main-container'>
        <section className='station-view--search-container'>
          <label>
            <h3>Search by station name or ID:</h3> 
            <div>
              <input name='stationName'
              value={searchBy}
              onChange={e => setSearchBy(e.target.value)}/>
              <button onClick={() => searchStation(searchBy)} disabled={!searchBy}>SEARCH</button>
            </div>
          </label>
        </section>
        <section className='station-view--title-container'>
          <div>
          <h3 onClick={() => getStationData(1, 'may')}>Station ID</h3>
          </div>
          <div>
          <h3 onClick={() => getStationData(1, 'may', 'name')}>Station Name</h3>
          </div>
        </section>
          
        <section className='station-view--station-list-container'>
          {loading ? 
            <div className='station-view--loading-container'>
            <PropagateLoader loading={loading} size={15} color='#1d3557'/>
          </div> : stationList}
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
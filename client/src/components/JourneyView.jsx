import React, { useEffect } from 'react'
import '../style/JourneyView.css'

import * as journeys from '../api/journeys.js';

function JourneyView() {
  
  useEffect(() => {
    async function getJourneyData(){
      const journeysData = await journeys.getJourneys('may');
      console.log(journeysData);
    }

    // getJourneyData()
  })
  return (
    <main className='journey-view--main-container'>

      <section className='journey-view--title-container'>
        <h1>Departure Station</h1>
        <h1>Return Station</h1>
        <h1>Covered Distance (km)</h1>
        <h1>Duration (min)</h1>
      </section>

      <section>
        <h3>Section number 2</h3>
        <div></div>
      </section>
        
    </main>
  )
}

export default JourneyView
import * as stations from '../../../api/stations.js'

export default async function expandStationCard({ stationID, stationName }){

    getStationInformation(stationID);
   
}

async function getStationInformation(stationID){
    
    const responseData = await stations.getStationInformationByID(stationID);

    console.log(responseData.data[0]);
  }
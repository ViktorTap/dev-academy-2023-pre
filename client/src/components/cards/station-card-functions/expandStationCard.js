import * as stations from '../../../api/stations.js'

export default async function expandStationCard({ stationID }){

   const stationInformation = await getStationInformation(stationID);
   const stationNumbers = await getStationNumbersByID(stationID);

   const stationObject = {
    stationInformation: stationInformation,
    stationNumbers: stationNumbers
   }
   

   return stationObject;
   
}

async function getStationInformation(stationID){
    
    const responseData = await stations.getStationInformationByID(stationID);

    return responseData.data[0];
  }

async function getStationNumbersByID(stationID){

    const responseData = await stations.getStationNumbersByID(stationID);

    return responseData;

}
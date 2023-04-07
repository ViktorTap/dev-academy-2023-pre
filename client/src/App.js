import './style/App.css';
import { Routes, Route } from 'react-router-dom';

import JourneyView from './components/JourneyView';
import StationView from './components/StationView';
import NavigationSideBar from './components/NavigationSideBar';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<NavigationSideBar />}>

          <Route index element={<JourneyView />} />
          <Route path="stations" element={<StationView />} />  

        </Route>
      </Routes> 
    </main>
  );
}

export default App;

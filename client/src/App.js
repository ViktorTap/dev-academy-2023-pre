import './style/App.css';
import { Routes, Route } from 'react-router-dom';

import MainView from './components/MainView';
import SecondView from './components/SecondView';
import NavigationSideBar from './components/NavigationSideBar';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<NavigationSideBar />}>

          <Route index element={<MainView />} />
          <Route path="second" element={<SecondView />} />  

        </Route>
      </Routes> 
    </main>
  );
}

export default App;

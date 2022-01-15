import './App.css';
import Galleries from './components/Galleries';
import RevoCalendar from './components/RevoCalendar';
import ReactCalandare from './components/ReactCalandare';
import HomePage from './HomePage';
import ModalButton from './components/Modal/ModalButton';
import ChooseBarbarButton from './components/Modal/ChooseBarbarButton';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
          <Routes>
              <Route path="home" element={ <HomePage />} />
              <Route path="gallery" element={ <Galleries />} />
              <Route path="calendar" element={ <RevoCalendar />} />
              <Route path="reactcalendar" element={ <ReactCalandare />} />
              <Route path="/" element={ <ModalButton />} />
              <Route path="/barber" element={ <ChooseBarbarButton /> } />
          </Routes>
    </div>
  );
}

export default App;

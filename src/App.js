


import React from 'react';
import { useSelector } from 'react-redux';
import LandingPage from './components/LandingPage';
import BookingForm from './components/BookingForm';
import ConfirmationPopup from './components/ConfirmationPopup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  const page = useSelector((state) => state.booking.page);

  return (

    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/booking" element={<BookingForm />} />
      <Route path="/confirmation" element={<ConfirmationPopup />} />
    </Routes>
  </Router>

    // <div className="App">
    //   {page === 'landing' && <LandingPage />}
    //   {page === 'booking' && <BookingForm />}
    //   {page === 'confirmation' && <ConfirmationPopup />}
      
    // </div>
  );
};

export default App;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../redux/bookingSlice';
import { useNavigate } from 'react-router-dom';

const ConfirmationPopup = () => {
  const dispatch = useDispatch();
  const bookingDetails = useSelector((state) => state.booking.bookingDetails);
  const timearr= (bookingDetails.time).split(":")
  const navigate = useNavigate();
  const handleBackToHome = () => {
    dispatch(setPage('landing'));
navigate('/')
  };

  return (
    <div className="confirmation-popup">
      <h2>Booking Confirmed!</h2>
      <p>Thank you for booking a ride with us.</p>
      <p><strong>Horse:</strong> {bookingDetails.horse}</p>
      <p><strong>Date:</strong> {bookingDetails.date}</p>
      <p><strong>Time:</strong> {
        timearr[0] <= 12 ?(timearr[0]+':'+timearr[1] )+'AM' : (timearr[0]-12+':'+timearr[1] ) +'PM'
  
      }</p>
      <button onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
};

export default ConfirmationPopup;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBookingDetails, setPage } from '../redux/bookingSlice';
import { sendCalendarInvite } from '../utils/calendarInvite';
import horseData from '../jsonData/horseData.json'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { useNavigate, useLocation  } from 'react-router-dom';

const BookingForm = (stableName, horseName) => {
  const dispatch = useDispatch();
  const location =  useLocation ();

  const [stable, setStable] = useState("Stable-1");
  const [horse, setHorse] = useState("Storm");
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

useEffect(()=>{
if(location.state){
 console.log("kaushiki",location.state?.horseDetails)
 const h_name= location.state?.horseDetails?.horseName
 const s_name=  location.state?.horseDetails?.stableName
 setStable(s_name);
 setHorse(h_name)
}else{
  setStable('');
  setHorse('')
}

},[location.state])


  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous error messages
    
    const selectedDate = new Date(date); // Parse selected date
    const selectedHour = parseInt(time.split(':')[0], 10); // Parse selected hour from time

    // Validate if the selected date is a weekday or Saturday and time is between 3 PM - 12 AM
    if (selectedDate.getDay() === 0 || (selectedHour < 15 || selectedHour >= 24)) {
      console.log("eror is ")
      toast.error('Please choose a date and time slot on weekdays and Saturdays between 3 PM - 12 AM.'); // Show error toast
      return;
    }



    const bookingDetails = { horse, date, time, name, email, phone };
    dispatch(setBookingDetails(bookingDetails));
    sendCalendarInvite(bookingDetails);
    dispatch(setPage('confirmation'));
    navigate('/confirmation')

  };

  const selectedStableHorses = stable ? horseData.horses.find(s => s.name === stable).horseDetail : [];
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>Book Your Ride</h2>
<label>
        Stable:
        <select value={stable} onChange={(e) => setStable(e.target.value)}>
          <option value="" disabled>Select a stable</option>
          {horseData.horses.map((stable, idx) => (
            <option key={idx} value={stable.name}>
              {stable.name}
            </option>
          ))}
        </select>
      </label>
      {stable && (
        <label>
          Horse:
          <select value={horse} onChange={(e) => setHorse(e.target.value)}>
            <option value="" disabled>Select a horse</option>
            {selectedStableHorses.map((horse, idx) => (
              <option key={idx} value={horse.name}>
                {horse.name}
              </option>
            ))}
          </select>
        </label>
      )}



      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </label>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
    <ToastContainer />
    </>
  );
};

export default BookingForm;

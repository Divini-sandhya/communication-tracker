import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPage from './pages/AdminPage';
import UserDashboard from './pages/UserDashboard';


function App() {
  const [date, setDate] = useState(new Date());
  const [activeStartDate, setActiveStartDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setActiveStartDate(newDate);
  };

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
      <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
  Click Me
</Button>
      </header>
      <h1>Communication Tracker</h1>
      <AdminPage />
      <Calendar
        onChange={handleDateChange}
        value={date}
        activeStartDate={activeStartDate}
      />
      <p>Selected date: {date.toDateString()}</p>
      <UserDashboard />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
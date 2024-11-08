import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import HabitTracker from "./components/HabitTracker";
import MonthlyOverview from "./components/MonthlyOverview";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
/*
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleSelectDay = day => {
    setSelectedDay(day);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : !selectedDay ? (
        <MonthlyOverview
          month={new Date().getMonth()}
          year={new Date().getFullYear()}
          onSelectDay={handleSelectDay}
        />
      ) : (
        <HabitTracker day={selectedDay} />
      )}
    </div>
  );
}

export default App;
*/


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Monthly Overview</Link>  {/* Link to Monthly Overview */}
            </li>
            {isLoggedIn && (
              <li>
                <Link to="/habit-tracker">Habit Tracker</Link>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          {/* Login Route */}
          <Route path="/" element={!isLoggedIn ? <Login onLogin={() => setIsLoggedIn(true)} /> : <MonthlyOverview />} />

          {/* Habit Tracker Route */}
          <Route
            path="/habit-tracker"
            element={isLoggedIn ? <HabitTracker /> : <Login onLogin={() => setIsLoggedIn(true)} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
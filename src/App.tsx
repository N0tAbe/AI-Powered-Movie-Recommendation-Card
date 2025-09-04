import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { WhatIs } from './pages/WhatIs';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { Discord } from './pages/Discord';
export function App() {
  // In a real app, this would be handled by a proper auth system
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (email: string, password: string) => {
    // This is just a mock login - in a real app, you'd validate credentials
    if (email && password) {
      setIsLoggedIn(true);
    }
  };
  return <BrowserRouter>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} />} />
        <Route element={<Layout isLoggedIn={isLoggedIn} />}>
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/what-is-altflicks" element={<WhatIs />} />
          <Route path="/discord" element={<Discord />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
        </Route>
      </Routes>
    </BrowserRouter>;
}
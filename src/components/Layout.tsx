import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Navigation } from './Navigation';
export const Layout = ({
  isLoggedIn
}: {
  isLoggedIn: boolean;
}) => {
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navigation isLoggedIn={isLoggedIn} />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>;
};
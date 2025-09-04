import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Navigation } from './Navigation';
import { LayoutProps } from '../types';

export const Layout: React.FC<LayoutProps> = ({
  isLoggedIn
}) => {
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navigation isLoggedIn={isLoggedIn} />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>;
};
import React from 'react';
import Sidebar from './Sidebar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='flex min-h-screen bg-slate-900'>
      <Sidebar />
      <main className='flex-1 p-10'>
        <Routes>
          {/* Routes will be defined here */}
        </Routes>
      </main>
    </div>
  );
}

export default App;

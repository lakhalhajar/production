import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='bg-slate-950 backdrop-blur-xl bg-white/5 border-white/10 p-4'>
      {/* Sidebar content will be defined here */}
      <Link to="/">Home</Link>
    </div>
  );
}

export default Sidebar;

import React from 'react';
import { motion } from 'framer-motion';

function Inventory() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {/* Inventory items will be mapped here */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='bg-white/5 border-white/10 p-4 rounded-lg'
      >
        <h2 className='text-indigo-500'>Item Name</h2>
        <p className='text-slate-500'>Item Price</p>
        <p className='text-slate-500'>Item Description</p>
      </motion.div>
    </div>
  );
}

export default Inventory;

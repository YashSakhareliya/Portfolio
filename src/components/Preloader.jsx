import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useSelector } from 'react-redux';

const Preloader = () => {

    const isDarkMode = useSelector((state) => state.theme.darkMode)
  return (
    <div>
      
    </div>
  )
}

export default Preloader

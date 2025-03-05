import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const motionNavLink = motion(forwardRef((props, ref) => <NavLink {...props} ref={ref} />))


const Navbar = () => {
  return (
    <>
    {/* desktop navbar */}
    <motion.nav
    initial={{y: -100}}
    animate={{y: 0}}
    transition={{type: 'spring', stiffness: 300, damping: 30}}
    className='fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300'
    >

    </motion.nav>
    </>
  )
}

export default Navbar

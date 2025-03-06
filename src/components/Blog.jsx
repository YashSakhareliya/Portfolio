import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'


const categories = [
    'All Posts',
    'Artificial Intelligence',
    'React',
    'Architecture',
    'Web Development'
];
const Blog = () => {

    const isDarkMode = useSelector((state) => state.theme.darkMode)
  return (
    <div>
      
    </div>
  )
}

export default Blog

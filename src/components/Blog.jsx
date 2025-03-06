import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'


const categories = [
    'All Posts',
    'Artificial Intelligence',
    'React',
    'Architecture',
    'Web Development'
];

const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and maintain web applications.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Artificial Intelligence',
      image: 'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&w=800&q=80',
      tags: ['AI', 'Web Development', 'Future Tech'],
      link: '',
      featured: true
    },
    {
      id: 2,
      title: 'Mastering React Performance Optimization',
      excerpt: 'Deep dive into advanced techniques for optimizing React applications for better performance and user experience.',
      date: 'March 10, 2024',
      readTime: '8 min read',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Performance', 'JavaScript'],
      link: '',
    },
    {
      id: 3,
      title: 'Building Scalable Architecture',
      excerpt: 'Learn the principles of designing and implementing scalable software architecture for modern applications.',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&w=800&q=80',
      tags: ['Architecture', 'Best Practices', 'Scalability'],
      link: '',
    }
];
  
const Blog = () => {

    const isDarkMode = useSelector((state) => state.theme.darkMode)
  return (
    <div>
      
    </div>
  )
}

export default Blog

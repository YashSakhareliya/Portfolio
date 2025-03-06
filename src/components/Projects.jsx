import React,{ useState } from 'react'
import { useSelector } from 'react-redux';
import { Github, ExternalLink, Code, Brain, Globe, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// projects categories
const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development', icon: <Globe className="w-4 h-4" /> },
    { id: 'ai', label: 'AI & ML', icon: <Brain className="w-4 h-4" /> },
    { id: 'open-source', label: 'Open Source', icon: <Code className="w-4 h-4" /> }
];

const projects = [
    {
        id: 1,
        title: 'Auction Oasis',
        category: 'web',
        image: 'https://images.unsplash.com/photo-1514195037031-83d60ed3b448?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
        description: 'Join thousands of collectors and enthusiasts in the most trusted online auction platform. Bid, win, and collect your next treasure.',
        tags: ['Express.js', 'Node.js', 'MongoDB', 'EJS'],
        links: {
          github: 'https://github.com',
          live: 'https://example.com'
        },
        featured: true
    },
    {
      id: 2,
      title: 'Portfolio',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      description: 'Modern portfolio website with AI features and 3D animations using React, Three.js, and TailwindCSS.',
      tags: ['React', 'Three.js', 'TailwindCSS', 'Framer Motion'],
      links: {
        github: 'https://github.com',
        live: 'https://example.com'
      },
      featured: true
    },
    {
      id: 3,
      title: 'Student Performer indicator',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      description: 'Full-featured e-commerce platform with payment processing, inventory management, and analytics.',
      tags: ['Python', 'TensorFlow', 'ML', 'Streamlit'],
      links: {
        github: 'https://github.com',
        live: 'https://example.com'
      }
    },
    {
      id: 4,
      title: 'Open Source UI Library',
      category: 'open-source',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive UI component library for React applications with accessibility built-in.',
      tags: ['React', 'TypeScript', 'Storybook', 'Jest'],
      links: {
        github: 'https://github.com',
        live: 'https://example.com'
      }
    },
    {
      id: 5,
      title: 'AI Content Generator',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
      description: 'Tool that leverages GPT-4 to generate high-quality content for blogs, social media, and marketing.',
      tags: ['Python', 'OpenAI API', 'React', 'FastAPI'],
      links: {
        github: 'https://github.com',
        live: 'https://example.com'
      },
    },
    {
      id: 6,
      title: 'Developer Productivity Tool',
      category: 'open-source',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      description: 'CLI tool that automates repetitive tasks in the development workflow, saving hours of work.',
      tags: ['Node.js', 'TypeScript', 'CLI', 'Jest'],
      links: {
        github: 'https://github.com',
        live: 'https://example.com'
      }
    }
];
const Projects = () => {
    const isDarkMode = useSelector((state) => state.theme.darkMode)

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredProject, setHoveredProject] = useState(null);
    
    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);
    
    const featuredProjects = filteredProjects.filter(project => project.featured);
    const regularProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section></section>
  )
}

export default Projects

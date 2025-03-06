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
          github: 'https://github.com/YashSakhareliya/AuctionOasis',
          live: 'https://auctionoasis.yashsakhareliya.in'
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
        github: 'https://github.com/YashSakhareliya/portfolio',
        live: 'https://yashsakhareliya.in'
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
    <section className={`py-20 px-4 ${isDarkMode ? 'bg-dark-bg-secondary text-gray-50' : 'bg-gray-50 text-gray-900'}`}>
        <div className='container mx-auto'>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            >
            <h2 className="text-4xl font-bold mb-6">My Projects</h2>
            <p className="max-w-2xl mx-auto text-lg opacity-80">
                Explore my latest work across web development, AI, and open source contributions.
            </p>
            </motion.div>

            {/* Project Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
                <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2
                    ${selectedCategory === category.id
                    ? isDarkMode 
                        ? 'bg-web3-gradient text-white shadow-web3' 
                        : 'bg-blue-600 text-white'
                    : isDarkMode 
                        ? 'bg-dark-bg-tertiary hover:bg-dark-bg-tertiary/70' 
                        : 'bg-white hover:bg-blue-50'
                    }`}
                >
                {category.icon && <span>{category.icon}</span>}
                {category.label}
                </motion.button>
            ))}
            </div>

            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
            <div className="mb-16">
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <Rocket className={`w-6 h-6 ${isDarkMode ? 'text-web3-blue-glow' : 'text-blue-600'}`} />
                Featured Projects
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                    <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    className={`${
                        isDarkMode 
                        ? 'bg-dark-bg-tertiary hover:shadow-web3' 
                        : 'bg-white hover:shadow-xl'
                    } rounded-xl overflow-hidden shadow-lg transition-all duration-300`}
                    >
                    <div className="relative h-64">
                        <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        />
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                        >
                        <motion.a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/10 backdrop-blur-md rounded-full"
                        >
                            <Github className="w-6 h-6 text-white" />
                        </motion.a>
                        <motion.a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/10 backdrop-blur-md rounded-full"
                        >
                            <ExternalLink className="w-6 h-6 text-white" />
                        </motion.a>
                        </motion.div>
                    </div>
                    <div className="p-6">
                        <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                        {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                            <span
                            key={tag}
                            className={`text-sm px-3 py-1 rounded-full ${
                                isDarkMode 
                                ? 'bg-dark-bg-primary text-web3-blue-light' 
                                : 'bg-blue-100 text-blue-800'
                            }`}
                            >
                            {tag}
                            </span>
                        ))}
                        </div>
                    </div>
                    </motion.div>
                ))}
                </div>
            </div>
            )}

            {/* Regular Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
                {regularProjects.map((project) => (
                <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    className={`${
                    isDarkMode 
                        ? 'bg-dark-bg-tertiary hover:shadow-web3' 
                        : 'bg-white hover:shadow-xl'
                    } rounded-xl overflow-hidden shadow-lg transition-all duration-300`}
                >
                    <div className="relative h-48">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                    >
                        <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/10 backdrop-blur-md rounded-full"
                        >
                        <Github className="w-6 h-6 text-white" />
                        </motion.a>
                        <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/10 backdrop-blur-md rounded-full"
                        >
                        <ExternalLink className="w-6 h-6 text-white" />
                        </motion.a>
                    </motion.div>
                    </div>
                    <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`text-sm px-3 py-1 rounded-full ${
                            isDarkMode 
                                ? 'bg-dark-bg-primary text-web3-blue-light' 
                                : 'bg-blue-100 text-blue-800'
                            }`}
                        >
                            {tag}
                        </span>
                        ))}
                    </div>
                    </div>
                </motion.div>
                ))}
            </AnimatePresence>
            </div>
        </div>
    </section>
  )
}

export default Projects

import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
import { Code2, Database, Globe2, Brain, Github, Award, Users, Coffee,  } from 'lucide-react';



const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Expert in React, TypeScript, and modern web technologies',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Building robust and scalable server-side applications',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Implementing cutting-edge AI solutions',
      technologies: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision']
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: 'DevOps & Cloud',
      description: 'Managing and deploying cloud infrastructure',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    }
];

const stats = [
    {
      icon: <Code2 className="w-8 h-8" />,
      value: '15+',
      label: 'Projects Completed',
      description: 'From web apps to AI solutions',
      color: 'from-blue-500 to-blue-600',
      darkColor: 'from-web3-blue-dark to-web3-blue-glow'
    },
    {
      icon: <Github className="w-8 h-8" />,
      value: '1,200+',
      label: 'GitHub Contributions',
      description: 'In the last year',
      color: 'from-purple-500 to-purple-600',
      darkColor: 'from-web3-purple-dark to-web3-purple-glow'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: '5+',
      label: 'Years Experience',
      description: 'In software development',
      color: 'from-green-500 to-green-600',
      darkColor: 'from-web3-teal-dark to-web3-teal-glow'
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: '20+',
      label: 'Happy Clients',
      description: 'Across various industries',
      color: 'from-orange-500 to-orange-600',
      darkColor: 'from-amber-600 to-web3-amber-glow'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      value: '∞',
      label: 'Cups of Coffee',
      description: 'The secret ingredient',
      color: 'from-amber-500 to-amber-600',
      darkColor: 'from-web3-amber-dark to-web3-amber-glow'
    }
];

const About = () => {
    const isDarkMode = useSelector((state) => state.theme.darkMode)

  return (
    <section  className={`py-20 px-4 ${isDarkMode ? 'bg-dark-bg-secondary text-gray-50' : 'bg-white'}`}>
        <div className='container mx-auto'>
            {/* About Heading Text */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="max-w-2xl mx-auto text-lg opacity-80">
                I'm a passionate developer with expertise in building modern web applications
                and implementing AI solutions. With a strong foundation in both frontend and
                backend technologies, I create seamless digital experiences that make a difference.
            </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
                <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${
                    isDarkMode 
                    ? 'bg-dark-bg-tertiary hover:shadow-web3' 
                    : 'bg-white hover:shadow-xl'
                } rounded-xl p-6 shadow-lg transition-shadow duration-300`}
                >
                <div className={`${isDarkMode ? 'text-web3-blue-glow' : 'text-blue-600'} mb-4`}>{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                    <span
                        key={tech}
                        className={`${
                        isDarkMode 
                            ? 'bg-dark-bg-primary text-web3-blue-light' 
                            : 'bg-blue-100 text-blue-800'
                        } text-sm px-3 py-1 rounded-full`}
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                </motion.div>
            ))}
            </div>

            
        </div>
    </section>
  )
}

export default About

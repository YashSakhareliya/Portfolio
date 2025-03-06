import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
import { Code2, Database, Globe2, Brain, Github, Award, Users, Coffee, BrainCircuit   } from 'lucide-react';



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
      value: '1+',
      label: 'Years Experience',
      description: 'In software development',
      color: 'from-green-500 to-green-600',
      darkColor: 'from-web3-teal-dark to-web3-teal-glow'
    },
    {
      icon: <BrainCircuit  className="w-8 h-8" />,
      value: '600+',
      label: 'Problems Solved',
      description: 'DSA & Competitive Programming',
      color: 'from-orange-500 to-orange-600',
      darkColor: 'from-indigo-600 to-web3-indigo-glow'
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

            {/* state section */}

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20"
            >
                <h3 className="text-2xl font-bold mb-10 text-center">My Journey in Numbers</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                        y: -10,
                        boxShadow: isDarkMode 
                            ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" 
                            : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                        }}
                        className={`relative overflow-hidden rounded-2xl shadow-lg ${
                        isDarkMode ? 'bg-dark-bg-tertiary' : 'bg-white'
                        }`}
                    >
                        {/* Background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${
                        isDarkMode ? stat.darkColor : stat.color
                        } opacity-10`}></div>
                        
                        {/* Animated particles */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                            key={i}
                            className={`absolute w-1 h-1 rounded-full bg-current opacity-30`}
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, Math.random() * -50 - 20],
                                x: [0, (Math.random() - 0.5) * 30],
                                opacity: [0.3, 0],
                                scale: [1, 0],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                            />
                        ))}
                        </div>
                        
                        <div className="relative p-6 flex flex-col items-center text-center z-10">
                            <div className={`p-3 rounded-full bg-gradient-to-br ${
                                isDarkMode ? stat.darkColor : stat.color
                            } text-white mb-4`}>
                                {stat.icon}
                            </div>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                            duration: 0.8, 
                            delay: index * 0.1 + 0.3,
                            type: "spring",
                            stiffness: 100
                            }}
                            viewport={{ once: true }}
                        >
                            <span className="block text-4xl font-bold mb-1">{stat.value}</span>
                        </motion.div>
                        
                        <h4 className="text-lg font-semibold mb-2">{stat.label}</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.description}</p>
                        </div>
                    </motion.div>
                    ))}
                </div>
                
                {/* Animated progress bars */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                    { label: 'Frontend Development', value: 95, color: 'from-blue-500 to-blue-600', darkColor: 'from-web3-blue-dark to-web3-blue-glow' },
                    { label: 'Backend Development', value: 90, color: 'from-purple-500 to-purple-600', darkColor: 'from-web3-purple-dark to-web3-purple-glow' },
                    { label: 'UI/UX Design', value: 85, color: 'from-green-500 to-green-600', darkColor: 'from-web3-teal-dark to-web3-teal-glow' },
                    { label: 'AI & Machine Learning', value: 80, color: 'from-orange-500 to-orange-600', darkColor: 'from-amber-600 to-web3-amber-glow' }
                    ].map((skill, index) => (
                    <motion.div
                        key={skill.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`${
                        isDarkMode ? 'bg-dark-bg-tertiary' : 'bg-white'
                        } rounded-xl p-6 shadow-lg`}
                    >
                        <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">{skill.label}</h4>
                        <span className="text-sm font-medium">{skill.value}%</span>
                        </div>
                        <div className={`h-3 ${
                        isDarkMode ? 'bg-dark-bg-primary' : 'bg-gray-200'
                        } rounded-full overflow-hidden`}>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.value}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${
                            isDarkMode ? skill.darkColor : skill.color
                            } rounded-full`}
                        />
                        </div>
                    </motion.div>
                    ))}
                </div>
                
            </motion.div>
        </div>
    </section>
  )
}

export default About

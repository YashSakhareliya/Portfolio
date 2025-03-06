import React from 'react'
import { motion } from 'framer-motion'
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
  return (
    <div>
      About
    </div>
  )
}

export default About

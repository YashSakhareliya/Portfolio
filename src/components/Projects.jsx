import React from 'react'

// projects categories
const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development', icon: <Globe className="w-4 h-4" /> },
    { id: 'ai', label: 'AI & ML', icon: <Brain className="w-4 h-4" /> },
    { id: 'open-source', label: 'Open Source', icon: <Code className="w-4 h-4" /> }
  ];
const Projects = () => {
  return (
    <div>
      Projects
    </div>
  )
}

export default Projects

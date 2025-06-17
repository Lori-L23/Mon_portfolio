
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Palette, Database, Layers, Filter, Search, Star } from 'lucide-react';
import { Project } from '@/types/portfolio';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

 const projects: Project[] = [
    {
      id: 1,
      title: "Plateforme de Mise en Relation Élèves-Répétiteurs",
      description: "Plateforme web permettant aux élèves de trouver des répétiteurs qualifiés dans leur région avec système de réservation et paiement intégré",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["React.js", "Mysql", "Stripe", "Laravel", "Tailwind"],
      category: "Web",
      github: "https://github.com/Lori-L23/FilRouge",
      demo: "#",
      featured: true
    },
    {
      id: 2,
      title: "Système de Gestion de Tâches Collaboratives",
      description: "Application de gestion de projets en équipe avec attribution de tâches, suivi du progrès et communication en temps réel",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "MySql", "Laravel", "Tailwind"],
      category: "Web",
      github: "https://github.com/Lori-L23/Wen-brief5",
      demo: "#",
      featured: false
    },
    {
      id: 3,
      title: "Système de Gestion Scolaire",
      description: "Plateforme complète de gestion d'établissement scolaire avec gestion des élèves, enseignants, notes et emplois du temps",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      technologies: ["Java", "Springboot", "MySQL(Laragon)", "Angular", "Bootstrap"],
      category: "Web",
      github: "https://gitlab.com/lorisky/gestion_scolaire_backend",
      demo: "#",
      featured: true
    },
    {
      id: 4,
      title: "Application Mobile de Fitness",
      description: "Application iOS/Android de suivi d'activité physique avec plans d'entraînement personnalisés",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Redux"],
      category: "Mobile",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      id: 5,
      title: "Dashboard Analytique",
      description: "Tableau de bord de visualisation de données avec graphiques interactifs et export PDF",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["D3.js", "Node.js", "MongoDB"],
      category: "Data",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: 6,
      title: "Extension Chrome pour Productivité",
      description: "Extension pour bloc-notes et gestion des onglets avec synchronisation cloud",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "Chrome API", "IndexedDB"],
      category: "Extension",
      github: "#",
      demo: "#",
      featured: false
    }
  ];
 const filters: string[] = ['Tous', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = projects.filter((project: Project) => {
    const matchesFilter = activeFilter === 'Tous' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, #06b6d4 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Mes Projets
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Une sélection de mes réalisations les plus récentes
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters and Search */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Rechercher un projet..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Projects */}
          {filteredProjects.some(p => p.featured) && (
            <div className="mb-16">
              <motion.h2 
                className="text-2xl font-bold mb-8 text-gray-800 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Star className="w-6 h-6 text-yellow-500 mr-2" />
                Projets en vedette
              </motion.h2>
              
              <motion.div 
                className="grid lg:grid-cols-2 gap-8 mb-12"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {filteredProjects.filter(p => p.featured).map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden group"
                    variants={fadeInUp}
                    whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                  >
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-2">
                            {project.category}
                          </span>
                          <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          <span className="text-sm">Code</span>
                        </a>
                        <a
                          href={project.demo}
                          className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          <span className="text-sm">Démo</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* All Projects */}
          <motion.h2 
            className="text-2xl font-bold mb-8 text-gray-800"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Tous mes projets
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-md overflow-hidden group"
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      <span>Vedette</span>
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-800">{project.title}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="text-gray-400 hover:text-gray-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demo}
                        className="text-gray-400 hover:text-gray-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <a 
                      href="#" 
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Voir plus
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">Aucun projet trouvé</h3>
              <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Par <span className="text-blue-600">Catégories</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => {
              const iconMap = {
                'Web': <Code className="w-8 h-8" />,
                'Mobile': <Layers className="w-8 h-8" />,
                'Data': <Database className="w-8 h-8" />,
                'Extension': <Palette className="w-8 h-8" />
              };
              
              return (
                <motion.div
                  key={category}
                  className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition-shadow cursor-pointer"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  onClick={() => setActiveFilter(category)}
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                    {iconMap[category] || <Code className="w-8 h-8" />}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{category}</h3>
                  <p className="text-gray-600 text-sm">
                    {projects.filter(p => p.category === category).length} projets
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
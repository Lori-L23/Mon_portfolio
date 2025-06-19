// components/ProjectsData.ts
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github: string;
  demo: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Plateforme de Mise en Relation Élèves-Répétiteurs",
    description:
      "Plateforme web permettant aux élèves de trouver des répétiteurs qualifiés dans leur région avec système de réservation et paiement intégré.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&h=400&fit=crop",
    technologies: ["React.js", "MySQL", "Stripe", "Laravel", "Tailwind"],
    category: "Web",
    github: "https://github.com/Lori-L23/FilRouge",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Système de Gestion de Tâches Collaboratives",
    description:
      "Application de gestion de projets en équipe avec attribution de tâches, suivi du progrès et communication en temps réel.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=600&h=400&fit=crop",
    technologies: ["React", "MySQL", "Laravel", "Tailwind"],
    category: "Web",
    github: "https://github.com/Lori-L23/Wen-brief5",
    demo: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Système de Gestion Scolaire",
    description:
      "Plateforme complète de gestion d'établissement scolaire avec gestion des élèves, enseignants, notes et emplois du temps.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=600&h=400&fit=crop",
    technologies: ["Java", "Spring Boot", "MySQL (Laragon)", "Angular", "Bootstrap"],
    category: "Web",
    github: "https://gitlab.com/lorisky/gestion_scolaire_backend",
    demo: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Plateforme de Promotion des Produits Agroalimentaires Locaux",
    description:
      "Une application web dédiée à la promotion des produits agroalimentaires locaux, offrant un catalogue interactif, un système de recommandations géolocalisées et une marketplace pour connecter producteurs et consommateurs.",
    image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?q=80&w=600&h=400&fit=crop",
    technologies: ["React", "Next.js", "MongoDB", "Tailwind CSS", "Stripe"],
    category: "Web",
    github: "https://github.com/lori-dev/agroalimentaire-platform",
    demo: "https://agroalimentaire-demo.com",
    featured: true,
  },
  {
    id: 5,
    title: "Système de Gestion des Utilisateurs",
    description:
      "Une plateforme backend robuste pour la gestion des utilisateurs, incluant l'authentification, les rôles (admin, utilisateur), et la gestion des profils avec une API RESTful.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&h=400&fit=crop",
    technologies: ["Node.js", "Express", "MySQL", "JWT"],
    category: "Backend",
    github: "https://github.com/lori-dev/user-management-system",
    demo: "https://user-management-demo.com",
    featured: false,
  },
  {
    id: 6,
    title: "Générateur de CV (En Cours)",
    description:
      "Une application web en développement permettant aux utilisateurs de créer des CV professionnels avec des modèles personnalisables, exportables en PDF. Projet non terminé.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/lori-dev/cv-generator",
    demo: "https://cv-generator-demo.com",
    featured: false,
  },
  {
    id: 7,
    title: "Solutions Technologiques Écoresponsables",
    description:
      "Une application mobile pour présenter des solutions technologiques respectueuses de l’environnement, avec des études de cas et des calculs d’impact carbone.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "Node.js"],
    category: "web",
    github: "https://github.com/lori-dev/eco-tech-solutions",
    demo: "https://eco-tech-demo.com",
    featured: false,
  },
  {
    id: 8,
    title: "Système de Reconnaissance Biométrique et Faciale",
    description:
      "Une application sécurisée pour l’authentification des utilisateurs via la reconnaissance faciale et biométrique, utilisant des algorithmes d’apprentissage automatique.",
    image: "/scan.jpg",
    technologies: ["Python", "OpenCV", "TensorFlow", "Node.js"],
    category: "Security",
    github: "https://github.com/lori-dev/biometric-authentication",
    demo: "https://biometric-auth-demo.com",
    featured: false,
  },
    {
        id: 9,
        title: "Application de Gestion de Budget Personnel",
        description:
        "Application mobile pour aider les utilisateurs à gérer leur budget personnel, suivre leurs dépenses et économiser efficacement.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&h=400&fit=crop",
        technologies: ["Java"],
        category: "Mobile",
        github: "#",
        demo: "#",  
        featured: false,
    },
    {
        id: 10,
        title: "Application de recherche de pokémon",
        description:"Application web permettant de rechercher des informations sur les Pokémon, incluant des détails sur leurs types, évolutions et pouvoirs.",
        image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=600&h=400&fit=crop",
        technologies: ["Angular", "Java", "Bootstrap", "Spring Boot", "MySQL","Firebase"],
        category: "Web",
        github: "#",
        demo: "#",
        featured: false,
    },
    {
        id: 11,
        title: "Application de quizz(En cours)",
        description: "Application mobile de quiz éducatifs,basee sur la culture camerounaise et/ou africaine permettant aux utilisateurs de tester leurs connaissances sur divers sujets.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&h=400&fit=crop",
        technologies: ["React Native/Flutter", "Firebase", "Node.js"],
        category: "Mobile",
        github: "#",
        demo: "#",
        featured: false,
    }
];
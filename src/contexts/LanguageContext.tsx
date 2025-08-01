import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

// Translations
const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.aboutPage': 'Esta página',
    
    // Home page
    'home.title': 'Uri Alcantar',
    'home.subtitle': 'Frontend Developer',
    'home.description': 'Desarrollador frontend apasionado por crear experiencias digitales excepcionales. Especializado en React, TypeScript y tecnologías modernas del web.',
    'home.cta.work': 'Conoce Mi Trabajo',
    'home.cta.contact': 'Contáctame',
    'home.stats.experience': 'Años de Experiencia',
    'home.stats.projects': 'Proyectos Completados',
    'home.stats.satisfaction': 'Satisfacción del Cliente',
    
    // About page
    'about.title': 'Uri Alcantar',
    'about.subtitle': 'Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales',
    'about.story.title': 'Mi Historia',
    'about.story.p1': 'Soy un desarrollador full stack con más de 6 años de experiencia en el desarrollo web. Me apasiona crear aplicaciones que no solo funcionen perfectamente, sino que también proporcionen una experiencia de usuario excepcional.',
    'about.story.p2': 'Mi enfoque se centra en escribir código limpio, mantenible y escalable, utilizando las mejores prácticas y tecnologías modernas. Creo firmemente en la importancia de la colaboración y el aprendizaje continuo.',
    'about.story.p3': 'Cuando no estoy programando, disfruto explorando nuevas tecnologías, contribuyendo a proyectos de código abierto y compartiendo conocimiento con la comunidad.',
    'about.values.title': 'Valores Principales',
    'about.values.quality': 'Calidad y Excelencia',
    'about.values.innovation': 'Innovación Constante',
    'about.values.collaboration': 'Colaboración y Comunidad',
    'about.skills.title': 'Habilidades y Tecnologías',
    'about.skills.subtitle': 'Domino una amplia gama de tecnologías modernas para crear soluciones completas',
    'about.experience.title': 'Experiencia Profesional',
    'about.experience.subtitle': 'Mi trayectoria profesional en el desarrollo de software',
    'about.contact.title': '¿Trabajemos Juntos?',
    'about.contact.subtitle': 'Estoy siempre interesado en nuevos proyectos y oportunidades de colaboración',
    'about.contact.email': 'Enviar Email',
    'about.contact.github': 'Ver GitHub',
    'about.experience1.description': 'Desarrollé aplicaciones web y móviles utilizando Angular, React e Ionic, implementando APIs RESTful para una integración fluida entre el frontend y el backend. Colaboré en equipos ágiles, creé pruebas unitarias, apliqué estándares de accesibilidad WCAG y configuré servicios de Google Tag Manager (GTM). Utilicé Git y GitHub para el control de versiones.',
    'about.experience2.description': 'Contribuí al desarrollo de la aplicación de atención oncológica de Auna, diseñando e implementando funcionalidades, gestionando builds de producción y despliegues, y dando mantenimiento a la página web relacionada. Construida con Angular, React, Ionic y Arquitectura Limpia (MVP), e integrando componentes de Stencil y React para lograr modularidad y facilidad de mantenimiento.',
    'about.experience3.description': 'Desarrollé una aplicación móvil B2B multiplataforma con Ionic, integrada con APIs alojadas en Azure, y publicada en App Store y Google Play. Gestioné el proceso de envío y revisión de la aplicación en iOS, asegurando su publicación exitosa en la App Store. Desarrollé el sistema CMS utilizando Angular y colaboré con equipos multifuncionales para integrar los componentes móviles y web, optimizando el rendimiento y la experiencia del usuario.',
    
    // About This Page
    'aboutPage.title': 'Acerca de Esta Página',
    'aboutPage.subtitle': 'Una aplicación moderna construida con las mejores tecnologías del desarrollo web',
    'aboutPage.tech.title': 'Tecnologías Utilizadas',
    'aboutPage.tech.p1': 'Esta aplicación está construida con React 18 y TypeScript, proporcionando una base sólida y tipada para el desarrollo frontend.',
    'aboutPage.tech.p2': 'Use Tailwind CSS para el diseño, React Router v7 para la navegación, y un sistema de tema oscuro completamente funcional.',
    'aboutPage.tech.p3': 'La aplicación incluye lazy loading, code splitting, y optimizaciones de rendimiento para una experiencia de usuario excepcional.',
    'aboutPage.features.title': 'Características Principales',
    'aboutPage.features.darkMode': 'Modo Oscuro/Claro',
    'aboutPage.features.navigation': 'Navegación React Router',
    'aboutPage.features.responsive': 'Diseño Responsive',
    'aboutPage.features.seo': 'SEO Optimizado',
    'aboutPage.stack.title': 'Stack Tecnológico',
    'aboutPage.stack.subtitle': 'Las tecnologías que hacen posible esta aplicación',
    'aboutPage.contact.title': '¿Te gusta esta aplicación?',
    'aboutPage.contact.subtitle': 'Esta es una demostración de las capacidades modernas del desarrollo web',
    'aboutPage.contact.code': 'Ver Código',
    'aboutPage.contact.contact': 'Contactar',
    
    // Footer
    'footer.copyright': '© 2024 Mi Aplicación React. Todos los derechos reservados.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.aboutPage': 'About This Page',
    
    // Home page
    'home.title': 'Uri Alcantar',
    'home.subtitle': 'Frontend Developer',
    'home.description': 'Frontend developer passionate about creating exceptional digital experiences. Specialized in React, TypeScript and modern web technologies.',
    'home.cta.work': 'See My Work',
    'home.cta.contact': 'Contact Me',
    'home.stats.experience': 'Years of Experience',
    'home.stats.projects': 'Completed Projects',
    'home.stats.satisfaction': 'Client Satisfaction',
    
    // About page
    'about.title': 'Uri Alcantar',
    'about.subtitle': 'Full Stack Developer passionate about creating exceptional digital experiences',
    'about.story.title': 'My Story',
    'about.story.p1': 'I am a full stack developer with more than 6 years of experience in web development. I am passionate about creating applications that not only work perfectly, but also provide an exceptional user experience.',
    'about.story.p2': 'My approach focuses on writing clean, maintainable and scalable code, using best practices and modern technologies. I firmly believe in the importance of collaboration and continuous learning.',
    'about.story.p3': 'When I\'m not programming, I enjoy exploring new technologies, contributing to open source projects and sharing knowledge with the community.',
    'about.values.title': 'Core Values',
    'about.values.quality': 'Quality and Excellence',
    'about.values.innovation': 'Constant Innovation',
    'about.values.collaboration': 'Collaboration and Community',
    'about.skills.title': 'Skills and Technologies',
    'about.skills.subtitle': 'I master a wide range of modern technologies to create complete solutions',
    'about.experience.title': 'Professional Experience',
    'about.experience.subtitle': 'My professional career in software development',
    'about.contact.title': 'Let\'s Work Together?',
    'about.contact.subtitle': 'I am always interested in new projects and collaboration opportunities',
    'about.contact.email': 'Send Email',
    'about.contact.github': 'View GitHub',
    'about.experience1.description': 'Developed web and mobile applications using Angular, React, and Ionic, implementing RESTful APIs for seamless front-end/back-end integration. Collaborated in agile teams, created unit tests, applied WCAG accessibility standards, and configured Google Tag Manager (GTM) services. Used Git and GitHub for version control.',
    'about.experience2.description': 'Contributed to the development of Auna’s oncology healthcare application, designing and implementing features, managing production builds and deployments, and maintaining the related web page. Built with Angular, React, Ionic, and Clean Architecture (MVP), integrating Stencil and React components to ensure modularity and maintainability.',
    'about.experience3.description': 'Developed a cross-platform B2B mobile application using Ionic, integrated with Azure-hosted APIs, and published on the App Store and Google Play. Managed the iOS app submission and review process, ensuring successful publication on the App Store. Developed the CMS using Angular and collaborated with cross-functional teams to integrate mobile and web components, optimizing performance and user experience.',

    
    // About This Page
    'aboutPage.title': 'About This Page',
    'aboutPage.subtitle': 'A modern application built with the best web development technologies',
    'aboutPage.tech.title': 'Technologies Used',
    'aboutPage.tech.p1': 'This application is built with React 18 and TypeScript, providing a solid and typed foundation for frontend development.',
    'aboutPage.tech.p2': 'I use Tailwind CSS for design, React Router v7 for navigation, and a fully functional dark theme system.',
    'aboutPage.tech.p3': 'The application includes lazy loading, code splitting, and performance optimizations for an exceptional user experience.',
    'aboutPage.features.title': 'Key Features',
    'aboutPage.features.darkMode': 'Dark/Light Mode',
    'aboutPage.features.navigation': 'React Router Navigation',
    'aboutPage.features.responsive': 'Responsive Design',
    'aboutPage.features.seo': 'SEO Optimized',
    'aboutPage.stack.title': 'Tech Stack',
    'aboutPage.stack.subtitle': 'The technologies that make this application possible',
    'aboutPage.contact.title': 'Do you like this application?',
    'aboutPage.contact.subtitle': 'This is a demonstration of modern web development capabilities',
    'aboutPage.contact.code': 'View Code',
    'aboutPage.contact.contact': 'Contact',
    
    // Footer
    'footer.copyright': '© 2024 My React App. All rights reserved.',
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      return savedLanguage as Language;
    }
    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'es' ? 'es' : 'en';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 
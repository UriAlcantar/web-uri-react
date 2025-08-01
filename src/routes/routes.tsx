import React from 'react';
import { RouteObject } from 'react-router-dom';

// Lazy loading for better performance
const Layout = React.lazy(() => import('../components/Layout/Layout'));
const Home = React.lazy(() => import('../pages/Home/Home'));
const AboutMe = React.lazy(() => import('../pages/AboutMe.tsx/Aboutme'));
const AboutThisPage = React.lazy(() => import('../pages/AboutThisPage/AboutThisPage'));

// Route configuration with proper typing
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutMe />,
      },
      {
        path: 'services',
        element: <AboutMe />, 
      },
      {
        path: 'abouttp',
        element: <AboutThisPage />, 
      },
    ],
  },
  {
    path: '*',
    element: (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
          <p className="text-gray-600 text-lg mb-4">Página no encontrada</p>
          <a 
            href="/" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    ),
  },
];

// Navigation items for the header
export const navigationItems = [
  { path: '/', label: 'Inicio', exact: true },
  { path: '/about', label: 'Acerca de', exact: false },
  { path: '/services', label: 'Servicios', exact: false },
  { path: '/abouttp', label: 'Acerca de esta pagina', exact: false },
];

// Route metadata for SEO and page titles
export const routeMetadata = {
  '/': {
    title: 'Uri Alcántar - Frontend Developer',
    description: 'Desarrollador frontend apasionado por crear experiencias digitales excepcionales. Especializado en React, TypeScript y tecnologías modernas del web.',
  },
  '/about': {
    title: 'Acerca de Uri Alcántar - Desarrollador Full Stack',
    description: 'Conoce a Uri Alcántar, desarrollador full stack apasionado por crear experiencias digitales excepcionales. Experiencia en React, TypeScript, Node.js y más.',
  },
  '/services': {
    title: 'Servicios - Mi Aplicación React',
    description: 'Nuestros servicios',
  },
  '/abouttp': {
    title: 'Acerca de esta pagina - Mi Aplicación React',
    description: 'Información sobre esta pagina',
  },
}; 
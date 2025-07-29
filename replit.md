# replit.md

## Overview

This is a full-stack web application built with React frontend and Express.js backend, designed to create an "AllergenAI" landing page. The application showcases an AI-powered food scanning service that helps users identify allergens and dietary information in food products through photo scanning, barcode scanning, and QR code scanning.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL storage
- **Development**: Hot reload with Vite integration in development mode

## Key Components

### Frontend Structure
- **Landing Page**: Single-page application with multiple sections (hero, features, benefits, testimonials, download, footer)
- **Component Library**: Comprehensive UI component system based on shadcn/ui
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Theme Support**: Light/dark mode support with CSS custom properties

### Backend Structure
- **Modular Architecture**: Separate files for routes, storage, and server configuration
- **Storage Abstraction**: Interface-based storage layer with in-memory implementation (ready for database integration)
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Custom middleware for API request logging

### Database Schema
- **Users Table**: Basic user management with id, username, and password fields
- **UUID Support**: Auto-generated UUIDs for primary keys
- **Type Safety**: Drizzle-Zod integration for runtime validation

## Data Flow

1. **Client Requests**: Frontend makes API calls through TanStack Query
2. **Server Processing**: Express.js handles requests and interacts with storage layer
3. **Data Storage**: Currently uses in-memory storage, designed to easily switch to PostgreSQL
4. **Response Handling**: Standardized JSON responses with error handling
5. **Client Updates**: React Query manages cache invalidation and UI updates

## External Dependencies

### Core Dependencies
- **Database**: Neon Database for serverless PostgreSQL
- **UI Components**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: Framer Motion for smooth transitions
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React for consistent iconography

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint configuration (implicit)

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Serving**: Express serves built frontend in production

### Environment Configuration
- **Development**: Vite dev server with HMR and Express API
- **Production**: Express serves static files and API endpoints
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Hosting Considerations
- **Serverless Ready**: Compatible with serverless deployment platforms
- **Environment Variables**: Requires DATABASE_URL for PostgreSQL connection
- **Static Assets**: Frontend assets are bundled and served by Express

The application is designed with scalability in mind, using modern tools and patterns that support both development productivity and production performance. The storage layer abstraction makes it easy to switch from in-memory storage to PostgreSQL database when needed.
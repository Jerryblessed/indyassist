
# IndyAssist

**Try it:** [https://majestic-choux-c20cfa.netlify.app/](https://majestic-choux-c20cfa.netlify.app/)

IndyAssist is an AI-powered chatbot application designed to assist Indianapolis residents by providing real-time information on city services, FAQs, and emergency contacts. Built with Vite, TypeScript, and Azure OpenAI, it offers a responsive and accessible user interface.

---

## Features

- Real-time AI chatbot for city services and FAQs  
- Emergency contact access with geolocation support  
- Responsive design compatible with all devices  
- Accessibility features including high contrast and keyboard navigation  
- Modular codebase for maintainability  

---

## IndyAssist Architecture

```mermaid
graph TB
    subgraph "Frontend Layer"
        UI[User Interface]
        Router[React Router]
        Components[React Components]
        State[State Management]
    end

    subgraph "Core Features"
        Chat[Chat Interface]
        Services[City Services]
        FAQ[FAQ System]
        Emergency[Emergency Services]
    end

    subgraph "Integration Layer"
        API[Azure OpenAI Integration]
        Cache[Local Storage Cache]
    end

    subgraph "External Services"
        AzureAI[Azure OpenAI]
        CityAPI[City Services API]
    end

    %% Frontend Layer Connections
    UI --> Router
    Router --> Components
    Components --> State
    
    %% Core Features Connections
    Components --> Chat
    Components --> Services
    Components --> FAQ
    Components --> Emergency
    
    %% Integration Layer Connections
    Chat --> API
    Chat --> Cache
    API --> AzureAI
    Services --> CityAPI
    
    %% Data Flow
    Cache --> State
    API --> State

    classDef frontend fill:#e6eaef,stroke:#0c2340
    classDef core fill:#b3c1d3,stroke:#0c2340
    classDef integration fill:#809ab8,stroke:#0c2340
    classDef external fill:#4d739c,stroke:#0c2340

    class UI,Router,Components,State frontend
    class Chat,Services,FAQ,Emergency core
    class API,Cache integration
    class AzureAI,CityAPI external
````

---

## Component Structure

### Frontend Layer

* **User Interface:** Built with React and Tailwind CSS
* **React Router:** Handles navigation between different pages
* **React Components:** Reusable UI components
* **State Management:** Local state using React hooks

### Core Features

* **Chat Interface:** AI-powered chatbot using Azure OpenAI
* **City Services:** Information about Indianapolis municipal services
* **FAQ System:** Common questions and answers
* **Emergency Services:** Quick access to emergency contacts

### Integration Layer

* **Azure OpenAI Integration:** Handles communication with Azure OpenAI API
* **Local Storage Cache:** Caches chat history and user preferences

### External Services

* **Azure OpenAI:** Provides AI capabilities for the chatbot
* **City Services API:** External APIs for city service information

---

## Key Design Decisions

1. **Component-Based Architecture**

   * Modular components for better maintainability
   * Separation of concerns between UI and business logic
   * Reusable components across different pages

2. **State Management**

   * React hooks for local state management
   * Local storage for persistence
   * No external state management library needed due to simple state requirements

3. **Performance Optimizations**

   * Code splitting with React Router
   * Local storage caching
   * Lazy loading of components

4. **Security**

   * Environment variables for API keys
   * Input sanitization
   * CORS compliance

5. **Accessibility**

   * ARIA labels
   * Keyboard navigation
   * High contrast support

---

## Data Flow

1. User interacts with the UI
2. React components handle the interaction
3. If needed, the integration layer communicates with external services
4. Results are cached in local storage when appropriate
5. UI updates to reflect the new state

---

## Future Considerations

1. **Scalability**

   * Implementation of server-side caching
   * Addition of more city services
   * Support for multiple languages

2. **Features**

   * Real-time notifications
   * User accounts and preferences
   * Integration with more city services

3. **Performance**

   * Implementation of service workers
   * Progressive Web App capabilities
   * Advanced caching strategies

---

## Getting Started

```bash
git clone https://github.com/Jerryblessed/indyassist.git
cd indyassist
npm install
npm run dev
```

---

## License

This project is licensed under the MIT License.

---

[1]: https://www.yeschat.ai/gpts-9t557kGYag5-Indy-AI-Chatbot?utm_source=chatgpt.com "Indy AI Chatbot-Free, Versatile AI-powered Chat"


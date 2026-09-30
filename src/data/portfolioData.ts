import { PersonalInfo, SkillCategory, ExperienceItem, Project } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Anirudh Pilla',
  profession: 'Software Development Engineer',
  experienceYears: '4+ Years',
  email: 'anirudhxdev@gmail.com',
  phone: '(+91) 9949266794',
  githubUrl: 'https://github.com/anirudhpilla',
  linkedinUrl: 'https://www.linkedin.com/in/AnirudhPilla',
  hackerrankUrl: 'https://www.hackerrank.com/profile/19981A05C4',
  location: 'Visakhapatnam, India',
  status: 'Open to High-Impact Opportunities',
  bio: 'Software Development Engineer with 4+ years of experience building scalable, distributed, multi-tenant SaaS platforms. Experienced in microservices, event-driven architecture, and cloud-native systems, delivering production solutions for enterprise clients with focus on performance, reliability, and system design.',
  coreSkills: [
    'Python',
    'FastAPI',
    'Node.js',
    'NestJS',
    'Express.js',
    'React',
    'PostgreSQL',
    'Redis',
    'RabbitMQ',
    'TypeScript',
    'SQL',
    'Docker',
    'AWS'
  ],
  education: {
    institution: 'Raghu Engineering College',
    degree: 'B.Tech, Computer Science and Engineering',
    grade: 'CGPA: 9.16/10',
    period: 'Mar 2023',
    location: 'Visakhapatnam, India'
  }
};

export const metricsData = [
  {
    id: 'throughput',
    label: 'Peak Throughput',
    value: '955 RPS',
    subtext: '57K+ req/min with 0% error rate on distributed ticket engine'
  },
  {
    id: 'latency',
    label: 'P95 Latency',
    value: '7.21 ms',
    subtext: '3.05 ms median latency via Redis Lua distributed locks'
  },
  {
    id: 'clients',
    label: 'Enterprise Tenants',
    value: '15+',
    subtext: 'Enterprise clients supported on Facttwin multi-tenant SaaS'
  },
  {
    id: 'api_boost',
    label: 'API Optimization',
    value: '+33%',
    subtext: 'Performance gain via centralized NestJS API Gateway & Redis'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages_frameworks',
    title: 'Languages & Frameworks',
    description: 'Modern server runtimes, asynchronous frameworks, and scalable web architectures.',
    iconName: 'Server',
    skills: [
      {
        name: 'Python & FastAPI',
        level: 94,
        experience: '4+ Years',
        useCase: 'High-speed asynchronous APIs, RAG agent backends, SmartFactory services, Pydantic validation',
        isPrimary: true
      },
      {
        name: 'Node.js & NestJS',
        level: 96,
        experience: '4+ Years',
        useCase: 'Centralized API Gateways, dependency injection, microservices, modular domain services',
        isPrimary: true
      },
      {
        name: 'TypeScript & JavaScript',
        level: 96,
        experience: '4+ Years',
        useCase: 'Strict typing, domain-driven models, asynchronous event loops, clean architecture',
        isPrimary: true
      },
      {
        name: 'React & Angular',
        level: 90,
        experience: '4+ Years',
        useCase: 'Dynamic dashboard SPAs, component systems, state management, enterprise UI modules',
        isPrimary: true
      },
      {
        name: 'Express.js & TypeORM',
        level: 92,
        experience: '4+ Years',
        useCase: 'RESTful routing, custom middleware pipelines, entity relations, repository patterns',
        isPrimary: false
      }
    ]
  },
  {
    id: 'architecture_messaging',
    title: 'Architecture & Messaging',
    description: 'Event-driven systems, multi-tenancy, and distributed asynchronous pipelines.',
    iconName: 'Cpu',
    skills: [
      {
        name: 'Microservices & Event-Driven',
        level: 95,
        experience: '4+ Years',
        useCase: 'Decoupled domain services, asynchronous pub/sub, circuit breakers, service discovery',
        isPrimary: true
      },
      {
        name: 'Multi-Tenant Systems & RBAC',
        level: 95,
        experience: '4+ Years',
        useCase: 'Tenant-level data isolation, role-based access control, SSO integration, AES encryption',
        isPrimary: true
      },
      {
        name: 'RabbitMQ & BullMQ',
        level: 93,
        experience: '3.5+ Years',
        useCase: 'Message brokers, delayed task queues, distributed background job workers, async workflows',
        isPrimary: true
      },
      {
        name: 'REST APIs & SSO',
        level: 93,
        experience: '4+ Years',
        useCase: 'Contract-first REST endpoints, OAuth/SSO auth layers, rate-limiting, OpenAPI specs',
        isPrimary: false
      }
    ]
  },
  {
    id: 'databases_caching',
    title: 'Databases & In-Memory Caching',
    description: 'Dual-database architectures, vector search, relational consistency, and sub-millisecond caching.',
    iconName: 'Database',
    skills: [
      {
        name: 'Redis',
        level: 96,
        experience: '4+ Years',
        useCase: 'Lua script distributed locking, cache-aside, sliding window rate limits, session store',
        isPrimary: true
      },
      {
        name: 'PostgreSQL & pgvector',
        level: 94,
        experience: '4+ Years',
        useCase: 'HNSW vector indexing, relational data modeling, CTE transactions, query execution tuning',
        isPrimary: true
      },
      {
        name: 'MySQL & MongoDB',
        level: 90,
        experience: '4+ Years',
        useCase: 'Dual-database IoT time-series telemetry storage, relational configuration, aggregation pipelines',
        isPrimary: false
      },
      {
        name: 'Performance Optimization',
        level: 93,
        experience: '4+ Years',
        useCase: 'EXPLAIN ANALYZE tuning, connection pooling, write-heavy indexing strategies, sub-10ms latency',
        isPrimary: true
      }
    ]
  },
  {
    id: 'cloud_devops_ai',
    title: 'Cloud, DevOps & AI Tools',
    description: 'Cloud-native infrastructure, CI/CD automation, and modern AI engineering tools.',
    iconName: 'Layout',
    skills: [
      {
        name: 'AWS & Docker',
        level: 91,
        experience: '3.5+ Years',
        useCase: 'Containerized microservices, multi-stage builds, cloud infrastructure, ECS/EC2 deployments',
        isPrimary: true
      },
      {
        name: 'Jenkins, CI/CD & Grafana',
        level: 89,
        experience: '3+ Years',
        useCase: 'Automated test pipelines, release automation, system telemetry dashboards, metrics alerts',
        isPrimary: false
      },
      {
        name: 'Claude Code & Cursor IDE',
        level: 95,
        experience: '2+ Years',
        useCase: 'AI-assisted code generation, symbol search, rapid system prototyping and refactoring',
        isPrimary: true
      },
      {
        name: 'System Design & Agile/Scrum',
        level: 94,
        experience: '4+ Years',
        useCase: 'Scalable architecture blueprints, sprint planning, unit and integration testing, code reviews',
        isPrimary: true
      }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'akrivia_sde',
    role: 'Software Development Engineer',
    company: 'Akrivia Automation Pvt. Ltd.',
    period: 'Jun 2023 – Aug 2026',
    location: 'Visakhapatnam, India',
    type: 'Full-time',
    summary: 'Architected, developed, and scaled multi-tenant industrial automation SaaS (Facttwin), SmartFactory backend services, and enterprise HR platform modules (Akrivia HCM).',
    achievements: [
      'Developed and scaled Machine Health Monitoring supporting 15+ enterprise clients with tenant-level data isolation using NestJS microservices and RabbitMQ event-driven architecture.',
      'Contributed to the SmartFactory project, developing robust backend services and REST APIs using Python and FastAPI.',
      'Improved centralized API performance by 33% by building a NestJS API Gateway with Redis caching, RBAC enforcement, rate limiting, and circuit-breaking mechanisms.',
      'Reduced client onboarding time by 20% by implementing automated tenant provisioning workflows using RabbitMQ messaging, AES-encrypted communication, and multi-tenant configuration management.',
      'Designed scalable IoT telemetry processing pipelines using RabbitMQ and Redis, reducing anomaly detection latency while improving data reliability through a dual-database (PostgreSQL + MongoDB) architecture for relational and time-series workloads.',
      'Developed scalable HR platform modules using NestJS, Angular, MySQL, and Redis, optimizing database queries and API workflows to improve response times by 12%.',
      'Implemented configurable performance appraisal workflows, including 9-Box evaluation, reducing HR review cycle completion time by 25%.'
    ],
    technologies: [
      'NestJS',
      'Python',
      'FastAPI',
      'Node.js',
      'Redis',
      'RabbitMQ',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Angular',
      'Docker',
      'TypeScript',
      'AES Encryption'
    ],
    subProducts: [
      {
        name: 'Facttwin & SmartFactory (Industrial Automation SaaS)',
        period: 'Feb 2024 – Aug 2026',
        description: 'Multi-tenant industrial automation platform supporting 15+ enterprise clients with tenant-level data isolation using NestJS microservices, RabbitMQ, and Python/FastAPI backend services.',
        points: [
          'Developed and scaled Machine Health Monitoring, a multi-tenant industrial automation SaaS platform supporting 15+ enterprise clients with tenant-level data isolation using NestJS microservices and RabbitMQ-based event-driven architecture and contributed to the SmartFactory project, developing backend services and APIs using Python and FastAPI.',
          'Improved API performance by 33% by building a centralized NestJS API Gateway with Redis caching, RBAC enforcement, rate limiting, and circuit-breaking mechanisms.',
          'Reduced client onboarding time by 20% by implementing automated tenant provisioning workflows using RabbitMQ messaging, AES-encrypted communication, and multi-tenant configuration management.',
          'Designed scalable IoT telemetry processing pipelines using RabbitMQ and Redis, reducing anomaly detection latency while improving data reliability through a dual-database (PostgreSQL + MongoDB) architecture for relational and time-series workloads.'
        ]
      },
      {
        name: 'Akrivia HCM (Enterprise HR Platform)',
        period: 'Jun 2023 – Jan 2024',
        description: 'Enterprise HR platform modules focused on database query optimization and configurable review cycles.',
        points: [
          'Developed scalable HR platform modules using NestJS, Angular, MySQL, and Redis, optimizing database queries and API workflows to improve response times by 12%.',
          'Implemented configurable performance appraisal workflows, including 9-Box evaluation, reducing HR review cycle completion time by 25%.'
        ]
      }
    ]
  },
  {
    id: 'akrivia_intern',
    role: 'Software Development Engineer Intern',
    company: 'Akrivia Automation Pvt. Ltd.',
    period: 'Mar 2022 – May 2023',
    location: 'Visakhapatnam, India',
    type: 'Full-time',
    summary: 'Modernized legacy HR services, migrated architectural components to NestJS + Angular, and stabilized production deployments.',
    achievements: [
      'Modernized legacy backend and frontend services by migrating to a NestJS + Angular architecture, improving application performance by 15% and reducing maintenance.',
      'Identified and resolved 30+ production issues in Angular and Hapi.js services during early deployment phases, reducing production incidents and improving overall system reliability.'
    ],
    technologies: [
      'NestJS',
      'Angular',
      'Hapi.js',
      'Node.js',
      'MySQL',
      'TypeScript',
      'JavaScript'
    ],
    subProducts: [
      {
        name: 'Akrivia HCM Legacy Modernization',
        period: 'Mar 2022 – May 2023',
        description: 'Architectural refactoring from legacy Hapi.js services to modular NestJS microservices and Angular frontends.',
        points: [
          'Modernized legacy backend and frontend services by migrating to a NestJS + Angular architecture, improving application performance by 15% and reducing maintenance.',
          'Identified and resolved 30+ production issues in Angular and Hapi.js services during early deployment phases, reducing production incidents and improving overall system reliability.'
        ]
      }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'cortex',
    title: 'Cortex: RAG & Tool-Calling Agent Backend',
    tagline: 'Multi-repository code and documentation intelligence engine with real-time streaming and pgvector HNSW indexing.',
    description: 'Built RAG and tool-calling agent backend to query multi-repository codebases and documentation with real-time streaming. Optimized retrieval accuracy using recursive syntax-aware chunking, pgvector HNSW indexing, and cross-encoder re-ranking to minimize hallucinations. Implemented a custom agentic execution loop for code-symbol searches and integrated a dual-mode fallback supporting local quantized models alongside cloud APIs.',
    longDescription: 'Engineered an agentic retrieval-augmented generation (RAG) platform specialized for deep codebase semantic search, symbol navigation, and documentation queries. Employs recursive syntax-aware AST chunking tailored for programming languages to preserve scope boundaries. Sub-millisecond vector retrieval is accelerated via pgvector HNSW indexing in PostgreSQL, followed by a second-stage cross-encoder re-ranking model to suppress hallucinations. Features a custom agentic execution loop capable of iterative tool calling and code-symbol searches, backed by an intelligent dual-mode fallback supporting local quantized models alongside cloud APIs.',
    category: 'AI & Agentic Systems',
    techStack: ['Python', 'FastAPI', 'pgvector', 'PostgreSQL', 'OpenAI API', 'Local LLMs', 'Docker', 'Cross-Encoders'],
    metrics: [
      { label: 'Vector Indexing', value: 'pgvector HNSW' },
      { label: 'Re-Ranking', value: 'Cross-Encoder' },
      { label: 'Streaming', value: 'Token SSE Real-Time' },
      { label: 'Fallback Mode', value: 'Cloud & Local Dual' }
    ],
    architectureHighlights: [
      'Recursive syntax-aware chunking preserving class, function, and import boundaries',
      'pgvector HNSW indexing for rapid sub-millisecond cosine vector similarity lookup',
      'Two-stage retrieval pipeline with cross-encoder re-ranking to minimize hallucinations',
      'Custom agentic execution loop for code-symbol searches with dual-mode cloud/local model fallback'
    ],
    features: [
      'Real-time token streaming over Server-Sent Events (SSE)',
      'Multi-repository semantic search across codebases and API documentation',
      'Autonomous agentic tool-calling loop for code-symbol definitions and references',
      'Dual-mode execution: seamlessly switches between local quantized models and cloud APIs'
    ],
    githubUrl: 'https://github.com/anirudhpilla',
    featured: true,
    systemDiagramSnippet: 'Client Query ➔ FastAPI Agent Loop ➔ Syntax Chunker ➔ pgvector (HNSW) ➔ Cross-Encoder Re-ranker ➔ Cloud / Local LLM Stream'
  },
  {
    id: 'boltticket',
    title: 'Boltticket: High-Concurrency Distributed Ticket Booking Platform',
    tagline: 'High-concurrency ticket reservation engine sustaining 955 RPS (57K+ requests/min) with 0% error rate.',
    description: 'Engineered a high-concurrency distributed ticket booking platform sustaining 955 RPS (57K+ requests/min) with no error rate, achieving 3.05 ms median and 7.21 ms P95 latency through Redis Lua-based distributed locking and BullMQ-powered asynchronous workflows.',
    longDescription: 'Engineered to handle massive concurrent traffic spikes without double-booking or race conditions. Implemented single-roundtrip Redis Lua scripts for atomic ticket inventory holds and distributed mutex locks, backed by BullMQ asynchronous queue workers for payment validation and PostgreSQL transaction consistency. Verified with rigorous k6 stress test benchmarks.',
    category: 'Distributed Systems',
    techStack: ['Node.js', 'TypeScript', 'Redis', 'BullMQ', 'PostgreSQL', 'k6', 'Docker', 'Lua Scripting'],
    metrics: [
      { label: 'Sustained Throughput', value: '955 RPS (57K/min)' },
      { label: 'Median Latency', value: '3.05 ms' },
      { label: 'P95 Latency', value: '7.21 ms' },
      { label: 'Error Rate', value: '0.00%' }
    ],
    architectureHighlights: [
      'Atomic distributed locking with custom Redis Lua scripts eliminating race conditions',
      'BullMQ asynchronous job pipelines managing ticket reservation TTLs and expiration',
      'ACID write consistency in PostgreSQL with row-level locks and transaction rollback safeguards',
      'Extensively load-tested and validated under high concurrency with k6 scripts'
    ],
    features: [
      'Sub-millisecond inventory reservation with automated timeout releases',
      'Idempotent ticket confirmation and order generation',
      'Asynchronous webhook notifications powered by background BullMQ workers',
      'Real-time queue depth and latency metrics telemetry'
    ],
    githubUrl: 'https://github.com/anirudhpilla',
    featured: true,
    systemDiagramSnippet: 'k6 Client (955 RPS) ➔ Node.js API ➔ Redis Lua (Atomic Lock) ➔ BullMQ Worker ➔ PostgreSQL'
  },
  {
    id: 'liveboard',
    title: 'LiveBoard: Real-Time Collaborative Whiteboard',
    tagline: 'Low-latency multi-user collaborative drawing canvas with Socket.io and React.',
    description: 'Built a real-time collaborative whiteboard using React, Socket.io, and HTML5 Canvas, enabling low-latency multi-user drawing, persistent history storage, custom tools, and image export capabilities.',
    longDescription: 'A high-performance interactive collaborative whiteboard allowing multiple remote engineers and designers to draw simultaneously on a shared infinite canvas. Features optimized canvas redraw loops, delta-compressed WebSocket payload streaming via Socket.io, room-based state isolation, and MongoDB persistence for canvas state and undo/redo history.',
    category: 'Full-Stack',
    techStack: ['React', 'Node.js', 'Socket.io', 'HTML5 Canvas', 'MongoDB', 'Express.js', 'TypeScript'],
    metrics: [
      { label: 'Sync Latency', value: '< 15 ms' },
      { label: 'Frame Rate', value: '60 FPS Canvas' },
      { label: 'Session Persistence', value: '100% Stored' }
    ],
    architectureHighlights: [
      'Optimized HTML5 Canvas 2D rendering pipeline with path smoothing and bezier curves',
      'Room-based WebSocket broadcasting with Socket.io handling delta state updates',
      'MongoDB document storage for persistent canvas history and snapshot exports'
    ],
    features: [
      'Multi-user live cursor and stroke presence rendering',
      'Custom vector drawing tools, shapes, color palettes, and eraser',
      'Undo/redo state stack with multi-user conflict resolution',
      'Export whiteboard drawings to PNG, JPEG, and SVG formats'
    ],
    githubUrl: 'https://github.com/anirudhpilla',
    featured: true,
    systemDiagramSnippet: 'React UI (Canvas 60fps) ➔ Socket.io WebSockets ➔ Node.js Room Server ➔ MongoDB State'
  },
  {
    id: 'face-filters',
    title: 'Face Filters & Emotion Recognition System',
    tagline: 'Real-time emotion classifier with 82% accuracy triggering dynamic facial AR filters.',
    description: 'Developed a real-time emotion recognition system with 82% accuracy, classifying 7 primary emotions to trigger dynamic facial filters.',
    longDescription: 'Created a computer vision and deep learning application leveraging MediaPipe for 468-point 3D facial mesh landmark detection and OpenCV + TensorFlow for real-time expression classification. Automatically maps detected emotional states (Happy, Surprise, Neutral, Sad, Angry, Fear, Disgust) to contextual interactive AR overlays on live video feeds.',
    category: 'AI & Computer Vision',
    techStack: ['Python', 'MediaPipe', 'OpenCV', 'TensorFlow', 'NumPy'],
    metrics: [
      { label: 'Accuracy', value: '82.0%' },
      { label: 'Emotion Classes', value: '7 Primary' },
      { label: 'Inference Speed', value: 'Real-time 60fps' }
    ],
    architectureHighlights: [
      'MediaPipe face mesh landmark extraction on live webcam frames',
      'Trained CNN emotion classification model running lightweight inference',
      'Dynamic OpenCV affine transform filter overlay mapping'
    ],
    features: [
      'Real-time classification across 7 distinct human emotion states',
      'Responsive facial landmark tracking invariant to rotation and lighting',
      'Dynamic visual filter triggers and interactive particle effects'
    ],
    githubUrl: 'https://github.com/anirudhpilla',
    featured: false,
    systemDiagramSnippet: 'Camera Stream ➔ MediaPipe Mesh ➔ TensorFlow CNN Classifier (82%) ➔ OpenCV Filter Overlay'
  },
  {
    id: 'facttwin-iot-pipeline',
    title: 'Facttwin IoT Telemetry & Anomaly Processing Pipeline',
    tagline: 'Industrial IoT processing pipeline with RabbitMQ, Redis, and dual-database architecture.',
    description: 'Industrial automation streaming pipeline processing thousands of machine telemetry events per second across 15+ enterprise clients with dual PostgreSQL + MongoDB storage.',
    longDescription: 'Part of Facttwin Machine Health Monitoring and SmartFactory at Akrivia Automation. Designed to ingest high-frequency sensor readings, route through RabbitMQ exchange queues, perform sub-millisecond anomaly detection using Redis thresholds, and persist high-volume time-series data to MongoDB while maintaining relational configuration metadata in PostgreSQL.',
    category: 'Backend & Microservices',
    techStack: ['NestJS', 'Python', 'FastAPI', 'RabbitMQ', 'Redis', 'PostgreSQL', 'MongoDB', 'Docker'],
    metrics: [
      { label: 'Enterprise Tenants', value: '15+ Clients' },
      { label: 'API Speedup', value: '+33%' },
      { label: 'Data Architecture', value: 'PostgreSQL + Mongo' }
    ],
    architectureHighlights: [
      'Centralized NestJS API Gateway with Redis caching and RBAC enforcement',
      'RabbitMQ event-driven messaging for asynchronous tenant provisioning and telemetry ingestion',
      'Dual-database design: MongoDB for time-series IoT data + PostgreSQL for relational metadata',
      'SmartFactory Python and FastAPI backend microservices'
    ],
    features: [
      'Tenant-level data isolation and AES-encrypted inter-service communication',
      'Real-time industrial machine health anomaly alerting',
      'Circuit-breaking and rate limiting preventing cascade failures',
      'Automated tenant onboarding reducing setup time by 20%'
    ],
    githubUrl: 'https://github.com/anirudhpilla',
    featured: false,
    systemDiagramSnippet: 'IoT Sensors ➔ NestJS Gateway ➔ RabbitMQ ➔ Redis Thresholds ➔ Dual DB (Postgres + Mongo)'
  }
];

export const sampleSimulationEndpoints = [
  {
    id: 'cortex_rag',
    name: 'POST /api/v1/cortex/rag/query',
    description: 'Cortex: pgvector HNSW indexing & cross-encoder re-ranking',
    dbQueryTime: 24,
    redisCacheTime: 2,
    serviceProcessingTime: 6,
    cacheHitRatio: '98.5%',
    queryDescription: '-- Cortex: pgvector HNSW Approximate Nearest Neighbor Search\nSELECT doc_id, chunk_content, 1 - (embedding <=> $1) AS cosine_similarity\nFROM code_embeddings\nORDER BY embedding <=> $1\nLIMIT 20;\n-- 2nd stage: Cross-encoder re-ranking top candidates for hallucination suppression'
  },
  {
    id: 'boltticket_reserve',
    name: 'POST /api/v1/tickets/reserve-hold',
    description: 'Boltticket: Atomic Redis Lua distributed lock & BullMQ queuing',
    dbQueryTime: 48,
    redisCacheTime: 3,
    serviceProcessingTime: 4,
    cacheHitRatio: '99.2%',
    queryDescription: '-- Redis Lua Atomic Ticket Hold Script (Sustained 955 RPS)\nlocal key = "ticket:lock:" .. KEYS[1]\nlocal available = redis.call("GET", key)\nif tonumber(available) > 0 then\n  redis.call("DECR", key)\n  return redis.call("SET", "user:hold:" .. ARGV[1], KEYS[1], "EX", 600)\nelse\n  return 0\nend'
  },
  {
    id: 'facttwin_telemetry',
    name: 'POST /api/v1/facttwin/iot/telemetry',
    description: 'Facttwin: RabbitMQ message event & Redis anomaly thresholding',
    dbQueryTime: 55,
    redisCacheTime: 2,
    serviceProcessingTime: 5,
    cacheHitRatio: '96.5%',
    queryDescription: '-- Ingest IoT machine sensor reading to Dual-DB\nINSERT INTO machine_telemetry (tenant_id, machine_id, vibration, temperature, recorded_at)\nVALUES (\'tenant-15\', \'sensor-unit-4a\', 0.042, 78.4, NOW())\n-- PostgreSQL relational metadata + MongoDB time-series batch write with RabbitMQ ACK'
  },
  {
    id: 'hcm_appraisal',
    name: 'GET /api/v1/hcm/appraisals/9-box-matrix',
    description: 'Akrivia HCM: Optimized 9-Box performance matrix evaluation',
    dbQueryTime: 42,
    redisCacheTime: 2,
    serviceProcessingTime: 3,
    cacheHitRatio: '94.0%',
    queryDescription: 'SELECT e.id, e.name, e.department, p.performance_score, p.potential_score,\n       CASE WHEN p.performance_score >= 4 AND p.potential_score >= 4 THEN \'Star Talent\'\n            ELSE \'Solid Performer\' END as nine_box_tier\nFROM employees e JOIN appraisals p ON e.id = p.emp_id WHERE e.tenant_id = $1;'
  }
];

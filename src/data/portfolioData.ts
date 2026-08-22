import { PersonalInfo, SkillCategory, ExperienceItem, Project } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Anirudh Pilla',
  profession: 'Software Development Engineer',
  experienceYears: '4+ Years',
  email: 'anirudhxdev@gmail.com',
  phone: '(+91) 9949266794',
  githubUrl: 'https://github.com/anirudhpilla',
  linkedinUrl: 'https://www.linkedin.com/in/AnirudhPilla',
  hackerrankUrl: 'https://www.hackerrank.com/profile/anirudhxdev',
  location: 'Visakhapatnam, India',
  status: 'Open to High-Impact Opportunities',
  bio: 'Software Development Engineer with 4+ years of experience building scalable, distributed, multi-tenant SaaS platforms. Experienced in microservices, event-driven architecture, and cloud-native systems, delivering production solutions for enterprise clients with focus on performance, reliability, and system design.',
  coreSkills: [
    'Node.js', 
    'NestJS', 
    'Express.js', 
    'React', 
    'PostgreSQL', 
    'Redis', 
    'Microservices', 
    'RabbitMQ', 
    'TypeScript', 
    'SQL'
  ],
  education: {
    institution: 'Raghu Engineering College',
    degree: 'B.Tech, Computer Science and Engineering',
    grade: 'CGPA: 9.16/10',
    period: 'Apr 2023',
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
    id: 'frameworks',
    title: 'Frameworks & Runtime',
    description: 'Scalable server runtimes, enterprise application frameworks, and reactive UI.',
    iconName: 'Server',
    skills: [
      {
        name: 'Node.js & NestJS',
        level: 96,
        experience: '4+ Years',
        useCase: 'Centralized API Gateways, dependency injection, microservices, modular services',
        isPrimary: true
      },
      {
        name: 'Express.js',
        level: 94,
        experience: '4+ Years',
        useCase: 'High-speed RESTful routing, custom middleware pipelines, token verification',
        isPrimary: true
      },
      {
        name: 'React',
        level: 90,
        experience: '4+ Years',
        useCase: 'Dynamic dashboard SPAs, component systems, state hydration, WebSocket hooks',
        isPrimary: true
      },
      {
        name: 'Angular & TypeORM',
        level: 86,
        experience: '3+ Years',
        useCase: 'Enterprise UI modules, database entity relations, migrations, repository patterns',
        isPrimary: false
      }
    ]
  },
  {
    id: 'architecture',
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
        name: 'RabbitMQ & BullMQ',
        level: 92,
        experience: '3.5+ Years',
        useCase: 'Message brokers, delayed task queues, distributed background job workers',
        isPrimary: true
      },
      {
        name: 'Multi-Tenant Systems & RBAC',
        level: 94,
        experience: '3.5+ Years',
        useCase: 'Tenant-level data isolation, role-based access control, SSO integration, AES encryption',
        isPrimary: true
      },
      {
        name: 'REST APIs & SSO',
        level: 92,
        experience: '4+ Years',
        useCase: 'Contract-first REST endpoints, OAuth/SSO auth layers, OpenAPI/Swagger specs',
        isPrimary: false
      }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & In-Memory Caching',
    description: 'Dual-database architectures, relational consistency, and sub-millisecond caching.',
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
        name: 'PostgreSQL & MySQL',
        level: 93,
        experience: '4+ Years',
        useCase: 'Relational data modeling, CTE transactions, query execution plans, indexing strategies',
        isPrimary: true
      },
      {
        name: 'MongoDB & DynamoDB',
        level: 88,
        experience: '3+ Years',
        useCase: 'Dual-database IoT time-series telemetry storage, document aggregation pipelines',
        isPrimary: false
      },
      {
        name: 'SQL Query Optimization',
        level: 92,
        experience: '4+ Years',
        useCase: 'EXPLAIN ANALYZE tuning, connection pooling, write-heavy table optimizations',
        isPrimary: true
      }
    ]
  },
  {
    id: 'languages_devops',
    title: 'Languages, Cloud & DevOps',
    description: 'Multi-language engineering, containerized CI/CD, and AI-assisted workflows.',
    iconName: 'Layout',
    skills: [
      {
        name: 'TypeScript & JavaScript',
        level: 96,
        experience: '4+ Years',
        useCase: 'Strict typing, shared domain models, modern ESNext features, asynchronous programming',
        isPrimary: true
      },
      {
        name: 'Python & SQL',
        level: 88,
        experience: '3+ Years',
        useCase: 'Computer vision pipelines (OpenCV/TensorFlow), data processing, complex query scripting',
        isPrimary: false
      },
      {
        name: 'Docker, Jenkins & CI/CD',
        level: 89,
        experience: '3+ Years',
        useCase: 'Multi-stage container builds, automated test pipelines, release automation',
        isPrimary: false
      },
      {
        name: 'Grafana, Claude Code & Cursor IDE',
        level: 92,
        experience: '2+ Years',
        useCase: 'Telemetry dashboards, metrics monitoring, AI-assisted rapid development',
        isPrimary: false
      }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'akrivia',
    role: 'Software Development Engineer',
    company: 'Akrivia Automation Pvt. Ltd.',
    period: 'Mar 2022 – Present',
    location: 'Visakhapatnam, India',
    type: 'Full-time',
    summary: 'Driving core architecture and feature development across enterprise multi-tenant industrial automation (Facttwin) and human capital management (Akrivia HCM) SaaS platforms.',
    achievements: [
      'Engineered and scaled microservices and event-driven architectures supporting 15+ enterprise clients with zero-compromise tenant data isolation.',
      'Improved centralized API performance by 33% by building a NestJS API Gateway with Redis caching, RBAC enforcement, rate limiting, and circuit breaking.',
      'Designed dual-database (MongoDB + SQL Server) IoT telemetry ingestion pipelines using RabbitMQ and Redis to drastically reduce anomaly detection latency.',
      'Reduced client onboarding time by 20% through automated tenant provisioning workflows with AES-encrypted communication and multi-tenant configuration management.'
    ],
    technologies: [
      'NestJS', 
      'Node.js', 
      'Redis', 
      'RabbitMQ', 
      'PostgreSQL', 
      'MySQL', 
      'MongoDB', 
      'SQL Server', 
      'React', 
      'Angular', 
      'Docker', 
      'TypeScript'
    ],
    subProducts: [
      {
        name: 'Facttwin (Industrial Automation SaaS)',
        period: 'Feb 2024 – Present',
        description: 'Multi-tenant industrial automation platform supporting 15+ enterprise clients with tenant-level data isolation using NestJS microservices and RabbitMQ-based event-driven architecture.',
        points: [
          'Developed and scaled Machine Health Monitoring supporting 15+ enterprise clients with tenant-level data isolation.',
          'Improved API performance by 33% by building a centralized NestJS API Gateway with Redis caching, RBAC enforcement, rate limiting, and circuit-breaking mechanisms.',
          'Reduced client onboarding time by 20% by implementing automated tenant provisioning workflows using RabbitMQ messaging, AES-encrypted communication, and multi-tenant configuration management.',
          'Designed scalable IoT telemetry processing pipelines using RabbitMQ and Redis, reducing anomaly detection latency while improving data reliability through a dual-database (MongoDB + SQL Server) architecture for time-series and relational workloads.'
        ]
      },
      {
        name: 'Akrivia HCM (Enterprise HR Platform)',
        period: 'Mar 2022 – Jan 2024',
        description: 'Scalable enterprise HR platform modules with high database optimization and responsive workflows.',
        points: [
          'Developed scalable HR platform modules using NestJS, Angular, MySQL, and Redis, optimizing database queries and API workflows to improve response times by 12%.',
          'Modernized legacy backend and frontend services by migrating to a NestJS + Angular architecture, improving application performance by 15% and reducing maintenance complexity.',
          'Implemented configurable performance appraisal workflows, including 9-Box evaluation, reducing HR review cycle completion time by 25%.',
          'Built reusable backend services and API integrations to support HR workflows, improving module scalability and enabling faster feature delivery across the platform.'
        ]
      }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'boltticket',
    title: 'Boltticket: High-Concurrency Distributed Ticket Booking Platform',
    tagline: 'High-concurrency ticket reservation engine sustaining 955 RPS (57K+ requests/min) with 0% error rate.',
    description: 'Engineered a high-concurrency distributed ticket booking platform sustaining 955 RPS with no error rate, achieving 3.05 ms median and 7.21 ms P95 latency through Redis Lua-based distributed locking and BullMQ-powered asynchronous workflows.',
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
    featured: true,
    systemDiagramSnippet: 'Camera Stream ➔ MediaPipe Mesh ➔ TensorFlow CNN Classifier (82%) ➔ OpenCV Filter Overlay'
  },
  {
    id: 'facttwin-iot-pipeline',
    title: 'Facttwin IoT Telemetry & Anomaly Processing Pipeline',
    tagline: 'Industrial IoT processing pipeline with RabbitMQ, Redis, and dual-database architecture.',
    description: 'Industrial automation streaming pipeline processing thousands of machine telemetry events per second across 15+ enterprise clients with dual MongoDB + SQL Server storage.',
    longDescription: 'Part of Facttwin Machine Health Monitoring at Akrivia Automation. Designed to ingest high-frequency sensor readings, route through RabbitMQ exchange queues, perform sub-millisecond anomaly detection using Redis thresholds, and persist high-volume time-series data to MongoDB while maintaining relational configuration metadata in SQL Server.',
    category: 'Backend & Microservices',
    techStack: ['NestJS', 'RabbitMQ', 'Redis', 'MongoDB', 'SQL Server', 'TypeScript', 'Docker'],
    metrics: [
      { label: 'Enterprise Tenants', value: '15+ Clients' },
      { label: 'API Speedup', value: '+33%' },
      { label: 'Data Architecture', value: 'Dual-DB' }
    ],
    architectureHighlights: [
      'Centralized NestJS API Gateway with Redis caching and RBAC enforcement',
      'RabbitMQ event-driven messaging for asynchronous tenant provisioning and telemetry ingestion',
      'Dual-database design: MongoDB for time-series IoT data + SQL Server for relational metadata'
    ],
    features: [
      'Tenant-level data isolation and AES-encrypted inter-service communication',
      'Real-time industrial machine health anomaly alerting',
      'Circuit-breaking and rate limiting preventing cascade failures',
      'Automated tenant onboarding reducing setup time by 20%'
    ],
    githubUrl: 'https://github.com/anirudhpilla',
    featured: false,
    systemDiagramSnippet: 'IoT Sensors ➔ NestJS Gateway ➔ RabbitMQ ➔ Redis Thresholds ➔ Dual DB (Mongo + SQL)'
  }
];

export const sampleSimulationEndpoints = [
  {
    id: 'boltticket_reserve',
    name: 'POST /api/v1/tickets/reserve-hold',
    description: 'Boltticket: Atomic Redis Lua distributed lock & BullMQ queuing',
    dbQueryTime: 48,
    redisCacheTime: 3,
    serviceProcessingTime: 4,
    cacheHitRatio: '99.2%',
    queryDescription: '-- Redis Lua Atomic Ticket Hold Script\nlocal key = "ticket:lock:" .. KEYS[1]\nlocal available = redis.call("GET", key)\nif tonumber(available) > 0 then\n  redis.call("DECR", key)\n  return redis.call("SET", "user:hold:" .. ARGV[1], KEYS[1], "EX", 600)\nelse\n  return 0\nend'
  },
  {
    id: 'facttwin_telemetry',
    name: 'POST /api/v1/facttwin/iot/telemetry',
    description: 'Facttwin: RabbitMQ message event & Redis anomaly thresholding',
    dbQueryTime: 62,
    redisCacheTime: 2,
    serviceProcessingTime: 5,
    cacheHitRatio: '96.5%',
    queryDescription: 'INSERT INTO machine_telemetry (tenant_id, machine_id, vibration, temperature, recorded_at)\nVALUES (\'tenant-15\', \'sensor-unit-4a\', 0.042, 78.4, NOW())\n-- MongoDB time-series batch write with RabbitMQ ACK'
  },
  {
    id: 'hcm_appraisal',
    name: 'GET /api/v1/hcm/appraisals/9-box-matrix',
    description: 'Akrivia HCM: Optimized 9-Box performance matrix evaluation',
    dbQueryTime: 52,
    redisCacheTime: 2,
    serviceProcessingTime: 3,
    cacheHitRatio: '94.0%',
    queryDescription: 'SELECT e.id, e.name, e.department, p.performance_score, p.potential_score,\n       CASE WHEN p.performance_score >= 4 AND p.potential_score >= 4 THEN \'Star Talent\'\n            ELSE \'Solid Performer\' END as nine_box_tier\nFROM employees e JOIN appraisals p ON e.id = p.emp_id WHERE e.tenant_id = $1;'
  }
];

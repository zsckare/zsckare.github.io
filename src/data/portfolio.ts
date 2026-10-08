// Keep editable portfolio content separate from the UI.
export const profile = {
  name: 'Antonio Álvarez',
  role: 'Senior Software Engineer · Full Stack & Native Mobile',
  location: 'Durango, Mexico',
  github: 'https://github.com/zsckare',
  linkedin: 'https://www.linkedin.com/in/zsckare/',
  email: 'alvarezguevaraantonio93@gmail.com',
  introduction: 'I design scalable SaaS platforms, enterprise systems, and native Android and iOS applications.',
  about: 'Senior software engineer with 10+ years of experience building enterprise software, SaaS platforms, REST APIs, and mobile applications. My experience spans backend architecture, database optimization, React applications, native Android development with Kotlin and Jetpack Compose, and native iOS development with Swift and SwiftUI.',
};
export const metrics = [{ value: '10+', label: 'Years of experience' }, { value: 'Full Stack', label: 'End-to-end delivery' }, { value: 'Web + Mobile', label: 'Product engineering' }];
export const projects = [
  { index: '01', name: 'GuardCommand', type: 'SaaS · Workforce Operations', description: 'A modular platform for security workforce scheduling, operations, and employee management across web and mobile.', stack: ['Kotlin', 'React', 'Flutter', 'PostgreSQL'], status: 'In development', url: '' },
  { index: '02', name: 'TicketFlow', type: 'Distributed Systems · Ticketing', description: 'An event ticketing platform exploring service boundaries, seat inventory, reservations, and transactional workflows.', stack: ['Kotlin', 'Ktor', 'Microservices', 'Docker'], status: 'In development', url: '' },
  { index: '03', name: 'Harmonia', type: 'iOS · Audio Experience', description: 'A native music player focused on modern interaction design, audio playback, and a refined SwiftUI experience.', stack: ['Swift', 'SwiftUI', 'AVFoundation'], status: 'In development', url: '' },
];
export const skillGroups = [
  { title: 'Backend & Architecture', skills: ['Kotlin', 'Ktor', 'C# / .NET', 'PHP', 'Node.js', 'REST APIs', 'Microservices'] },
  { title: 'Frontend Engineering', skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
  { title: 'Native & Cross-Platform Mobile', skills: ['Android', 'Kotlin', 'Jetpack Compose', 'iOS', 'Swift', 'SwiftUI', 'Flutter', 'Firebase'] },
  { title: 'Data & Infrastructure', skills: ['PostgreSQL', 'Microsoft SQL Server', 'MySQL', 'Docker', 'GitHub Actions'] },
];

// Professional roles and dates transcribed from CV_ENG.md.
export const experience = [
  { company: 'StaffWizard Software', role: 'Senior Full Stack Software Engineer', period: 'Apr 2024 – Jul 2026', description: 'Developed and maintained workforce management SaaS functionality across scheduling, payroll, invoicing, REST APIs, database optimization, and production support.', highlights: ['Workforce management', 'Payroll & invoicing', 'REST APIs', 'Database optimization'] },
  { company: 'Advante Digital', role: 'Full Stack Software Engineer', period: 'May 2022 – May 2024', description: 'Built and maintained client-facing business applications, backend services, frontend interfaces, relational databases, and third-party integrations.', highlights: ['Full-stack applications', 'Third-party integrations', 'Performance optimization'] },
  { company: 'Universidad Autónoma de Durango', role: 'Full Stack Software Engineer', period: 'Jun 2021 – Jun 2022', description: 'Developed internal administrative systems, backend business logic, relational databases, and software automation for university operations.', highlights: ['Administrative systems', 'Process automation', 'Legacy modernization'] },
  { company: 'Geeklab', role: 'Full Stack Software Engineer', period: 'Jun 2015 – May 2021', description: 'Developed web and mobile solutions, including a ride-sharing platform with Android and iOS apps, REST APIs, GPS, Google Maps, payments, and real-time notifications.', highlights: ['Android & iOS', 'Ride-sharing platform', 'GPS & Google Maps', 'Real-time notifications'] },
];

export const education = { institution: 'Instituto Tecnológico de Durango', degree: "Bachelor’s Degree", period: '2011 – 2015', location: 'Durango, Mexico' };


// Career case studies / Casos de estudio profesionales.
// Descriptions reflect documented responsibilities; no invented impact metrics.
export const caseStudies = [
  {
    id: 'ridesharing', number: '01', category: 'MOBILE + BACKEND · GEEKLAB',
    title: 'End-to-end ride-sharing platform',
    overview: 'Contributed to a transportation platform spanning native Android and iOS applications, backend services, web administration, and operational workflows.',
    challenge: 'Coordinate drivers, passengers, trips, location data, and payments across connected mobile and web experiences.',
    contribution: ['Developed Android and iOS applications and REST API functionality', 'Integrated GPS, Google Maps, payments, and real-time notifications', 'Implemented trip, driver, passenger, and authentication workflows', 'Built administrative tools and maintained production services'],
    stack: ['Android', 'iOS', 'PHP', 'MySQL', 'Google Maps API', 'REST APIs'],
    outcome: 'Delivered and maintained interconnected mobile, web, and backend functionality for transportation operations.',
    note: 'Professional work at Geeklab · Client-sensitive details omitted'
  },
  {
    id: 'workforce', number: '02', category: 'ENTERPRISE SAAS · STAFFWIZARD SOFTWARE',
    title: 'Workforce management SaaS',
    overview: 'Developed core capabilities for a workforce operations platform covering employee management, scheduling, payroll, invoicing, and integrations.',
    challenge: 'Support interconnected business rules and operational workflows across scheduling, hours, payroll, and billing.',
    contribution: ['Designed and maintained scheduling and workforce features', 'Implemented payroll and invoicing business logic', 'Built REST APIs consumed by web and mobile applications', 'Optimized database queries, addressed production issues, and refactored existing code'],
    stack: ['SaaS', 'REST APIs', 'Relational Databases', 'Payroll', 'Scheduling'],
    outcome: 'Contributed to production enterprise workflows across backend, database, and frontend layers.',
    note: 'Professional work at StaffWizard Software · Proprietary implementation details omitted'
  },
  {
    id: 'university', number: '03', category: 'INTERNAL SYSTEMS · UNIVERSIDAD AUTÓNOMA DE DURANGO',
    title: 'University operations software',
    overview: 'Built and maintained administrative applications and backend services supporting university operations.',
    challenge: 'Modernize institutional workflows while continuing to support existing applications and data.',
    contribution: ['Implemented web-based administrative functionality', 'Developed backend business logic and relational database structures', 'Automated internal processes and improved legacy applications', 'Diagnosed issues and supported institutional systems'],
    stack: ['Web Applications', 'Backend', 'SQL', 'Automation'],
    outcome: 'Supported ongoing institutional operations with maintained and enhanced internal software.',
    note: 'Professional work · Internal systems are not publicly linked'
  }
];

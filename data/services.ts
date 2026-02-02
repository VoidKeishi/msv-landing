export interface Service {
  id: string
  title: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'exploration',
    title: 'Exploration & Geological Services',
    description: 'MSV provides an end-to-end exploration capability, combining program design, execution, and technical reporting using in-house teams, equipment, and specialist support delivering improved data quality, schedule control, and cost efficiency.',
    features: [
      'Grassroots exploration, including geological mapping, soil and rock-chip sampling, trenching, and technical reporting',
      'Geophysical surveys (EM, IP, and DHEM) including design, execution, interpretation and reporting',
      'Drilling services, from target generation to execution, with over 150,000 metres of diamond drilling delivered',
      'In-house logging, sampling, laboratory management, and data preparation to support geological modelling and reporting',
      'Geological database management and technical reporting',
    ],
  },
  {
    id: 'resource',
    title: 'Resource & Reserve Development',
    description: 'MSV develops geological, resource, and reserve models using industry-standard software including Surpac and Micromine, compliant with local, JORC, and NI 43-101 reporting requirements.',
    features: [
      'Geological modelling and resource estimation',
      'JORC and NI 43-101 compliant reporting',
      'Mine optimisation and reserve conversion studies',
      'Competent Person certification available',
      'Extensive internal cost database for accurate estimation',
    ],
  },
  {
    id: 'project-delivery',
    title: 'Project Delivery (Owner\'s Team & EPCM)',
    description: 'MSV operates as Owner\'s Representative or EPCM contractor, managing engineering, procurement, construction, and commissioning to achieve scope, cost, schedule, quality, safety, and performance objectives.',
    features: [
      'Owner\'s Representative services',
      'EPCM contractor capability',
      'Engineering disciplines (mining, civil, mechanical)',
      'Procurement and construction management',
      'Full project lifecycle support',
    ],
  },
  {
    id: 'operational',
    title: 'Operational Readiness & Support',
    description: 'MSV supports the transition from development to steady-state operations, establishing robust, compliant operating organisations.',
    features: [
      'Human resources systems and recruitment',
      'Procurement, logistics, and warehousing',
      'Finance, accounting, and reporting systems',
      'Corporate governance, policies, and procedures',
      'Safety, environmental, and compliance management',
    ],
  },
]

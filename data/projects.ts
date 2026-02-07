export interface Project {
  id: string
  name: string
  client: string
  country: string
  commodity: string
  status: string
  description: string
  services: string[]
  deliveryModel: string[]
  images: string[]
}

export const projects: Project[] = [
  {
    id: 'sambo-cambodia',
    name: 'SAMBO Cambodia',
    client: 'Sambo Cambodia',
    country: 'Cambodia',
    commodity: 'Gold',
    status: 'Aug 2025 – ongoing',
    description: 'Providing the client with a full suite of services to take their project from exploration through to production.',
    services: [
      'Exploration & Geological Services',
      'Resource & Reserve Development',
      'Project Delivery (Owner\'s Team & EPCM)',
      'Operational Readiness & Support',
    ],
    deliveryModel: ['Advisory', 'EPCM'],
    images: ['/projects/sambo-survey.png', '/projects/sambo-trench.png'],
  },
  {
    id: 'cavico-laos',
    name: 'Cavico Laos',
    client: 'Cavico Laos',
    country: 'Laos',
    commodity: 'Gold',
    status: 'Aug 2024 – Aug 2025',
    description: 'Providing the client with grass roots exploration services (mapping, soils, rock chips and trenching) and drill target generation for gold.',
    services: ['Exploration & Geological Services'],
    deliveryModel: ['Advisory'],
    images: ['/projects/cavico-pre-start.png', '/projects/cavico-stream-sampling.png'],
  },
  {
    id: 'xuan-loc-tho',
    name: 'Xuan Loc Tho',
    client: 'Xuan Loc Tho – Ta Khoa Project Joint Venture',
    country: 'Vietnam',
    commodity: 'Nickel',
    status: 'Aug 2025 – ongoing',
    description: 'MSV has 3 engineers embedded in the client\'s team to help advance permitting, licensing and project studies (including feasibility study & EIA).',
    services: ['Project Delivery (Owner\'s Team & EPCM)'],
    deliveryModel: ['Embedded Teams'],
    images: ['/projects/xlt-working-group.png'],
  },
]

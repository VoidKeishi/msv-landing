export interface TeamMember {
  name: string
  title: string
  category: 'board' | 'advisory' | 'technical' | 'executive'
  bio: string
  email?: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Lon Taranaki',
    title: 'General Director',
    category: 'board',
    bio: 'Process Engineer with over 31 years\' mining experience across multiple jurisdictions. Strong background in executive leadership, engineering, mining operations, and project delivery, with a Southeast Asia focus across coal, nickel, gold, and copper.',
    email: 'Lon@dma-msv.com',
    image: '/team/LonTaranaki.png',
  },
  {
    name: 'Thanh Nguyen Van',
    title: 'Director & Mining Lead',
    category: 'board',
    bio: 'Mining Engineer with 13 years of hands-on experience across open pit and underground operations in Vietnam, Laos, and Cambodia. Strong technical capability supported by proficiency across industry-standard mining software and extensive experience in permitting and licensing mining projects in Vietnam.',
    email: 'Thanh.nguyen@dma-msv.com',
    image: '/team/ThanhNguyenVan.png',
  },
  {
    name: 'Hai Nguyen Ngoc',
    title: 'Director & Geology Lead',
    category: 'board',
    bio: 'Geologist with a Master of Science in Geology and over 20 years\' experience across exploration and mine geology management. Strong technical capability with proficiency in industry-standard geological software, extensive experience designing and managing EM, DHEM, and 3D IP programs, and a deep understanding of Vietnamese reserve reporting requirements and JORC standards.',
    email: 'Hai.nguyen@dma-msv.com',
    image: '/team/HaiNguyenNgoc.png',
  },
  {
    name: 'Jeremy Ayre',
    title: 'Advisory Board',
    category: 'advisory',
    bio: 'Mining, consulting, investment, and entrepreneurial professional with over 35 years\' experience. Founder of AWR Lloyd, a boutique advisory firm servicing the mining sector, and an entrepreneur with a track record of founding investment funds and a renewable energy business.',
    image: '/team/JeremyAyre.png',
  },
  {
    name: 'Dr. Chris Swindells',
    title: 'Advisory Board',
    category: 'advisory',
    bio: 'Senior engineering and environmental professional with over 40 years\' experience leading technical teams across the mining and infrastructure sectors. Former senior executive at Golder Associates, where he held multiple leadership roles over 32 years, including leading the Mining Services team in Australia and globally.',
    image: '/team/DrChrisSwindells.png',
  },
  {
    name: 'Will Coverdale',
    title: 'Senior Technical Advisor - JORC & NI43-101 Reserves',
    category: 'technical',
    bio: 'Qualified Mining Engineer with an MBA and over 19 years\' experience across the mining and metals sector, spanning open pit and underground operations. Extensive background in project evaluation, due diligence, M&A, project planning and development, technical and strategic consulting, and founder of a mining-related IT start-up. Recognised Competent Person for JORC & NI43-101 Reserve reporting.',
    image: '/team/WillCoverdale.png',
  },
  {
    name: 'Chris Ramsay',
    title: 'Senior Technical Advisor - JORC & NI43-101 Resources',
    category: 'technical',
    bio: 'Experienced mineral resource and mine development professional with over 25 years\' global experience across the mining value chain. Expertise includes mineral exploration, resource estimation, project development and evaluation, resource governance, mine geology, and operational management. Recognised Competent Person for JORC and NI43-101 resource reporting.',
    image: '/team/ChrisRamsay.png',
  },
  {
    name: 'Hoan Le Ti Ngoc',
    title: 'Executive Management & HR Lead',
    category: 'executive',
    bio: 'Human Resources professional with a master\'s degree in human resources management, providing comprehensive HR services to Vietnamese and international organisations. Extensive experience in organisational design, role and job description development, recruitment and onboarding, development of company-wide HR policies and procedures, and holding senior leadership roles.',
    email: 'Hoan.le@dma-msv.com',
    image: '/team/HoanLeTiNgoc.png',
  },
  {
    name: 'Hung Nguyen Phuc',
    title: 'Executive Management & Senior Project Manager',
    category: 'executive',
    bio: 'Mechanical Engineer with a Bachelor of Science in Mechanical Engineering and experience across engineering and process operations. Strong capability working to international standards including ASME and ASTM. Experience in project management, studies delivery, permitting and licensing approvals, and subcontractor management. Brings deep operational experience having worked as a senior maintenance leader at a world-class tungsten operation.',
    email: 'Hung.nguyen@dma-msv.com',
    image: '/team/HungNguyenPhuc.png',
  },
  {
    name: 'Tien Dinh Van',
    title: 'Executive Management & Senior Project Manager',
    category: 'executive',
    bio: 'Construction and civil works professional with a Master\'s degree in Transport Works Engineering and a strong background in infrastructure, transport, and civil design. Extensive experience in project and contract management, including delivery of multi-million-dollar construction contracts under FIDIC forms, management of consultants across Pre-FS, FS, detailed and construction design phases, and oversight of contractors and subcontractors during construction execution.',
    email: 'Tien.dinh@dma-msv.com',
    image: '/team/TienDinhVan.png',
  },
]

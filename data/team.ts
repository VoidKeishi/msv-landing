export interface TeamMember {
  id: string
  name: string
  category: 'board' | 'advisory' | 'technical' | 'executive'
  email?: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'lon-taranaki',
    name: 'Lon Taranaki',
    category: 'board',
    email: 'Lon@dma-msv.com',
    image: '/team/LonTaranaki.png',
  },
  {
    id: 'hai-nguyen-ngoc',
    name: 'Hai Nguyen Ngoc',
    category: 'board',
    email: 'Hai.nguyen@dma-msv.com',
    image: '/team/HaiNguyenNgoc.png',
  },
  {
    id: 'thanh-nguyen-van',
    name: 'Thanh Nguyen Van',
    category: 'board',
    email: 'Thanh.nguyen@dma-msv.com',
    image: '/team/ThanhNguyenVan.jpg',
  },
  {
    id: 'dr-chris-swindells',
    name: 'Dr. Chris Swindells',
    category: 'advisory',
    image: '/team/DrChrisSwindells.png',
  },
  {
    id: 'jeremy-ayre',
    name: 'Jeremy Ayre',
    category: 'advisory',
    image: '/team/JeremyAyre.png',
  },
  {
    id: 'will-coverdale',
    name: 'Will Coverdale',
    category: 'technical',
    image: '/team/WillCoverdale.png',
  },
  {
    id: 'chris-ramsay',
    name: 'Chris Ramsay',
    category: 'technical',
    image: '/team/ChrisRamsay.png',
  },
  {
    id: 'hoan-le-thi-ngoc',
    name: 'Hoan Le Thi Ngoc',
    category: 'executive',
    email: 'Hoan.le@dma-msv.com',
    image: '/team/HoanLeTiNgoc.jpg',
  },
  {
    id: 'hung-nguyen-phuc',
    name: 'Hung Nguyen Phuc',
    category: 'executive',
    email: 'Hung.nguyen@dma-msv.com',
    image: '/team/HungNguyenPhuc.jpg',
  },
  {
    id: 'tien-dinh-van',
    name: 'Tien Dinh Van',
    category: 'executive',
    email: 'Tien.dinh@dma-msv.com',
    image: '/team/TienDinhVan.jpg',
  },
  {
    id: 'phd-minh-dinh-huu',
    name: 'PhD. Minh Dinh Huu',
    category: 'technical',
    image: '/team/PhdDinhMinhHuu.png',
  },
  {
    id: 'hung-tran-huu',
    name: 'Hung Tran Huu',
    category: 'technical',
    image: '/team/HungTranHuu.png',
  },
]

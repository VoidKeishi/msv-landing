'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  'Exploration & Geological',
  'Resource & Reserve',
  'Project Delivery (EPCM)',
  'Operational Readiness',
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white mt-20">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr_1.2fr] gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logos/MSV Logo Only (Transparent).png"
                alt="MSV Logo"
                width={48}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
              <span className="text-lg font-bold text-white leading-tight">
                Mining Services Vietnam
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Practical, high-quality mining solutions across Southeast Asia. 
              Western standards, local expertise.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-msv-gold font-semibold">150,000+</span>
              <span className="text-slate-400">metres drilled</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-1 group text-sm"
                  >
                    {link.label}
                    <ArrowUpRight 
                      size={14} 
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" 
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service} className="text-slate-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@dma-msv.com" 
                  className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <Mail size={18} className="mt-0.5 flex-shrink-0 text-msv-cyan" />
                  <span className="text-sm">info@dma-msv.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+842462500426" 
                  className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone size={18} className="mt-0.5 flex-shrink-0 text-msv-cyan" />
                  <span className="text-sm">+84 24 62500426</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-msv-cyan" />
                <address className="text-slate-300 text-sm not-italic leading-relaxed">
                  Office 5A, 23rd Floor, Tower A<br />
                  Hudtower, 37 Le Van Luong<br />
                  Thanh Xuan, Hanoi, Vietnam
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Mining Services Vietnam JSC. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-slate-400">
              <span>Vietnam</span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span>Cambodia</span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span>Laos</span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span>Thailand</span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span>Malaysia</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

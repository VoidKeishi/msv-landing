'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { AnimatedSection } from '@/components/ui/AnimatedComponents'
import { ArrowRight, Mail, Phone } from 'lucide-react'

export function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-msv-blue via-msv-blue to-msv-cyan" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <Container className="relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl mb-10 text-white/80 leading-relaxed">
            Connect with our team to explore how MSV can support your mining project 
            from exploration through to operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-white text-msv-blue hover:bg-msv-light-2-subtle group inline-flex items-center justify-center whitespace-nowrap min-w-max">
                <span>Contact Us Today</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
            </Link>
            <a href="mailto:info@dma-msv.com" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 inline-flex items-center justify-center whitespace-nowrap min-w-max">
                <Mail className="mr-2 w-4 h-4 flex-shrink-0" />
                <span>info@dma-msv.com</span>
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+84 24 62500426</span>
            </div>
            <span className="hidden sm:block">|</span>
            <span>Hanoi, Vietnam</span>
            <span className="hidden sm:block">|</span>
            <span>Serving Southeast Asia</span>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}

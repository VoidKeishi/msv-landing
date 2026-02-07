'use client'

import { Container } from '@/components/ui/Container'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedComponents'
import { ContactForm } from '@/components/sections/ContactForm'
import { Mail, Phone, MapPin, ArrowUpRight, Clock } from 'lucide-react'

const keyContacts = [
  { name: 'Lon Taranaki', email: 'Lon@dma-msv.com', title: 'General Director' },
  { name: 'Thanh Nguyen Van', email: 'Thanh.nguyen@dma-msv.com', title: 'Director & Mining Lead' },
  { name: 'Hai Nguyen Ngoc', email: 'Hai.nguyen@dma-msv.com', title: 'Director & Geology Lead' },
  { name: 'Hoan Le Thi Ngoc', email: 'Hoan.le@dma-msv.com', title: 'HR Lead' },
  { name: 'Hung Nguyen Phuc', email: 'Hung.nguyen@dma-msv.com', title: 'Senior Project Manager' },
  { name: 'Tien Dinh Van', email: 'Tien.dinh@dma-msv.com', title: 'Senior Project Manager' },
]

export function ContactContent() {

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-msv-blue/20 via-transparent to-transparent" />
        <Container className="relative">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 md:mb-8 border border-white/10">
              <span className="text-sm font-medium text-white/90">Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Contact<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-msv-gold via-msv-gold-light to-msv-gold">
                Our Team
              </span>
            </h1>
            <p className="text-lg md:text-xl text-msv-light-2 leading-relaxed">
              Ready to discuss your mining project? We&apos;re here to help.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
            <div className="lg:col-span-3 flex flex-col">
              <AnimatedSection className="flex-1 flex flex-col">
                <h2 className="text-3xl font-bold text-msv-dark-2 mb-8">Send Us a Message</h2>

                <div className="bg-msv-light-2-subtle rounded-2xl p-8 border border-msv-light-2/30 flex-1 flex flex-col">
                  <p className="text-msv-dark-2/80 mb-6">
                    Fill out the form below and our team will get back to you within 24-48 business hours.
                  </p>

                  <div className="flex-1">
                    <ContactForm />
                  </div>

                  <div className="pt-6 mt-6 border-t border-msv-light-2/50">
                    <p className="text-sm text-msv-gray-blue text-center mb-3">Or email us directly</p>
                    <a
                      href="mailto:info@dma-msv.com"
                      className="inline-flex items-center gap-2 text-msv-blue hover:text-msv-blue/80 font-medium transition-colors w-full justify-center"
                    >
                      <Mail size={18} />
                      <span>info@dma-msv.com</span>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2 flex flex-col">
              <AnimatedSection delay={0.2} className="flex-1 flex flex-col">
                <h2 className="text-3xl font-bold text-msv-dark-2 mb-8">Contact Info</h2>

                <div className="space-y-6 flex-1 flex flex-col">
                  <div className="bg-gradient-to-br from-msv-blue to-msv-cyan rounded-2xl p-6 text-white">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">General Email</p>
                        <a 
                          href="mailto:info@dma-msv.com"
                          className="text-white/90 hover:text-white transition-colors"
                        >
                          info@dma-msv.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-msv-light-2-subtle rounded-2xl p-6 border border-msv-light-2/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-msv-blue/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-msv-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-msv-dark-2 mb-1">Phone</p>
                        <a 
                          href="tel:+842462500426"
                          className="text-msv-dark-2/80 hover:text-msv-blue transition-colors"
                        >
                          +84 24 62500426
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-msv-light-2-subtle rounded-2xl p-6 border border-msv-light-2/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-msv-blue/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-msv-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-msv-dark-2 mb-2">Office Address</p>
                        <address className="text-msv-dark-2/80 not-italic text-sm leading-relaxed">
                          Mining Services Vietnam JSC<br />
                          Office 5A, 23rd Floor, Tower A<br />
                          Hudtower, 37 Le Van Luong<br />
                          Thanh Xuan, Hanoi, Vietnam
                        </address>
                      </div>
                    </div>
                  </div>

                  <div className="bg-msv-light-2-subtle rounded-2xl p-6 border border-msv-light-2/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-msv-blue/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-msv-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-msv-dark-2 mb-1">Business Hours</p>
                        <p className="text-msv-dark-2/80 text-sm">
                          Mon - Fri: 8:00 AM - 5:00 PM (ICT)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-msv-light-2-subtle">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-msv-dark-2 mb-4">Key Contacts</h2>
            <p className="text-msv-dark-2/80">Reach out directly to our leadership team</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyContacts.map((contact) => (
              <StaggerItem key={contact.email}>
                <a 
                  href={`mailto:${contact.email}`}
                  className="group block bg-white rounded-2xl p-6 border border-msv-light-2/30 hover:border-msv-blue/20 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-msv-dark-2 group-hover:text-msv-blue transition-colors">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-msv-gray-blue">{contact.title}</p>
                    </div>
                    <ArrowUpRight size={18} className="text-msv-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-msv-blue">{contact.email}</p>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="pb-16 md:pb-24 bg-msv-light-2-subtle">
        <Container>
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.0794086673434!2d105.80229631533423!3d20.99568668601097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad86e09c4eef%3A0x3b62c2dd0be8762f!2sHudtower!5e0!3m2!1sen!2s!4v1643883600000!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="MSV Office Location"
              />
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}

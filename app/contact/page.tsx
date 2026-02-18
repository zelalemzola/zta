'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[40vh] pt-32 pb-16 bg-gradient-to-br from-background via-background to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight text-balance">
              Get in Touch
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed text-pretty max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as quickly as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Contact Info Card 1 */}
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Email</h3>
              <p className="text-foreground/60 mb-4">Send us an email anytime</p>
              <a
                href="mailto:info@zoetradeassurance.com"
                className="font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                info@zoetradeassurance.com
              </a>
            </div>

            {/* Contact Info Card 2 */}
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Phone</h3>
              <p className="text-foreground/60 mb-4">Call us during business hours</p>
              <a
                href="tel:+251-900-000-000"
                className="font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                +251-900-000-000
              </a>
            </div>

            {/* Contact Info Card 3 */}
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Location</h3>
              <p className="text-foreground/60">
                Addis Ababa<br />
                Ethiopia
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Business Hours */}
            <div className="md:col-span-1 bg-secondary rounded-xl border border-border p-8">
              <div className="flex gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <h3 className="font-bold text-lg text-foreground">Business Hours</h3>
              </div>
              <div className="space-y-3 text-sm text-foreground/60">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="text-xs text-foreground/40 mt-6 pt-6 border-t border-border">
                We respond to all inquiries within 24 business hours
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="md:col-span-2 bg-card rounded-xl border border-border p-8 md:p-12 space-y-6">
              {submitted && (
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-primary">
                  <p className="font-semibold">Thank you! Your message has been received.</p>
                  <p className="text-sm opacity-90">We'll be in touch within 24 business hours.</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder-foreground/40"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder-foreground/40"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder-foreground/40"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder-foreground/40"
                    placeholder="+251-900-000-000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder-foreground/40"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                >
                  <option value="">Select a subject...</option>
                  <option value="quality-inspection">Quality Inspection</option>
                  <option value="documentation">Documentation Services</option>
                  <option value="logistics">Logistics Checks</option>
                  <option value="supply-chain">Supply Chain Management</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder-foreground/40 resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>

              <p className="text-xs text-foreground/50 text-center">
                We respect your privacy. Your information is secure and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How quickly can you conduct an inspection?",
                a: "We typically schedule inspections within 1-2 business days of request. For urgent cases, we can often accommodate same-day or next-day inspections depending on availability and location."
              },
              {
                q: "What industries do you serve?",
                a: "We serve a wide range of industries including coffee, spices, textiles, electronics, agriculture, and general import/export businesses. Our expertise spans both perishable and non-perishable goods."
              },
              {
                q: "Do you provide reports in multiple languages?",
                a: "Yes, we provide inspection and quality reports in English and Amharic. Custom language requirements can be discussed on a case-by-case basis."
              },
              {
                q: "What is your pricing structure?",
                a: "Our pricing varies based on shipment size, complexity, location, and specific services required. We provide detailed quotes upon request with no hidden fees. Contact us for a customized proposal."
              },
              {
                q: "Can you provide references from previous clients?",
                a: "Absolutely! We're happy to provide references and case studies upon request. Our track record speaks for itself with over 500 satisfied clients."
              },
              {
                q: "Do you offer ongoing supply chain management?",
                a: "Yes, we offer comprehensive supply chain management services including inventory tracking, logistics optimization, and regular reporting. These can be customized to meet your specific needs."
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-card rounded-lg border border-border overflow-hidden">
                <summary className="flex justify-between items-center w-full p-6 cursor-pointer hover:bg-background/50 transition-colors font-semibold text-foreground">
                  <span>{faq.q}</span>
                  <span className="text-primary">+</span>
                </summary>
                <div className="px-6 pb-6 text-foreground/60 border-t border-border pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground border-t border-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-balance">Have More Questions?</h2>
            <p className="text-lg opacity-90 text-pretty">
              Explore our services or schedule a call with our team
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors text-center"
            >
              Explore Services
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors text-center"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

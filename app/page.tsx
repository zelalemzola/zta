import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import { CheckCircle2, TrendingUp, Package, Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-background via-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight text-balance">
                  Your Trusted On-Ground Partner
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed text-pretty">
                  We represent your interests on the ground, ensuring quality standards, handling logistics checks, and confirming documentation with precision and expertise.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 text-center"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors text-center"
                >
                  Explore Services
                </Link>
              </div>

              <div className="flex gap-8 text-sm">
                <div>
                  <p className="font-bold text-2xl text-primary">500+</p>
                  <p className="text-foreground/60">Shipments Verified</p>
                </div>
                <div>
                  <p className="font-bold text-2xl text-primary">98%</p>
                  <p className="text-foreground/60">Quality Compliance</p>
                </div>
                <div>
                  <p className="font-bold text-2xl text-primary">24/7</p>
                  <p className="text-foreground/60">Ground Support</p>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card rounded-2xl border border-border p-8 space-y-6 shadow-lg">
                <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm text-foreground/60 mb-2">Quality Assurance</p>
                    <p className="text-2xl font-bold text-primary">Global Standards</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">Quality Inspection</p>
                      <p className="text-xs text-foreground/60">Complete product verification</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">Documentation</p>
                      <p className="text-xs text-foreground/60">All paperwork handled</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">Live Updates</p>
                      <p className="text-xs text-foreground/60">Real-time progress tracking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Core Services</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-pretty">
              Comprehensive quality assurance and supply chain solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quality Grading</h3>
              <p className="text-sm text-foreground/60">Comprehensive inspection and grading of products according to international standards</p>
            </div>

            <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Documentation</h3>
              <p className="text-sm text-foreground/60">Complete handling of all required documentation and compliance paperwork</p>
            </div>

            <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Logistics Checks</h3>
              <p className="text-sm text-foreground/60">Detailed verification of shipments and logistics operations</p>
            </div>

            <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Supply Chain</h3>
              <p className="text-sm text-foreground/60">End-to-end supply chain management and optimization services</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Why Choose Zoe Trade Assurance?</h2>
                <p className="text-lg text-foreground/60 text-pretty">
                  We're more than just an agency—we're your trusted partner who understands both your needs and the local landscape.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Local Expertise", desc: "Deep understanding of regional regulations and best practices" },
                  { title: "Quality First", desc: "Unwavering commitment to meeting and exceeding international standards" },
                  { title: "Transparent Updates", desc: "Regular communication and detailed reports on every step" },
                  { title: "24/7 Support", desc: "Always available to address concerns and provide solutions" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 space-y-8">
              <div className="bg-primary/5 rounded-lg p-6">
                <p className="text-sm font-semibold text-primary mb-2">OUR PROMISE</p>
                <p className="text-foreground font-semibold">
                  "We act as your representative on the ground, protecting your interests with integrity, expertise, and dedication."
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm font-semibold text-foreground/60">Certified Excellence</p>
                  <p className="text-foreground font-semibold">ISO 9001 Compliant</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm font-semibold text-foreground/60">Industry Experience</p>
                  <p className="text-foreground font-semibold">15+ Years of Service</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm font-semibold text-foreground/60">Global Network</p>
                  <p className="text-foreground font-semibold">Trusted Partners Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground border-t border-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-balance">Ready to Partner With Us?</h2>
            <p className="text-lg opacity-90 text-pretty">
              Let's discuss how we can ensure quality and efficiency in your supply chain
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors text-center"
            >
              Contact Us Today
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors text-center"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

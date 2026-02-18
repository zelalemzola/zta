import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import { CheckCircle2, ClipboardCheck, Truck, Network, BarChart3, Shield } from 'lucide-react';

export const metadata = {
  title: 'Our Services | Zoe Trade Assurance',
  description: 'Quality grading, documentation, logistics checks, and supply chain management services.',
};

export default function Services() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[50vh] pt-32 pb-16 bg-gradient-to-br from-background via-background to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight text-balance">
              Comprehensive Quality Assurance Services
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed text-pretty max-w-3xl mx-auto">
              Everything you need to ensure quality, compliance, and efficiency in your supply chain
            </p>
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Service 1: Quality Grading */}
            <div className="space-y-6">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Quality Grading & Inspection</h2>
                <p className="text-lg text-foreground/60 leading-relaxed text-pretty mb-6">
                  Comprehensive product evaluation according to international standards. Our certified inspectors verify quality, authenticity, and compliance with your specifications.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Visual Inspection</p>
                    <p className="text-sm text-foreground/60">Detailed examination of all products and packaging</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Testing & Sampling</p>
                    <p className="text-sm text-foreground/60">Laboratory testing for quality verification</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Grading Report</p>
                    <p className="text-sm text-foreground/60">Detailed documentation of findings and compliance status</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Standards Compliance</p>
                    <p className="text-sm text-foreground/60">Verification against ISO, FDA, USDA standards as needed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-8">
              <div className="bg-primary/5 rounded-lg p-6 mb-6">
                <p className="text-sm font-semibold text-primary mb-2">TYPICAL INDUSTRIES</p>
                <div className="flex flex-wrap gap-2">
                  {['Coffee', 'Spices', 'Textiles', 'Electronics', 'Agriculture'].map((ind) => (
                    <span key={ind} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground/60 mb-2">Turnaround Time</p>
                  <p className="text-foreground font-semibold">2-5 Business Days</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground/60 mb-2">Deliverables</p>
                  <p className="text-foreground font-semibold">Inspection Report & Grading Certificate</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground/60 mb-2">Who Benefits</p>
                  <p className="text-foreground font-semibold">Importers, Wholesalers, Quality-Conscious Businesses</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-8 w-full block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-center"
              >
                Request Inspection
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Service 2: Documentation */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="bg-card rounded-xl border border-border p-8">
                <div className="bg-primary/5 rounded-lg p-6 mb-6">
                  <p className="text-sm font-semibold text-primary mb-2">DOCUMENTS HANDLED</p>
                  <div className="flex flex-wrap gap-2">
                    {['Bill of Lading', 'Invoice', 'Packing List', 'CoO', 'Phytosanitary'].map((doc) => (
                      <span key={doc} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground/60 mb-2">Turnaround Time</p>
                    <p className="text-foreground font-semibold">1-3 Business Days</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground/60 mb-2">Deliverables</p>
                    <p className="text-foreground font-semibold">Complete Documentation Package</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground/60 mb-2">Who Benefits</p>
                    <p className="text-foreground font-semibold">All Import/Export Operations</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-8 w-full block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-center"
                >
                  Get Documentation Help
                </Link>
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                <ClipboardCheck className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Documentation & Compliance</h2>
                <p className="text-lg text-foreground/60 leading-relaxed text-pretty mb-6">
                  Complete handling of all required documentation and regulatory compliance. We ensure every document is accurate, complete, and compliant with international regulations.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Document Preparation</p>
                    <p className="text-sm text-foreground/60">Accurate preparation of all required shipping documents</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Regulatory Compliance</p>
                    <p className="text-sm text-foreground/60">Verification of all legal requirements and certifications</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Customs Clearance Support</p>
                    <p className="text-sm text-foreground/60">Assistance with customs procedures and clearance</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Certification Services</p>
                    <p className="text-sm text-foreground/60">Origin certificates and compliance documentation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Services */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Additional Services</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-pretty">
              Specialized solutions for specific logistics and supply chain needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-3">Logistics Checks</h3>
              <p className="text-sm text-foreground/60 mb-4">
                Complete verification of shipment conditions, container seals, transport documentation, and delivery logistics.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Container verification</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Temperature monitoring</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Transport compliance</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-3">Supply Chain Management</h3>
              <p className="text-sm text-foreground/60 mb-4">
                End-to-end supply chain optimization including inventory management, tracking, and distribution planning.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Inventory tracking</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Distribution planning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Process optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-3">Consulting & Reporting</h3>
              <p className="text-sm text-foreground/60 mb-4">
                Expert analysis and detailed reporting on product quality, market compliance, and supply chain efficiency.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Quality analysis</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Detailed reporting</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Market insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">How We Work</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-pretty">
              Our streamlined process ensures quality, efficiency, and clear communication at every step
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "01", title: "Inquiry", desc: "You provide details about your shipment and requirements" },
              { number: "02", title: "Planning", desc: "We create a customized inspection and service plan" },
              { number: "03", title: "Execution", desc: "Our team performs inspections and services with precision" },
              { number: "04", title: "Reporting", desc: "You receive detailed reports and documentation" },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-card rounded-xl border border-border p-8 text-center h-full flex flex-col">
                  <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/60">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-primary text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl border border-border p-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Transparent Pricing</h2>
            <p className="text-foreground/60 mb-6">
              Our pricing is competitive and transparent. Costs vary based on shipment type, size, complexity, and location. We provide detailed quotes upon request with no hidden fees. Contact us for a customized proposal tailored to your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground border-t border-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-balance">Ready to Ensure Quality?</h2>
            <p className="text-lg opacity-90 text-pretty">
              Let's discuss which services are right for your supply chain
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

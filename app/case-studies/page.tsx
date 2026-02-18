import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Star, Quote, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Case Studies & Success Stories | Zoe Trade Assurance',
  description: 'Real examples of how we help businesses ensure quality and optimize their supply chains.',
};

export default function CaseStudies() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[50vh] pt-32 pb-16 bg-gradient-to-br from-background via-background to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight text-balance">
              Success Stories & Case Studies
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed text-pretty max-w-3xl mx-auto">
              Real examples of how we've helped businesses ensure quality and optimize their supply chains
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Case Study 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center bg-card rounded-xl border border-border p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                    Coffee Imports
                  </span>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Ethiopian Coffee Exporter Reduces Quality Rejection by 95%
                  </h3>
                  <p className="text-lg text-foreground/60 leading-relaxed text-pretty">
                    A major Ethiopian coffee exporter was facing consistently high rejection rates (12-15%) from international buyers due to inconsistent quality grading. They partnered with Zoe Trade Assurance to implement rigorous pre-export quality inspections.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                  <p className="text-sm font-semibold text-primary mb-3">RESULTS</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/60">Quality Rejection Rate</span>
                      <span className="font-bold text-primary">12% → 0.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/60">Customer Satisfaction</span>
                      <span className="font-bold text-primary">78% → 96%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/60">Revenue Increase</span>
                      <span className="font-bold text-primary">+34% YoY</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground/60 mb-3">SOLUTION IMPLEMENTED</p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex gap-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Pre-shipment quality inspection protocol</span>
                    </li>
                    <li className="flex gap-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Standardized grading criteria aligned with buyer specs</span>
                    </li>
                    <li className="flex gap-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Monthly quality reports and trend analysis</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-64 md:h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                  <p className="text-foreground/40 font-semibold">Quality Improvements</p>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center bg-card rounded-xl border border-border p-8 md:p-12">
              <div className="h-64 md:h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center order-2 md:order-1">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                  <p className="text-foreground/40 font-semibold">Efficiency Gains</p>
                </div>
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <div>
                  <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                    Textile Imports
                  </span>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Textile Importer Streamlines Customs Clearance Process
                  </h3>
                  <p className="text-lg text-foreground/60 leading-relaxed text-pretty">
                    A textile import company was experiencing 2-3 week delays in customs clearance due to incomplete documentation and compliance issues. We implemented a comprehensive documentation management system.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                  <p className="text-sm font-semibold text-primary mb-3">RESULTS</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/60">Clearance Time</span>
                      <span className="font-bold text-primary">14 days → 2 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/60">Documentation Errors</span>
                      <span className="font-bold text-primary">-100%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/60">Cost Savings</span>
                      <span className="font-bold text-primary">-42% Annually</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground/60 mb-3">SOLUTION IMPLEMENTED</p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex gap-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Standardized documentation templates</span>
                    </li>
                    <li className="flex gap-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Compliance verification checklist</span>
                    </li>
                    <li className="flex gap-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Direct customs liaison service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center bg-card rounded-xl border border-border p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                    Electronics Import
                  </span>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Electronics Importer Implements Supply Chain Transparency
                  </h3>
                  <p className="text-lg text-foreground/60 leading-relaxed text-pretty">
                    An electronics importer needed real-time visibility into their supply chain from manufacturing through customs clearance. We implemented a comprehensive tracking and reporting system.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                  <p className="text-sm font-semibold text-primary mb-3">RESULTS</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/60">Visibility Improvement</span>
                      <span className="font-bold text-primary">+89%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/60">On-Time Delivery</span>
                      <span className="font-bold text-primary">94% → 99%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/60">Quality Issues</span>
                      <span className="font-bold text-primary">-76%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground/60 mb-3">SOLUTION IMPLEMENTED</p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex gap-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Real-time shipment tracking system</span>
                    </li>
                    <li className="flex gap-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Automated quality inspection reports</span>
                    </li>
                    <li className="flex gap-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Daily updates to stakeholders</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-64 md:h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                  <p className="text-foreground/40 font-semibold">Supply Chain Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">What Our Clients Say</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-pretty">
              Hear directly from businesses we've partnered with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Yohannes Gebre",
                title: "Director, Ethiopian Coffee Exports Ltd",
                company: "Coffee Exporter",
                testimonial: "Zoe Trade Assurance transformed our quality control process. Our rejection rates dropped dramatically and buyer satisfaction increased significantly. Highly recommended!",
              },
              {
                name: "Amara Kebede",
                title: "Supply Chain Manager, Addis Textiles",
                company: "Textile Importer",
                testimonial: "The documentation and customs clearance support saved us weeks of delays and thousands in costs. Professional, reliable, and always responsive to our needs.",
              },
              {
                name: "Adnan Mohammed",
                title: "Operations Lead, Tech Imports Ethiopia",
                company: "Electronics Importer",
                testimonial: "Real-time visibility into our supply chain was a game-changer. We now have complete transparency from factory to our warehouse. Outstanding service!",
              },
              {
                name: "Selam Mengesha",
                title: "Founder, Premium Spice Traders",
                company: "Spice Distributor",
                testimonial: "Their quality grading expertise ensures we consistently deliver premium products. They understand our market and deliver exceptional value.",
              },
              {
                name: "Bekele Teshome",
                title: "CEO, East Africa Trading Co",
                company: "General Trader",
                testimonial: "5 years of partnership and counting. They're not just a service provider—they're a strategic partner invested in our success.",
              },
              {
                name: "Zara Hailu",
                title: "Logistics Manager, Fashion Imports",
                company: "Fashion Importer",
                testimonial: "Reliable, professional, and always going the extra mile. They've become an integral part of our supply chain team.",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-card rounded-xl border border-border p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed text-pretty">"{testimonial.testimonial}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.title}</p>
                  <p className="text-xs text-primary mt-1">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "500+", label: "Shipments Inspected" },
              { stat: "98%", label: "Quality Compliance" },
              { stat: "50+", label: "Active Clients" },
              { stat: "15+", label: "Years of Experience" },
            ].map((item, idx) => (
              <div key={idx} className="text-center bg-card rounded-xl border border-border p-8">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{item.stat}</p>
                <p className="text-foreground/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground border-t border-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-balance">Ready to Be Our Next Success Story?</h2>
            <p className="text-lg opacity-90 text-pretty">
              Let's discuss how we can help your business thrive
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

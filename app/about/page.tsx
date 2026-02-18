import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Award, Users, Globe, Zap } from 'lucide-react';

export const metadata = {
  title: 'About Zoe Trade Assurance | Our Mission & Team',
  description: 'Learn about our mission to provide quality assurance and supply chain solutions with expertise and integrity.',
};

export default function About() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[60vh] pt-32 pb-16 bg-gradient-to-br from-background via-background to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight text-balance">
              About Zoe Trade Assurance
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed text-pretty max-w-3xl mx-auto">
              A quality assurance agency dedicated to protecting your interests and ensuring excellence in every transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-foreground/60 leading-relaxed text-pretty">
                  To represent importer interests on the ground with integrity, expertise, and unwavering commitment to quality. We ensure that every shipment meets the highest standards and every transaction is handled with precision and care.
                </p>
              </div>
              <div className="bg-primary/10 rounded-lg border border-primary/20 p-6">
                <p className="text-foreground font-semibold italic">
                  "We're not just checking boxes—we're protecting partnerships and building trust through diligent, reliable service."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-foreground/60 leading-relaxed text-pretty">
                  To become the most trusted quality assurance partner in international trade, recognized for our expertise, transparency, and unwavering commitment to our clients' success.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Innovation</p>
                    <p className="text-sm text-foreground/60">Continuous improvement in processes and technology</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Global Reach</p>
                    <p className="text-sm text-foreground/60">Serving clients across continents with expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Our Core Values</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-pretty">
              The principles that guide every decision and action we take
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Excellence",
                desc: "We maintain the highest standards in everything we do, from inspections to documentation"
              },
              {
                icon: Users,
                title: "Integrity",
                desc: "Complete transparency and honesty in all our dealings with clients and partners"
              },
              {
                icon: Globe,
                title: "Partnership",
                desc: "We view our clients as partners in success, invested in their growth and outcomes"
              },
              {
                icon: Zap,
                title: "Reliability",
                desc: "Consistent, dependable service you can count on every single time"
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-foreground/60">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Leadership Team</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-pretty">
              Experienced professionals committed to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Kebede",
                role: "Founder & CEO",
                bio: "20+ years of international trade and quality assurance experience"
              },
              {
                name: "Abebe Tekle",
                role: "Operations Director",
                bio: "Expert in logistics management and supply chain optimization"
              },
              {
                name: "Marta Hailesilassie",
                role: "Quality Assurance Manager",
                bio: "Certified quality inspector with expertise in international standards"
              },
            ].map((member, idx) => (
              <div key={idx} className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-colors">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-foreground/60">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Certifications */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Credentials & Certifications</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-pretty">
              Industry recognized and certified for quality and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="font-bold text-lg text-foreground mb-4">Certifications</h3>
              <ul className="space-y-3">
                {[
                  "ISO 9001:2015 - Quality Management",
                  "ISO 14001:2015 - Environmental Management",
                  "FAPSI - Federation of Agents in the Port Services",
                  "Authorized Quality Inspector - International Standards"
                ].map((cert, idx) => (
                  <li key={idx} className="flex gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="font-bold text-lg text-foreground mb-4">By The Numbers</h3>
              <div className="space-y-4">
                {[
                  { number: "15+", label: "Years in Business" },
                  { number: "500+", label: "Satisfied Clients" },
                  { number: "10,000+", label: "Shipments Inspected" },
                  { number: "98%", label: "Quality Compliance Rate" }
                ].map((stat, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-foreground/60">{stat.label}</span>
                    <span className="text-2xl font-bold text-primary">{stat.number}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground border-t border-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-balance">Join Our Growing Family of Satisfied Clients</h2>
            <p className="text-lg opacity-90 text-pretty">
              Experience the difference that professional quality assurance can make
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

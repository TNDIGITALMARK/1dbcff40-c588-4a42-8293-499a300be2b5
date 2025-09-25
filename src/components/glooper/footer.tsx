'use client';

import Link from 'next/link';

export function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '#about', label: 'About' }
  ];

  const services = [
    'SEO Optimization',
    'Online Advertising',
    'Business Consulting',
    'Content Marketing'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold">Glooper Digital</span>
            </div>
            <p className="text-sm opacity-80">
              Dedicated to helping Small and Medium Size Business grow using proven Digital Marketing.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-accent hover:text-accent/80">
                Facebook
              </Link>
              <Link href="#" className="text-accent hover:text-accent/80">
                LinkedIn
              </Link>
              <Link href="#" className="text-accent hover:text-accent/80">
                Twitter
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm opacity-80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>📞 Contact: (555) 123-4567</p>
              <p>📧 Email: hello@glooperdigital.com</p>
              <p>💬 Business Hours: Mon-Fri 9AM-6PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Glooper Digital. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
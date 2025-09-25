'use client';

import { ServiceCard } from './service-card';
import { Rocket, Target, TrendingUp } from 'lucide-react';

export function ServicesOverview() {
  const services = [
    {
      icon: <Rocket className="w-8 h-8 text-accent" />,
      title: 'Online Advertising',
      description: 'Targeted PPC campaigns across Google, Facebook, and other platforms to drive qualified traffic and conversions.',
      features: [
        'Google Ads management',
        'Facebook & Instagram advertising',
        'Landing page optimization',
        'Conversion tracking & analytics'
      ],
      badge: 'PPC & Ads'
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies to improve your search rankings and increase organic visibility.',
      features: [
        'Keyword research & strategy',
        'On-page optimization',
        'Technical SEO audit',
        'Content optimization',
        'Local SEO for SMBs'
      ],
      badge: 'Most Popular',
      popular: true
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: 'Business Consulting',
      description: 'Strategic digital marketing consulting to align your online presence with business goals.',
      features: [
        'Digital strategy planning',
        'Marketing automation',
        'Performance analytics',
        'Growth optimization'
      ],
      badge: 'Strategy'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">OUR SERVICES</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive digital marketing solutions tailored to help small and medium businesses thrive online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              badge={service.badge}
              popular={service.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
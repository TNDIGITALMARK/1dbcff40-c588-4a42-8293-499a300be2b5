'use client';

import { StatCounter } from './stat-counter';
import { Users, TrendingUp, Award, DollarSign } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      number: 250,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Businesses we\'ve helped grow'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      number: 150,
      suffix: '%',
      label: 'ROI Increase',
      description: 'Average return on investment'
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      number: 98,
      suffix: '%',
      label: 'Success Rate',
      description: 'Client satisfaction score'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-accent" />,
      number: 2,
      suffix: 'M+',
      prefix: '$',
      label: 'Revenue Generated',
      description: 'For our clients combined'
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">WHY CHOOSE US?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Our proven track record speaks for itself. Here are the results we've achieved for businesses like yours.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                {stat.icon}
              </div>

              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">
                  {stat.prefix}{stat.number}{stat.suffix}
                </div>
                <h4 className="font-semibold text-lg">{stat.label}</h4>
                <p className="text-sm opacity-80">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
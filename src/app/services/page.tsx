import { Metadata } from 'next';
import { Navigation } from '@/components/glooper/navigation';
import { ServiceCard } from '@/components/glooper/service-card';
import { Footer } from '@/components/glooper/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Target, TrendingUp, CheckCircle, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services - Glooper Digital',
  description: 'Comprehensive digital marketing services for SMBs - SEO, PPC, and Strategic Consulting',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Rocket className="w-8 h-8 text-accent" />,
      title: 'Online Advertising',
      description: 'Drive qualified traffic and maximize conversions with expertly managed PPC campaigns across all major platforms.',
      features: [
        'Google Ads & Shopping campaigns',
        'Facebook, Instagram & LinkedIn ads',
        'Display & remarketing campaigns',
        'Landing page optimization',
        'A/B testing & optimization',
        'Detailed reporting & analytics'
      ],
      badge: 'PPC & Paid Ads'
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: 'SEO Optimization',
      description: 'Boost your organic search rankings and drive long-term, sustainable traffic growth through comprehensive SEO strategies.',
      features: [
        'Complete SEO audit & strategy',
        'Keyword research & targeting',
        'On-page optimization',
        'Technical SEO improvements',
        'Local SEO for SMBs',
        'Content optimization',
        'Link building campaigns',
        'Monthly performance reports'
      ],
      badge: 'Most Popular',
      popular: true
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: 'Business Consulting',
      description: 'Strategic digital marketing consulting to align your online presence with business goals and maximize ROI.',
      features: [
        'Digital strategy development',
        'Marketing automation setup',
        'Performance analytics & insights',
        'Growth optimization plans',
        'Competitor analysis',
        'ROI tracking & reporting'
      ],
      badge: 'Strategy & Growth'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 997,
      period: 'month',
      description: 'Perfect for small businesses getting started with digital marketing',
      features: [
        'Basic SEO optimization',
        'Google Ads management ($1,500 ad spend)',
        'Monthly performance reports',
        'Email support',
        'Landing page optimization'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: 1997,
      period: 'month',
      description: 'Comprehensive marketing solution for growing businesses',
      features: [
        'Advanced SEO strategy',
        'Multi-platform PPC campaigns',
        'Social media advertising',
        'Marketing automation',
        'Weekly reporting calls',
        'Priority support',
        'Custom landing pages'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 3997,
      period: 'month',
      description: 'Full-service marketing for established businesses',
      features: [
        'Complete digital strategy',
        'Unlimited campaigns',
        'Dedicated account manager',
        'Custom reporting dashboard',
        'Advanced analytics',
        'Growth consulting',
        'White-label solutions'
      ],
      popular: false
    }
  ];

  const process = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business, goals, and target audience to create a tailored strategy.'
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: 'Implementation',
      description: 'Our experts implement and optimize your campaigns across all relevant platforms and channels.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: 'Monitor & Optimize',
      description: 'We continuously monitor performance and optimize for better results and higher ROI.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: 'Report & Scale',
      description: 'Regular reporting and scaling successful strategies to drive even greater growth.'
    }
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold text-primary mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive digital marketing solutions designed to help your business grow,
              attract more customers, and increase revenue through proven strategies.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
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

        {/* Process Section */}
        <section className="py-20 px-4 bg-gray-50/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Our Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven 4-step methodology that delivers consistent results for our clients
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <Card key={index} className="text-center glooper-card-hover">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Pricing Plans</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that fits your business needs and budget
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`glooper-card-hover relative ${plan.popular ? 'border-accent border-2' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="text-center">
                    <h3 className="text-2xl font-semibold text-primary">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">${plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className={`w-full ${plan.popular ? 'btn-glooper-primary' : 'btn-glooper-secondary'}`} size="lg">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss which service package is right for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6">
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 px-8 py-6">
                View Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
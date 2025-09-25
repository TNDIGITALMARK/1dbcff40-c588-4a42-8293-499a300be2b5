import { Metadata } from 'next';
import { Navigation } from '@/components/glooper/navigation';
import { TestimonialCard } from '@/components/glooper/testimonial-card';
import { Footer } from '@/components/glooper/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, Users, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies - Glooper Digital',
  description: 'Real client success stories and results from our digital marketing campaigns',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      company: 'TechFlow Solutions',
      industry: 'SaaS',
      challenge: 'Low online visibility and struggling to generate qualified leads for their B2B software platform.',
      solution: 'Implemented comprehensive SEO strategy, launched targeted Google Ads campaigns, and optimized their conversion funnel.',
      results: [
        { metric: 'Organic Traffic', improvement: '+285%', period: '6 months' },
        { metric: 'Lead Generation', improvement: '+150%', period: '4 months' },
        { metric: 'Revenue Growth', improvement: '+$280K', period: '8 months' },
        { metric: 'Cost per Lead', improvement: '-45%', period: '3 months' }
      ],
      testimonial: {
        quote: 'Glooper Digital transformed our online presence. We went from struggling to find clients to having a consistent pipeline of qualified leads. The ROI has been incredible.',
        author: 'Sarah Johnson',
        role: 'CEO',
        company: 'TechFlow Solutions'
      },
      tags: ['SEO', 'Google Ads', 'Lead Generation']
    },
    {
      company: 'Urban Fitness Studio',
      industry: 'Fitness & Wellness',
      challenge: 'Local gym facing decreased membership and low online engagement during competitive market conditions.',
      solution: 'Developed local SEO strategy, created engaging social media campaigns, and launched Google Ads for local fitness searches.',
      results: [
        { metric: 'Local Search Rankings', improvement: 'Top 3', period: '3 months' },
        { metric: 'New Memberships', improvement: '+120%', period: '6 months' },
        { metric: 'Social Engagement', improvement: '+200%', period: '4 months' },
        { metric: 'Monthly Revenue', improvement: '+$45K', period: '6 months' }
      ],
      testimonial: {
        quote: 'The team helped us completely transform our online presence. We now dominate local fitness searches and have a waiting list for new members!',
        author: 'Mike Rodriguez',
        role: 'Owner',
        company: 'Urban Fitness Studio'
      },
      tags: ['Local SEO', 'Social Media', 'Google Ads']
    },
    {
      company: 'Artisan Coffee Co.',
      industry: 'Food & Beverage',
      challenge: 'E-commerce coffee retailer needed to increase online sales and compete with major coffee brands.',
      solution: 'Optimized product pages for SEO, launched targeted Facebook and Instagram ads, implemented email marketing automation.',
      results: [
        { metric: 'Online Sales', improvement: '+175%', period: '5 months' },
        { metric: 'ROAS', improvement: '4.2x', period: 'Average' },
        { metric: 'Email Revenue', improvement: '+$50K', period: '6 months' },
        { metric: 'Customer LTV', improvement: '+65%', period: '4 months' }
      ],
      testimonial: {
        quote: 'Working with Glooper Digital was a game-changer. Our online sales have never been stronger, and we\'re finally competing with the big coffee brands.',
        author: 'Emma Chen',
        role: 'Marketing Director',
        company: 'Artisan Coffee Co.'
      },
      tags: ['E-commerce', 'Social Media Ads', 'Email Marketing']
    }
  ];

  const testimonials = [
    {
      quote: 'The results speak for themselves. Our organic traffic increased by 300% and we\'re now the top result for our main keywords. The team is professional, knowledgeable, and delivers on their promises.',
      author: 'David Thompson',
      company: 'Thompson Legal',
      role: 'Managing Partner',
      rating: 5
    },
    {
      quote: 'Exceptional service and outstanding results. They helped us launch our first digital marketing campaigns and the ROI exceeded all expectations. Highly recommended!',
      author: 'Lisa Martinez',
      company: 'Creative Designs Inc.',
      role: 'Founder & CEO',
      rating: 5
    },
    {
      quote: 'Professional, reliable, and results-driven. Glooper Digital helped us double our online revenue in just 4 months. The best marketing investment we\'ve ever made.',
      author: 'James Wilson',
      company: 'Wilson Manufacturing',
      role: 'Sales Director',
      rating: 5
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
              Client <span className="text-accent">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real results from real businesses. See how our digital marketing strategies
              have transformed our clients' online presence and driven measurable growth.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl space-y-20">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Left: Company Info & Challenge */}
                    <div className="p-8 lg:p-12">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-accent/10 text-accent">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <h2 className="text-3xl font-bold text-primary mb-2">{study.company}</h2>
                      <p className="text-muted-foreground mb-6">{study.industry}</p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-lg text-primary mb-2">Challenge</h4>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-lg text-primary mb-2">Solution</h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Results */}
                    <div className="p-8 lg:p-12 bg-gray-50/50">
                      <h4 className="font-semibold text-2xl text-primary mb-6">Results Achieved</h4>

                      <div className="grid grid-cols-2 gap-6 mb-8">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center">
                            <div className="text-3xl font-bold text-accent mb-1">
                              {result.improvement}
                            </div>
                            <div className="font-semibold text-primary mb-1">
                              {result.metric}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              in {result.period}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="bg-white p-6 rounded-lg border">
                        <blockquote className="text-gray-700 mb-4 italic">
                          "{study.testimonial.quote}"
                        </blockquote>
                        <div className="text-sm">
                          <div className="font-semibold text-primary">{study.testimonial.author}</div>
                          <div className="text-muted-foreground">
                            {study.testimonial.role}, {study.testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Consistent results across all industries and business sizes
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent mb-2">avg 180%</div>
                <h4 className="font-semibold text-lg mb-1">Revenue Increase</h4>
                <p className="text-sm opacity-80">Across all clients</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent mb-2">4.2x</div>
                <h4 className="font-semibold text-lg mb-1">Average ROAS</h4>
                <p className="text-sm opacity-80">Return on ad spend</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <h4 className="font-semibold text-lg mb-1">Client Satisfaction</h4>
                <p className="text-sm opacity-80">Would recommend us</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent mb-2">$5M+</div>
                <h4 className="font-semibold text-lg mb-1">Revenue Generated</h4>
                <p className="text-sm opacity-80">For our clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 px-4 bg-gray-50/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from the businesses we've helped grow
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  company={testimonial.company}
                  role={testimonial.role}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="glooper-gradient text-white border-0 shadow-xl">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-bold mb-4">
                  Ready to Join Our Success Stories?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Let's discuss how we can help you achieve similar results for your business
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-primary hover:bg-gray-100 border-white px-8 py-6 text-lg font-semibold"
                  >
                    Schedule Your Free Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold"
                  >
                    View Our Services
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm opacity-80">
                    Free strategy session • No obligation • Results in 30-60 days
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function HeroSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
              UNLOCK YOUR
              <br />
              <span className="text-accent">DIGITAL POTENTIAL</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              We help small and medium businesses grow their online presence with proven digital marketing strategies that drive real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-glooper-primary text-lg px-8 py-6">
                GET A QUOTE
              </Button>
              <Button variant="outline" className="btn-glooper-secondary text-lg px-8 py-6">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Right Content - Illustration Placeholder */}
          <div className="relative">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-2 border-primary/10 shadow-xl">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">Digital Growth</h3>
                  <p className="text-muted-foreground">
                    Transform your business with data-driven marketing strategies that deliver measurable growth.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="glooper-stat-counter">150%</div>
                    <p className="text-sm text-muted-foreground">ROI Increase</p>
                  </div>
                  <div className="text-center">
                    <div className="glooper-stat-counter">2.5x</div>
                    <p className="text-sm text-muted-foreground">Lead Growth</p>
                  </div>
                  <div className="text-center">
                    <div className="glooper-stat-counter">90%</div>
                    <p className="text-sm text-muted-foreground">Client Retention</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
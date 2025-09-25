'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function CtaSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="glooper-gradient text-white border-0 shadow-xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              READY TO GROW YOUR BUSINESS?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve your digital marketing goals and drive real results for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-gray-100 border-white px-8 py-6 text-lg font-semibold"
              >
                START YOUR PROJECT TODAY
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold"
              >
                Schedule Consultation
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm opacity-80">
                Free consultation • No commitment • Get results in 30 days
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
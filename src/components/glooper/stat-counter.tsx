'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatCounterProps {
  icon: React.ReactNode;
  number: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

export function StatCounter({ icon, number, suffix = '', prefix = '', label, description }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const timer = setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = number / steps;
      const stepTime = duration / steps;

      let currentStep = 0;
      const counter = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.floor(stepValue * currentStep), number));

        if (currentStep >= steps) {
          clearInterval(counter);
          setHasAnimated(true);
        }
      }, stepTime);

      return () => clearInterval(counter);
    }, 100);

    return () => clearTimeout(timer);
  }, [number, hasAnimated]);

  return (
    <Card className="text-center h-full glooper-card-hover">
      <CardContent className="p-6 space-y-4">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl flex items-center justify-center">
          {icon}
        </div>

        <div className="space-y-2">
          <div className={`glooper-stat-counter ${hasAnimated ? 'animate-countUp' : ''}`}>
            {prefix}{count}{suffix}
          </div>

          <h4 className="font-semibold text-lg text-primary">{label}</h4>

          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
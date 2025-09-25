'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  badge?: string;
  popular?: boolean;
}

export function ServiceCard({ icon, title, description, features, badge, popular = false }: ServiceCardProps) {
  return (
    <Card className={`glooper-card-hover relative h-full ${popular ? 'border-accent border-2' : 'border-border'}`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white">
          Most Popular
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-primary">{title}</h3>
        {badge && (
          <Badge variant="secondary" className="w-fit mx-auto">
            {badge}
          </Badge>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Button className="w-full btn-glooper-primary" size="lg">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}
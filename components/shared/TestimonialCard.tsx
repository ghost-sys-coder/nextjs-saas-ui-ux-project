import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="italic">&ldquo;{quote}&rdquo;</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">- {author}</p>
      </CardFooter>
    </Card>
  );
}
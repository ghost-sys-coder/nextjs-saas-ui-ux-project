import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

interface FeaturedCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeaturedCardProps> = ({ title, description, icon }) => {
    return (
        <Card className="relative overflow-hidden transition-all hover:shadow-md">
            <CardHeader>
                {icon}
                <CardTitle className="mt-4">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    )
}

export default FeatureCard
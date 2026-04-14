import React from 'react';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';

export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  status: 'active' | 'pending' | 'sold';
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const statusConfig = {
    active: { label: 'Active', variant: 'success' as const },
    pending: { label: 'Pending', variant: 'secondary' as const },
    sold: { label: 'Sold', variant: 'outline' as const },
  };

  const status = statusConfig[property.status];

  return (
    <Card className="overflow-hidden group cursor-pointer transition-all hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={status.variant} className="shadow-sm">
            {status.label}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-900 backdrop-blur-sm font-bold shadow-sm">
            {formatPrice(property.price)}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-1 mb-1">{property.title}</h3>
        <div className="flex items-start text-gray-500 text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1 shrink-0 mt-0.5" />
          <span className="line-clamp-1">{property.address}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between text-sm text-gray-600 border-t border-gray-100 mt-2">
        <div className="flex items-center mt-3">
          <Bed className="h-4 w-4 mr-1.5 text-gray-400" />
          <span>{property.beds}</span>
        </div>
        <div className="flex items-center mt-3">
          <Bath className="h-4 w-4 mr-1.5 text-gray-400" />
          <span>{property.baths}</span>
        </div>
        <div className="flex items-center mt-3">
          <Square className="h-4 w-4 mr-1.5 text-gray-400" />
          <span>{property.sqft.toLocaleString()} sqft</span>
        </div>
      </CardFooter>
    </Card>
  );
}

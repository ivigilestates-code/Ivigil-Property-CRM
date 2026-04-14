import React from 'react';
import { PropertyCard, Property } from '../components/PropertyCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Search, Filter, Plus } from 'lucide-react';

const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Apartment in Downtown',
    address: '123 Main St, Cityville, CA 90210',
    price: 450000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    status: 'active',
  },
  {
    id: '2',
    title: 'Luxury Villa with Pool',
    address: '456 Palm Ave, Beachwood, FL 33139',
    price: 1250000,
    beds: 4,
    baths: 3.5,
    sqft: 3500,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    status: 'pending',
  },
  {
    id: '3',
    title: 'Cozy Suburban Home',
    address: '789 Oak Ln, Suburbia, TX 75001',
    price: 320000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    status: 'sold',
  },
  {
    id: '4',
    title: 'Downtown Penthouse',
    address: '101 Skyline Blvd, Cityville, CA 90210',
    price: 850000,
    beds: 3,
    baths: 2.5,
    sqft: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1e525044c7?auto=format&fit=crop&q=80&w=800',
    status: 'active',
  },
  {
    id: '5',
    title: 'Waterfront Condo',
    address: '202 Marina Dr, Beachwood, FL 33139',
    price: 650000,
    beds: 2,
    baths: 2,
    sqft: 1400,
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800',
    status: 'active',
  },
  {
    id: '6',
    title: 'Historic Townhouse',
    address: '303 Heritage Way, Oldtown, MA 02108',
    price: 550000,
    beds: 3,
    baths: 2,
    sqft: 1900,
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800',
    status: 'pending',
  }
];

export function Properties() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Properties</h1>
          <p className="text-gray-500">Manage your property listings.</p>
        </div>
        <Button className="shrink-0">
          <Plus className="h-4 w-4 mr-2" />
          Add Property
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input 
            type="search" 
            placeholder="Search by address, city, or zip..." 
            className="pl-9"
          />
        </div>
        <Button variant="outline" className="shrink-0">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {MOCK_PROPERTIES.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

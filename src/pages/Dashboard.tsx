import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Home, Users, TrendingUp, DollarSign } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';

const MOCK_PROPERTIES = [
  {
    id: '1',
    title: 'Modern Apartment in Downtown',
    address: '123 Main St, Cityville, CA 90210',
    price: 450000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    status: 'active' as const,
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
    status: 'pending' as const,
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
    status: 'sold' as const,
  }
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here's an overview of your properties and leads.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Properties" 
          value="124" 
          icon={<Home className="h-4 w-4 text-gray-500" />} 
          trend="+4 from last month" 
        />
        <StatCard 
          title="Active Leads" 
          value="42" 
          icon={<Users className="h-4 w-4 text-gray-500" />} 
          trend="+12 from last month" 
        />
        <StatCard 
          title="Total Revenue" 
          value="$2.4M" 
          icon={<DollarSign className="h-4 w-4 text-gray-500" />} 
          trend="+18% from last month" 
        />
        <StatCard 
          title="Conversion Rate" 
          value="4.3%" 
          icon={<TrendingUp className="h-4 w-4 text-gray-500" />} 
          trend="+1.2% from last month" 
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Properties</CardTitle>
            <CardDescription>
              You have 3 properties added this week.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {MOCK_PROPERTIES.slice(0, 2).map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Leads</CardTitle>
            <CardDescription>
              New leads assigned to you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Sarah Jenkins', email: 'sarah.j@example.com', status: 'Hot', time: '2h ago' },
                { name: 'Michael Chen', email: 'm.chen@example.com', status: 'Warm', time: '5h ago' },
                { name: 'David Rodriguez', email: 'david.r@example.com', status: 'Cold', time: '1d ago' },
                { name: 'Emily Watson', email: 'emily.w@example.com', status: 'Hot', time: '1d ago' },
              ].map((lead, i) => (
                <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-700">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{lead.name}</p>
                      <p className="text-xs text-gray-500">{lead.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={cn(
                      "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                      lead.status === 'Hot' ? "bg-red-100 text-red-700" :
                      lead.status === 'Warm' ? "bg-yellow-100 text-yellow-700" :
                      "bg-gray-100 text-gray-700"
                    )}>
                      {lead.status}
                    </span>
                    <p className="mt-1 text-xs text-gray-500">{lead.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend }: { title: string; value: string; icon: React.ReactNode; trend: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <p className="text-xs text-gray-500 mt-1">
          {trend}
        </p>
      </CardContent>
    </Card>
  );
}

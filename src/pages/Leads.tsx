import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Plus, MoreHorizontal, Phone, Mail } from 'lucide-react';
import { Badge } from '../components/ui/badge';

const PIPELINE_STAGES = [
  { id: 'new', title: 'New Leads', count: 3 },
  { id: 'contacted', title: 'Contacted', count: 2 },
  { id: 'showing', title: 'Showing', count: 1 },
  { id: 'offer', title: 'Offer Made', count: 1 },
];

const MOCK_LEADS = [
  { id: '1', name: 'Sarah Jenkins', email: 'sarah.j@example.com', phone: '(555) 123-4567', stage: 'new', budget: '$400k - $500k', interest: 'Downtown' },
  { id: '2', name: 'Michael Chen', email: 'm.chen@example.com', phone: '(555) 987-6543', stage: 'new', budget: '$800k+', interest: 'Suburbs' },
  { id: '3', name: 'David Rodriguez', email: 'david.r@example.com', phone: '(555) 456-7890', stage: 'new', budget: '$300k - $400k', interest: 'Any' },
  { id: '4', name: 'Emily Watson', email: 'emily.w@example.com', phone: '(555) 234-5678', stage: 'contacted', budget: '$600k - $700k', interest: 'Waterfront' },
  { id: '5', name: 'James Wilson', email: 'j.wilson@example.com', phone: '(555) 876-5432', stage: 'contacted', budget: '$1M+', interest: 'Luxury' },
  { id: '6', name: 'Amanda Lee', email: 'amanda.lee@example.com', phone: '(555) 345-6789', stage: 'showing', budget: '$450k - $550k', interest: 'Downtown' },
  { id: '7', name: 'Robert Taylor', email: 'r.taylor@example.com', phone: '(555) 765-4321', stage: 'offer', budget: '$320k', interest: 'Suburbs' },
];

export function Leads() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Lead Pipeline</h1>
          <p className="text-gray-500">Manage your leads and track their progress.</p>
        </div>
        <Button className="shrink-0">
          <Plus className="h-4 w-4 mr-2" />
          Add Lead
        </Button>
      </div>

      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max h-full">
          {PIPELINE_STAGES.map(stage => (
            <div key={stage.id} className="w-80 flex flex-col bg-gray-50/50 rounded-xl border border-gray-200/60 p-3">
              <div className="flex items-center justify-between mb-3 px-1">
                <h3 className="font-semibold text-gray-900">{stage.title}</h3>
                <Badge variant="secondary" className="bg-gray-200 text-gray-700">{stage.count}</Badge>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                {MOCK_LEADS.filter(lead => lead.stage === stage.id).map(lead => (
                  <Card key={lead.id} className="cursor-grab active:cursor-grabbing hover:border-blue-300 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{lead.name}</h4>
                        <Button variant="ghost" size="icon" className="h-6 w-6 -mr-2 -mt-2 text-gray-400">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Mail className="h-3.5 w-3.5 mr-2 text-gray-400" />
                          <span className="truncate">{lead.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-3.5 w-3.5 mr-2 text-gray-400" />
                          <span>{lead.phone}</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                        <span className="font-medium text-gray-900">{lead.budget}</span>
                        <span className="text-gray-500 bg-gray-100 px-2 py-1 rounded-md">{lead.interest}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

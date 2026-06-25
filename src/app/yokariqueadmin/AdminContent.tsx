'use client';

import { useState, useEffect } from 'react';
import { Trash2, Mail, Phone, MapPin, Calendar, MessageSquare, RefreshCw } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface QuoteRequest {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  barrio: string;
  mensaje: string;
  created_at: string;
}

const serviceLabels: Record<string, string> = {
  limpieza: 'Deep Cleaning',
  pintura: 'Painting',
  remodelacion: 'Renovation',
  'make-ready': 'Make-Ready',
  otro: 'Other',
};

export default function AdminContent() {
  const [requests, setRequests] = useState<QuoteRequest[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('quote_requests')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) setRequests(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const deleteRequest = async (id: string) => {
    await supabase.from('quote_requests').delete().eq('id', id);
    setRequests((prev) => prev.filter((r) => r.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const clearAll = async () => {
    const ids = requests.map((r) => r.id);
    if (ids.length > 0) {
      await supabase.from('quote_requests').delete().in('id', ids);
    }
    setRequests([]);
    setSelectedId(null);
  };

  const selected = requests.find((r) => r.id === selectedId);

  return (
    <div className="min-h-screen bg-neutral-950 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Quote Requests</h1>
            <p className="text-white/40 text-sm mt-1">
              {requests.length} message{requests.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchRequests}
              className="p-2 text-white/40 hover:text-white border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
              title="Refresh"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            {requests.length > 0 && (
              <button
                onClick={clearAll}
                className="px-4 py-2 text-sm text-red-400 border border-red-400/20 rounded-lg hover:bg-red-400/10 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        {requests.length === 0 ? (
          <div className="text-center py-20">
            <MessageSquare className="w-12 h-12 text-white/10 mx-auto mb-4" />
            <p className="text-white/30 text-lg">No quote requests yet</p>
            <p className="text-white/15 text-sm mt-1">Messages from the contact form will appear here</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 space-y-2 max-h-[70vh] overflow-y-auto pr-2">
              {requests.map((req) => (
                <button
                  key={req.id}
                  onClick={() => setSelectedId(req.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                    selectedId === req.id
                      ? 'border-primary-500/30 bg-primary-500/5'
                      : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-white font-medium text-sm truncate">{req.nombre}</p>
                      <p className="text-white/40 text-xs mt-0.5 truncate">{req.email}</p>
                    </div>
                    <span className="text-[10px] text-white/20 shrink-0">
                      {new Date(req.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <p className="text-white/30 text-xs mt-2 line-clamp-2">{req.mensaje}</p>
                  <span className="inline-block mt-2 text-[10px] text-primary-400 bg-primary-400/10 px-2 py-0.5 rounded-full">
                    {serviceLabels[req.servicio] || req.servicio}
                  </span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-3">
              {selected ? (
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-white">{selected.nombre}</h2>
                      <span className="inline-block mt-1 text-xs text-primary-400 bg-primary-400/10 px-2 py-0.5 rounded-full">
                        {serviceLabels[selected.servicio] || selected.servicio}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteRequest(selected.id)}
                      className="p-2 text-white/30 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
                      <Mail className="w-4 h-4 text-white/30 shrink-0" />
                      <div>
                        <p className="text-[10px] text-white/30 uppercase tracking-wider">Email</p>
                        <a href={`mailto:${selected.email}`} className="text-sm text-white/80 hover:text-primary-400 transition-colors">
                          {selected.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
                      <Phone className="w-4 h-4 text-white/30 shrink-0" />
                      <div>
                        <p className="text-[10px] text-white/30 uppercase tracking-wider">Phone</p>
                        <a href={`tel:${selected.telefono}`} className="text-sm text-white/80 hover:text-primary-400 transition-colors">
                          {selected.telefono}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
                      <MapPin className="w-4 h-4 text-white/30 shrink-0" />
                      <div>
                        <p className="text-[10px] text-white/30 uppercase tracking-wider">Area</p>
                        <p className="text-sm text-white/80">{selected.barrio}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
                      <Calendar className="w-4 h-4 text-white/30 shrink-0" />
                      <div>
                        <p className="text-[10px] text-white/30 uppercase tracking-wider">Date</p>
                        <p className="text-sm text-white/80">
                          {new Date(selected.created_at).toLocaleString('en-US', {
                            month: 'long', day: 'numeric', year: 'numeric',
                            hour: '2-digit', minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-wider mb-2">Message</p>
                    <div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.04]">
                      <p className="text-sm text-white/70 leading-relaxed whitespace-pre-wrap">{selected.mensaje}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <Mail className="w-10 h-10 text-white/10 mx-auto mb-3" />
                    <p className="text-white/30 text-sm">Select a message to view details</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

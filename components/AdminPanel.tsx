import React, { useState, useEffect } from 'react';
import { X, Lock, User, Key, RefreshCw } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { WaitlistEntry } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [proposals, setProposals] = useState<WaitlistEntry[]>([]);

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      fetchProposals();
    }
  }, [isOpen, isAuthenticated]);

  const fetchProposals = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/proposals');
      const data = await res.json();
      setProposals(data.reverse()); // Show newest first
    } catch (err) {
      console.error("Failed to fetch proposals");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await res.json();
        if (data.success) {
          setIsAuthenticated(true);
        } else {
          setError(data.message || 'Invalid credentials');
        }
      } else {
        const text = await res.text();
        console.error("Non-JSON response:", text);
        setError('Server error: Received non-JSON response');
      }
    } catch (err) {
      console.error("Login error:", err);
      setError('Login failed: ' + (err instanceof Error ? err.message : String(err)));
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border-4 border-black">
        
        {/* Header */}
        <div className="bg-black text-white p-4 flex justify-between items-center shrink-0">
          <h2 className="font-display font-bold text-xl tracking-wider">
            {isAuthenticated ? 'ADMIN DASHBOARD' : 'SECURE LOGIN'}
          </h2>
          <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto mt-10">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200">
                <div className="flex justify-center mb-6">
                  <div className="bg-gray-100 p-4 rounded-full">
                    <Lock size={40} className="text-gray-600" />
                  </div>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Username</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black font-mono text-sm"
                        placeholder="Enter ID"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Password</label>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black font-mono text-sm"
                        placeholder="Enter Password"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="text-red-500 text-xs font-bold text-center bg-red-50 p-2 rounded-lg">
                      {error}
                    </div>
                  )}

                  <Button type="submit" fullWidth disabled={loading} className="mt-4">
                    {loading ? 'Verifying...' : 'Access Panel'}
                  </Button>
                </form>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-2xl">Proposal Requests ({proposals.length})</h3>
                <button 
                  onClick={fetchProposals}
                  className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-black bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
                  Refresh Data
                </button>
              </div>

              <div className="grid gap-4">
                {proposals.length === 0 ? (
                  <div className="text-center py-20 text-gray-400 font-mono">
                    No proposals received yet.
                  </div>
                ) : (
                  proposals.map((proposal) => (
                    <div key={proposal.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-black transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-lg">{proposal.name}</h4>
                          <div className="text-sm text-gray-500 font-mono">{new Date(proposal.timestamp).toLocaleString()}</div>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                          NEW
                        </span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <span className="text-xs font-bold text-gray-400 block mb-1">EMAIL</span>
                          <span className="font-mono text-sm select-all">{proposal.email}</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <span className="text-xs font-bold text-gray-400 block mb-1">PHONE</span>
                          <span className="font-mono text-sm select-all">{proposal.phoneNumber}</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <span className="text-xs font-bold text-gray-400 block mb-1">MESSAGE</span>
                        <p className="text-gray-800 whitespace-pre-wrap">{proposal.message}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

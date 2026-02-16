import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { submitToWaitlist } from '../services/api';

export const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Reusing the API service but passing 0 for age for now as we transition
    const response = await submitToWaitlist(formData.name, 99, formData.email);

    setLoading(false);
    if (response.success) {
      setSuccess(true);
    } else {
      setError(response.message);
    }
  };

  if (success) {
    return (
      <div className="bg-white border-2 border-black rounded-[2rem] p-8 shadow-neo text-center max-w-md mx-auto w-full">
        <div className="text-6xl mb-4">📬</div>
        <h3 className="text-2xl font-display font-bold mb-4">Message Sent!</h3>
        <p className="font-body text-gray-600 mb-6">
          Thanks for reaching out. I'll get back to you shortly.
        </p>
        <Button onClick={() => setSuccess(false)} variant="secondary" fullWidth>
          Send Another
        </Button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white border-[3px] border-black rounded-[2rem] p-6 md:p-8 shadow-neo w-full max-w-md mx-auto relative z-20"
    >
      <div className="space-y-5">
        <Input 
          label="NAME" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <Input 
          label="EMAIL" 
          name="email" 
          type="email" 
          placeholder="you@company.com" 
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input 
          label="MESSAGE / PROJECT" 
          name="message" 
          placeholder="Tell me about your idea..." 
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      {error && (
        <div className="mt-4 text-red-600 text-sm font-bold text-center">
          {error}
        </div>
      )}

      <div className="mt-8">
        <Button 
            type="submit" 
            fullWidth 
            disabled={loading} 
            size="lg"
            className="rounded-2xl bg-[#E9D5FF] hover:bg-[#D8B4FE]"
        >
            {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};
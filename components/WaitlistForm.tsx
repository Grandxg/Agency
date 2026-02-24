import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { submitToWaitlist } from '../services/api';

export const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
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

    // Client-side validation
    if (!formData.name || formData.name.length < 2) {
      setError('Name must be at least 2 characters.');
      setLoading(false);
      return;
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }
    if (!formData.phoneNumber || !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phoneNumber)) {
      setError('Please enter a valid phone number.');
      setLoading(false);
      return;
    }
    if (!formData.message || formData.message.length < 5) {
      setError('Message must be at least 5 characters.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mdalynyg", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
      } else {
        const data = await response.json();
        if (data.errors && Array.isArray(data.errors)) {
          setError(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setError("Oops! There was a problem submitting your form");
        }
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
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
          label="PHONE NUMBER" 
          name="phoneNumber" 
          type="tel" 
          placeholder="+1 (555) 000-0000" 
          value={formData.phoneNumber}
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
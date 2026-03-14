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
    // Relaxed phone validation - just check if it exists and has some length
    // if (!formData.phoneNumber || formData.phoneNumber.length < 5) {
    //   setError('Please enter a valid phone number.');
    //   setLoading(false);
    //   return;
    // }
    if (!formData.message || formData.message.length < 5) {
      setError('Message must be at least 5 characters.');
      setLoading(false);
      return;
    }

    try {
      // Google Form Submission URL
      const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdgSl-0l7aq-cTAA4n4P-0nN6RcJ7bKF0Fm9jVWhSIARcZgig/formResponse";
      
      // Create FormData object
      const formBody = new FormData();
      formBody.append("entry.1194643129", formData.name);
      formBody.append("entry.100275060", formData.email);
      formBody.append("entry.2004854218", formData.phoneNumber || "");
      formBody.append("entry.1073026971", formData.message);

      // Submit using fetch with no-cors mode
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: formBody,
        mode: "no-cors", // Required for Google Forms
      });

      // Since no-cors returns an opaque response, we assume success if no network error occurs
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
      });

    } catch (error) {
      console.error("Submission Error:", error);
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
          label="PHONE NUMBER (OPTIONAL)" 
          name="phoneNumber" 
          type="tel" 
          placeholder="(555) 000-0000" 
          value={formData.phoneNumber}
          onChange={handleChange}
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
            className="rounded-2xl bg-[#E9D5FF] hover:bg-[#D8B4FE] hover:shadow-[0_0_20px_rgba(216,180,254,0.6),_5px_5px_0px_0px_rgba(0,0,0,1)]"
        >
            {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};
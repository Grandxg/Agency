import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { submitToWaitlist } from '../services/api';

export const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: 'Jane Doe',
    age: '23',
    phone: '+1 555 123 4567',
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

    const ageNum = parseInt(formData.age, 10);
    const response = await submitToWaitlist(formData.name, ageNum, formData.phone);

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
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-display font-bold mb-4">You're on the list!</h3>
        <p className="font-body text-gray-600 mb-6">
          We'll match you soon.
        </p>
        <Button onClick={() => setSuccess(false)} variant="secondary" fullWidth>
          Back
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
          placeholder="Jane Doe" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <div className="flex gap-4">
            <div className="w-1/3">
                <Input 
                label="AGE" 
                name="age" 
                type="number" 
                placeholder="23" 
                value={formData.age}
                onChange={handleChange}
                required
                min="18"
                max="100"
                />
            </div>
            <div className="w-2/3">
                <Input 
                label="NUMBER" 
                name="phone" 
                type="tel" 
                placeholder="+1 555..." 
                value={formData.phone}
                onChange={handleChange}
                required
                />
            </div>
        </div>
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
            {loading ? 'Joining...' : 'Next'}
        </Button>
      </div>
      
      <p className="text-[10px] text-center text-gray-500 mt-4 max-w-xs mx-auto">
        Your info helps us personalize early invites. We will not share it.
      </p>
    </form>
  );
};
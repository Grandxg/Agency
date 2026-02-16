import { WaitlistEntry, WaitlistResponse } from '../types';

// Simulate database delay
const DELAY_MS = 1000;

// LocalStorage key for persistence
const DB_KEY = 'plusone_waitlist_db';

export const submitToWaitlist = async (name: string, age: number, phoneNumber: string): Promise<WaitlistResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        // Backend Validation Logic Simulation
        if (!name || name.length < 2) {
          resolve({ success: false, message: 'Name must be at least 2 characters.' });
          return;
        }
        if (!age || age < 18 || age > 100) {
          resolve({ success: false, message: 'You must be between 18 and 100 years old.' });
          return;
        }
        // Basic phone regex for validation
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
          resolve({ success: false, message: 'Please enter a valid phone number.' });
          return;
        }

        // Simulating Database Insert
        const currentDataRaw = localStorage.getItem(DB_KEY);
        const currentData: WaitlistEntry[] = currentDataRaw ? JSON.parse(currentDataRaw) : [];

        const newEntry: WaitlistEntry = {
          id: currentData.length + 1,
          name,
          age,
          phoneNumber,
          timestamp: new Date().toISOString(),
        };

        const updatedData = [...currentData, newEntry];
        localStorage.setItem(DB_KEY, JSON.stringify(updatedData));

        resolve({
          success: true,
          message: 'Welcome to the club!',
          data: newEntry,
        });
      } catch (error) {
        resolve({ success: false, message: 'Internal server error. Please try again.' });
      }
    }, DELAY_MS);
  });
};

export const getWaitlistCount = async (): Promise<number> => {
  // Simulate fetching the live count. 
  // Base count + local submissions to make it look active.
  const baseCount = 2469;
  const currentDataRaw = localStorage.getItem(DB_KEY);
  const localCount = currentDataRaw ? JSON.parse(currentDataRaw).length : 0;
  return baseCount + localCount;
};

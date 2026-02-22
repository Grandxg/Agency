import { WaitlistEntry, WaitlistResponse } from '../types';

// Simulate database delay
const DELAY_MS = 1000;

// LocalStorage key for persistence
const DB_KEY = 'plusone_waitlist_db';

export const submitToWaitlist = async (name: string, email: string, phoneNumber: string, message: string): Promise<WaitlistResponse> => {
  try {
    const response = await fetch('/api/proposals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phoneNumber, message }),
    });

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      const data = await response.json();
      return data;
    } else {
      const text = await response.text();
      console.error("Non-JSON response from server:", text);
      return { success: false, message: 'Server error: Received non-JSON response. Please try again later.' };
    }
  } catch (error) {
    console.error("Error submitting proposal:", error);
    return { success: false, message: 'Network error or server unreachable. Please check your connection.' };
  }
};

export const getWaitlistCount = async (): Promise<number> => {
  // Simulate fetching the live count. 
  // Base count + local submissions to make it look active.
  const baseCount = 2469;
  const currentDataRaw = localStorage.getItem(DB_KEY);
  const localCount = currentDataRaw ? JSON.parse(currentDataRaw).length : 0;
  return baseCount + localCount;
};

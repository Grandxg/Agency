export interface WaitlistEntry {
  id: number;
  name: string;
  age: number;
  phoneNumber: string;
  timestamp: string;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
  data?: WaitlistEntry;
}

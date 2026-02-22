export interface WaitlistEntry {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  timestamp: string;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
  data?: WaitlistEntry;
}

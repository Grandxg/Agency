export interface WaitlistEntry {
  id: number;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
  data?: WaitlistEntry;
}

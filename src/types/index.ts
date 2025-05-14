export interface User {
  name: string;
  email: string;
}

export interface DetectionResultType {
  original_url: string;
  status: 'Safe' | 'Phishing' | 'Suspicious';
  ip_address: string;
  detection_date: string;
  location: string;
  hosting_provider: string;
  screenshot_url: string;
}
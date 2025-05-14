import { useState } from 'react';
import { ExternalLink, ShieldCheck, AlertTriangle, AlertCircle, Globe, Calendar, MapPin, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import DetectionForm from '../components/detection/DetectionForm';
import ResultCard from '../components/detection/ResultCard';
import LoadingSpinner from '../components/ui/LoadingSpinner';

export interface DetectionResult {
  original_url: string;
  status: 'Safe' | 'Phishing' | 'Suspicious';
  ip_address: string;
  detection_date: string;
  location: string;
  hosting_provider: string;
  screenshot_url: string;
}

const DetectionPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [error, setError] = useState('');

  const handleCheckUrl = async (url: string) => {
    setIsLoading(true);
    setError('');
    setResult(null);
    
    try {
      // In a real app, this would call your actual API
      // For demo purposes, we're simulating an API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock response based on the URL
      const mockResult: DetectionResult = {
        original_url: url,
        status: url.includes('phish') ? 'Phishing' : 
               url.includes('suspicious') ? 'Suspicious' : 'Safe',
        ip_address: '93.184.216.34',
        detection_date: new Date().toISOString().split('T')[0],
        location: 'United States',
        hosting_provider: 'Example Host LLC',
        screenshot_url: 'https://images.pexels.com/photos/4466492/pexels-photo-4466492.jpeg',
      };
      
      setResult(mockResult);
    } catch (err) {
      setError('Failed to check URL. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Check a Website for Phishing</h1>
        <p className="mt-3 text-lg text-gray-600">
          Enter any URL below to check if it's safe or a potential phishing attempt
        </p>
      </div>
      
      <DetectionForm onSubmit={handleCheckUrl} />
      
      {error && (
        <div className="mt-8 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      
      {isLoading && (
        <div className="mt-12 flex justify-center">
          <LoadingSpinner size="large" />
        </div>
      )}
      
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <ResultCard result={result} />
        </motion.div>
      )}
      
      {!isLoading && !result && !error && (
        <div className="mt-16 text-center text-gray-500">
          <p>Previous detection results will appear here</p>
        </div>
      )}
      
      <div className="mt-16 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">How to Interpret Results</h2>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <ShieldCheck className="h-5 w-5 text-green-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-gray-900">Safe</h3>
              <p className="text-gray-600">The website appears to be legitimate and safe to browse.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-gray-900">Suspicious</h3>
              <p className="text-gray-600">The website has some suspicious elements. Proceed with caution.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <AlertCircle className="h-5 w-5 text-red-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-gray-900">Phishing</h3>
              <p className="text-gray-600">The website is likely a phishing attempt. Do not visit or enter any information.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetectionPage;
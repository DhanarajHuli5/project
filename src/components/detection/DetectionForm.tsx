import { useState } from 'react';
import { Search } from 'lucide-react';

interface DetectionFormProps {
  onSubmit: (url: string) => void;
}

const DetectionForm = ({ onSubmit }: DetectionFormProps) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const validateUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }
    
    // Add http:// prefix if missing
    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = 'https://' + formattedUrl;
    }
    
    if (!validateUrl(formattedUrl)) {
      setError('Please enter a valid URL');
      return;
    }
    
    onSubmit(formattedUrl);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-grow">
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
              Website URL
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="url"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter website URL (e.g., example.com)"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            <p className="mt-1 text-xs text-gray-500">
              Try with "phishing" or "suspicious" in the URL to see different result types
            </p>
          </div>
          <div className="md:flex-shrink-0">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Check URL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DetectionForm;
import { ExternalLink, ShieldCheck, AlertTriangle, AlertCircle, Globe, Calendar, MapPin, Server } from 'lucide-react';
import { DetectionResult } from '../../pages/DetectionPage';

interface ResultCardProps {
  result: DetectionResult;
}

const ResultCard = ({ result }: ResultCardProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Safe':
        return <ShieldCheck className="h-8 w-8 text-green-500" />;
      case 'Suspicious':
        return <AlertTriangle className="h-8 w-8 text-yellow-500" />;
      case 'Phishing':
        return <AlertCircle className="h-8 w-8 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Safe':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Suspicious':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Phishing':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Detection Results</h2>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(result.status)}`}>
            {getStatusIcon(result.status)}
            <span className="ml-2">{result.status}</span>
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">Original URL</h3>
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-gray-400 mr-2" />
              <a
                href={result.original_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
              >
                {result.original_url.length > 40 
                  ? result.original_url.substring(0, 40) + '...' 
                  : result.original_url}
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">IP Address</h3>
            <p className="text-gray-900">{result.ip_address}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">Detection Date</h3>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <p className="text-gray-900">{result.detection_date}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">Location</h3>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <p className="text-gray-900">{result.location}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">Hosting Provider</h3>
            <div className="flex items-center">
              <Server className="h-5 w-5 text-gray-400 mr-2" />
              <p className="text-gray-900">{result.hosting_provider}</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Website Screenshot</h3>
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <img
              src={result.screenshot_url}
              alt="Website Screenshot"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-2 text-xs text-gray-500">
            *Screenshot shown for demonstration purposes only
          </p>
        </div>
      </div>
      
      <div className={`p-4 ${getStatusColor(result.status)}`}>
        <div className="flex items-start">
          {getStatusIcon(result.status)}
          <div className="ml-3">
            <h3 className="text-sm font-medium">
              {result.status === 'Safe' 
                ? 'This website appears to be safe' 
                : result.status === 'Suspicious'
                ? 'This website has suspicious elements' 
                : 'This website is likely a phishing attempt'}
            </h3>
            <p className="text-xs mt-1">
              {result.status === 'Safe' 
                ? 'You can browse this website with confidence.'
                : result.status === 'Suspicious'
                ? 'Proceed with caution. Do not enter sensitive information.'
                : 'Do not visit this website or enter any personal information.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
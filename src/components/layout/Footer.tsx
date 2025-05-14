import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-blue-500" />
            <span className="text-lg font-bold text-white">PhishGuard</span>
          </div>
          
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PhishGuard. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
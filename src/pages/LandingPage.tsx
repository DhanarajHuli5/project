import { useNavigate } from 'react-router-dom';
import { Shield, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Phishing Website Detection
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Enter any URL and check if it's safe or a phishing attempt. Protect yourself from online threats.
              </p>
              <button
                onClick={() => navigate('/detection')}
                className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-md transform hover:scale-105 transition-transform"
              >
                Start Detection
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-white bg-opacity-20 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-32 h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Enter URL</h3>
              <p className="text-gray-600 text-center">
                Simply paste any suspicious URL into our detection tool.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Analyze</h3>
              <p className="text-gray-600 text-center">
                Our advanced algorithms analyze the URL for signs of phishing.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Get Results</h3>
              <p className="text-gray-600 text-center">
                Receive a detailed report about the safety of the website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Status Indicator Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Know What to Expect
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-green-500">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Safe</h3>
              </div>
              <p className="text-gray-600">
                The website is legitimate and safe to visit. No phishing threats detected.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Suspicious</h3>
              </div>
              <p className="text-gray-600">
                Some suspicious elements detected. Proceed with caution.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-red-500">
              <div className="flex items-center mb-4">
                <XCircle className="w-6 h-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Phishing</h3>
              </div>
              <p className="text-gray-600">
                This website has been identified as a phishing attempt. Do not proceed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Check a Website?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Start using our phishing detection tool today and browse the web with confidence.
          </p>
          <button
            onClick={() => navigate('/detection')}
            className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Start Detection
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
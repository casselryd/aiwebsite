
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { DOWNLOAD_CONFIG } from "@/config/download";

const Hero = () => {
  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = DOWNLOAD_CONFIG.url;
    link.download = DOWNLOAD_CONFIG.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-6">
              bananabrain.io
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              A simple AI agent platform with Slack integration
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Slack Integration</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Automation</span>
            </div>
            
            <Button 
              size="lg" 
              onClick={handleDownload}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Platform
            </Button>
            
            <div className="text-gray-500 text-sm mt-4 space-y-1">
              <p>Or pull the Docker image:</p>
              <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                docker pull ghcr.io/casselryd/bananabrain:main
              </code>
              <p>Compatible with any Docker-enabled system</p>
            </div>
          </div>
          
          {/* Right side - Demo area */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl w-full max-w-md h-80 flex items-center justify-center shadow-xl">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                <p className="font-medium">Demo GIF here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { DOWNLOAD_CONFIG } from "@/config/download";

const Hero = () => {
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
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Get Started with Docker</h3>
              <p className="text-gray-600 text-sm mb-3">Pull the Docker image:</p>
              <code className="bg-gray-800 text-green-400 px-4 py-3 rounded-md text-sm font-mono block">
                docker pull ghcr.io/casselryd/bananabrain:main
              </code>
              <p className="text-gray-500 text-xs mt-3">Compatible with any Docker-enabled system</p>
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

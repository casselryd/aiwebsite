
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-purple-500">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Give It A Try
        </h2>
        <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">
          Download and experiment with this AI agent platform
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Now
        </Button>
        
        <p className="text-orange-100 text-sm mt-6">
          Available for Windows, macOS, and Linux
        </p>
      </div>
    </section>
  );
};

export default DownloadSection;

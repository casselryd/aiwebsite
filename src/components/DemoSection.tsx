
const DemoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI agent functionality with popular integrations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Agent Setup
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Create and manage AI agents for your tasks with easy integration.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Slack Integration</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Discord Integration</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Automation</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-60 flex items-center justify-center shadow-lg">
            <div className="text-center text-gray-500">
              <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-3"></div>
              <p className="font-medium text-sm">Demo GIF here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

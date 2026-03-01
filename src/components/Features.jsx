import { ChevronDown } from "lucide-react";
const features = [
  {
    title: "AI Code Completion",
    description: "Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
    codeSnippet: `function handleSubmit() {
  // AI suggests next line
  const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
    imagePosition: "left",
  },
  {
    title: "Automated Testing",
    description: "Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
    codeSnippet: `describe("User Authentication", () => {
  // Auto-generated tests
  it("should login successfully", () => {
    // Test implementation
  })
})`,
    imagePosition: "right",
  },
  {
    title: "Smart Debugging",
    description: "Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
    codeSnippet: `// AI suggests fix:
const result = await processData(input)
// Fixed: Added await keyword`,
    imagePosition: "left",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">Your Complete Development</span>
            <br />
            <span className="bg-linear-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Workflow</span>
          </h2>
        </div>
        <div className="space-y-16 sm:space-y-20 lg:space-y-23">
          {features.map((feature, key) => (
            <div key={key} className="">
              {/* code section */}
              <div>
                <div>
                  {/* Ide interface */}
                  <div className="relative order-2 w-full sm:w-3/4 lg:w-full">
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-3 shadow-2xl border border-white/10">
                      <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-75 sm:h-100 lg:h-125 border border-white/5">
                        <div className="flex items-center justify-between px-4 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10 ">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1 sm:space-x-2 items-center">
                              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-xs sm:text-sm text-gray-300">CodeFlow</span>
                          </div>
                          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

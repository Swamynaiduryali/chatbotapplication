import { useState } from "react";

const steps = ["Query", "Sources", "Draft", "Finalize"];

const stepContent = [
  "A query is the initial request or question that the chatbot processes.",
  "Sources are the data or references used to provide accurate answers.",
  "A draft is the initial version of the chatbot's response.",
  "Finalize is when the chatbot gives the polished, final answer to the user.",
];

export const Steps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const progressWidth = (currentStep / (steps.length - 1)) * 100;

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="bg-black text-white h-dvh max-w-2xl mx-auto">
      {/* Top: Step names & progress bar */}
      <div className="p-3">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`text-sm font-medium ${
                index <= currentStep ? "text-white" : "text-gray-500"
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        <div className="bg-gray-600 h-1 relative w-full rounded-full">
          <div
            className="bg-green-500 h-1 absolute rounded-full transition-all duration-300"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>

      {/* Middle: Centered content */}
      <div className="flex-1 flex items-center justify-center px-3">
        <div className="bg-black rounded-lg p-4 border border-white ring-2 ring-white/30 max-w-xl text-center">
          <p>{stepContent[currentStep]}</p>
        </div>
      </div>

      {/* Bottom: Buttons */}
      <div className="p-3 flex justify-center gap-4">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-transparent rounded text-red-500 border-red-500 border-[1px]"
        >
          Prev
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-transparent rounded text-green-500 border-green-500 border-[1px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

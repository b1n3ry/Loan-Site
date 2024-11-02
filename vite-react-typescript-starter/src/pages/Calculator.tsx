import React from 'react';
import LoanCalculator from '../components/LoanCalculator';
import { Calculator as CalculatorIcon } from 'lucide-react';

function Calculator() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-600 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <CalculatorIcon className="w-16 h-16 text-white mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">Loan Calculator</h1>
            <p className="text-blue-100 max-w-2xl">Plan your financial future with our easy-to-use loan calculator. Get instant estimates for monthly payments, total interest, and more.</p>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <LoanCalculator />
        </div>
      </div>

      {/* Additional Info */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Understanding Your Loan Calculations</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Monthly Payment</h3>
                <p className="text-gray-600">Your monthly payment includes both principal and interest. The calculation takes into account your loan amount, interest rate, and loan term to determine your fixed monthly payment amount.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Total Payment</h3>
                <p className="text-gray-600">The total payment represents the entire amount you'll pay over the life of the loan, including both the principal amount borrowed and all interest charges.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Total Interest</h3>
                <p className="text-gray-600">This is the total amount of interest you'll pay over the life of the loan. It's calculated by subtracting your loan amount from the total payment.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">Need help understanding your loan options?</p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Speak with a Loan Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
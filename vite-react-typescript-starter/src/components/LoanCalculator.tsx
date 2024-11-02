import React, { useState, useEffect } from 'react';
import { DollarSign, Calendar, PieChart } from 'lucide-react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(60);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount.toString());
    const calculatedInterest = parseFloat(interestRate.toString()) / 100 / 12;
    const calculatedPayments = parseFloat(loanTerm.toString());

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
      const totalInterestCalculated = (
        monthly * calculatedPayments -
        principal
      ).toFixed(2);

      setMonthlyPayment(parseFloat(monthlyPaymentCalculated));
      setTotalPayment(parseFloat(totalPaymentCalculated));
      setTotalInterest(parseFloat(totalInterestCalculated));
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Amount ($)
            </label>
            <input
              type="range"
              min="1000"
              max="500000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate (%)
            </label>
            <input
              type="range"
              min="0.1"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Term (months)
            </label>
            <input
              type="range"
              min="12"
              max="360"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl space-y-6">
          <h3 className="text-xl font-semibold mb-4">Loan Summary</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Monthly Payment</span>
              </div>
              <span className="font-semibold">${monthlyPayment.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Total Payment</span>
              </div>
              <span className="font-semibold">${totalPayment.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <PieChart className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Total Interest</span>
              </div>
              <span className="font-semibold">${totalInterest.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
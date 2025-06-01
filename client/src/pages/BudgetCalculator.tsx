import React, { useState } from "react";

const BudgetCalculator = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [budget, setBudget] = useState<{ low: string; high: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Simulated budget calculation - replace with real API calls if needed
  const calculateBudget = async () => {
    if (!from.trim() || !to.trim()) {
      setError("Please enter both 'From' and 'To' locations.");
      setBudget(null);
      return;
    }

    setError("");
    setLoading(true);
    setBudget(null);

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock calculation logic (replace this with real API integration)
      const baseFare = 100; // base price
      // Generate random distance factor (could be replaced by real distance from API)
      const distanceFactor = Math.floor(Math.random() * 5000);

      const lowBudget = (baseFare + distanceFactor * 0.5).toFixed(2);
      const highBudget = (baseFare + distanceFactor * 0.75).toFixed(2);

      setBudget({ low: lowBudget, high: highBudget });
    } catch {
      setError("Failed to calculate budget. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Trip Budget Calculator</h1>

      <label className="block mb-2 font-semibold">From:</label>
      <input
        type="text"
        placeholder="Enter starting location"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <label className="block mb-2 font-semibold">To:</label>
      <input
        type="text"
        placeholder="Enter destination location"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="w-full p-2 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <button
        onClick={calculateBudget}
        disabled={loading}
        className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Calculating..." : "Calculate Budget"}
      </button>

      {error && <p className="mt-4 text-red-600 font-medium">{error}</p>}

      {budget && !error && (
        <div className="mt-6 bg-gray-100 p-4 rounded border">
          <p className="text-lg font-semibold">Estimated Budget:</p>
          <p>Low: ₹{budget.low}</p>
          <p>High: ₹{budget.high}</p>
        </div>
      )}
    </div>
  );
};

export default BudgetCalculator;

import { useState } from "react";
import { getConfigById } from "../../services/api.js";
import { useNavigate } from "react-router";

export default function SearchConfig() {
  const [configId, setConfigId] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  
  const handleFetch = async () => {
    try {
      const res = await getConfigById(configId);
      setData(res.data.data); // adjust based on your backend ApiResponse
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      alert("Error fetching config: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Fetch Configuration
        </h2>

        {/* Input + Button */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Config ID
            </label>
            <input
              type="text"
              placeholder="Enter configuration ID"
              value={configId}
              onChange={(e) => setConfigId(e.target.value)}
              className="border p-3 rounded w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
            />
          </div>

          <button
            onClick={handleFetch}
            className="w-full py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition shadow"
          >
            Fetch
          </button>
        </div>

        {/* Result Section */}
        {data && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2 text-gray-700">Result:</h3>
            <pre className="bg-gray-100 border border-gray-300 p-4 rounded text-sm font-mono text-gray-800 overflow-x-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

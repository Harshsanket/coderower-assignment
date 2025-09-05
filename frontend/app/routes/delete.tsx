import { useState } from "react";
import { deleteConfig } from "../../services/api.js";
import { useNavigate } from "react-router";

export default function DeleteConfig() {
  const [configId, setConfigId] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const res = await deleteConfig(configId);
      setMessage(res.data.message || "Deleted successfully");
      setTimeout(() => navigate("/"), 2000);
    } catch (err: any) {
      setMessage("Error deleting config: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Delete Configuration
        </h2>

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
              className="border p-3 rounded w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
              required
            />
          </div>

          <button
            onClick={handleDelete}
            className="w-full py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition shadow"
          >
            Delete
          </button>
        </div>

        {message && (
          <p
            className={`mt-6 text-center font-medium ${
              message.toLowerCase().includes("success")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import { updateConfig } from "../../services/api.js";
import { useNavigate } from "react-router";

export default function UpdateConfig() {
  const [configId, setConfigId] = useState("");
  const [remark, setRemark] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  
  const handleUpdate = async () => {
    try {
      const res = await updateConfig(configId, remark);
      setMessage(res.data.message || "Updated successfully");
      setTimeout(() => navigate("/"), 2000);
    } catch (err: any) {
      setMessage("Error updating config: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Update Configuration
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
              className="border p-3 rounded w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Remark
            </label>
            <textarea
              placeholder="Enter new remark here"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              className="border p-3 rounded w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
              rows={3}
              required
            />
          </div>

          <button
            onClick={handleUpdate}
            className="w-full py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition shadow"
          >
            Update
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

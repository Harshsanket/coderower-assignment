import { useState } from "react";
import { createConfig } from "../../services/api.js";
import { useNavigate } from "react-router";

export default function CreateConfig() {
  const [id, setId] = useState("");
  const [data, setData] = useState("");
  const [remark, setRemark] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(data);
      const res = await createConfig({ id, data: parsedData, remark });
      setMessage(res.data.message || "Created successfully");
      setSuccess(true);
      setTimeout(() => navigate("/"), 2000);
    } catch (err: any) {
      setMessage("Error creating config: " + err.message);
      setSuccess(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md">
        {!success ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Create Configuration
            </h2>
            <form onSubmit={handleCreate} className="space-y-5">
              {/* Config ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Config ID
                </label>
                <input
                  type="text"
                  placeholder="Enter unique config ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="border p-3 rounded w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  required
                />
              </div>

              {/* 2D Array */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  2D Array (JSON Format)
                </label>
                <textarea
                  placeholder='e.g. [["a","b"],["c","d"]]'
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  className="border p-3 rounded w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  rows={4}
                  required
                />
              </div>

              {/* Remark */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Remark (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Add an optional remark"
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                  className="border p-3 rounded w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition shadow"
              >
                Create
              </button>
            </form>

            {message && (
              <p className="mt-4 text-center text-red-500 font-medium">
                {message}
              </p>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600">{message}</h2>
            <p className="mt-2 text-gray-600">Redirecting to Home...</p>
          </div>
        )}
      </div>
    </div>
  );
}

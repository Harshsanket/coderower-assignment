import { Link } from "react-router";

export function meta({}) {
  return [
    { title: "CodeRower Software Assignment" },
    { name: "Harsh Sanket", content: "Assignment for CodeRower Software" },
  ];
}

export default function Home() {
  return(
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950">
      <h1 className="text-3xl font-bold mb-8">CodeRower Assignment</h1>
      <div className="grid grid-cols-2 gap-6">
        <Link
          to="/create"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Create Config
        </Link>
        <Link
          to="/fetch"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Search Config
        </Link>
        <Link
          to="/update"
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
        >
          Update Config
        </Link>
        <Link
          to="/delete"
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          Delete Config
        </Link>
      </div>
    </div>
    </>
  );
}

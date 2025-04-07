
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
}

import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-6xl font-bold text-red-500">404 - Page Not Found</h1>
            <Link to="/" className="mt-4 text-blue-500 hover:text-blue-600">Back to Home</Link>
        </div>
    )
}
export default NotFound;

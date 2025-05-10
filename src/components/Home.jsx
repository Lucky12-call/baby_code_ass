import { useStudents } from "../hooks/useStudents";
import { StudentList } from "./StudentList";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Home() {
  const { students, loading, error, filterByCourse } = useStudents();
  const { currentUser } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Student List</h1>
        {currentUser && (
          <Link
            to="/add-student"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Student
          </Link>
        )}
      </div>
      <StudentList
        students={students}
        loading={loading}
        error={error}
        onFilter={filterByCourse}
      />
    </div>
  );
}

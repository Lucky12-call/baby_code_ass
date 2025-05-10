import { useState } from "react";
import { StudentCard } from "./StudentCard";
import toast from "react-hot-toast";

export function StudentList({ students, loading, error, onFilter }) {
  const [courseFilter, setCourseFilter] = useState("");

  const handleFilter = () => {
    if (!courseFilter.trim()) {
      toast.error("Please enter a course to filter by");
      return;
    }
    onFilter(courseFilter);
  };

  const handleClearFilter = () => {
    setCourseFilter("");
    onFilter("");
  };

  if (loading && !students.length) {
    return <div className="text-center py-8">Loading students...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow sm:rounded-lg p-4">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="Filter by course"
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button
            onClick={handleFilter}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Filter
          </button>
          {courseFilter && (
            <button
              onClick={handleClearFilter}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {loading && students.length > 0 && (
        <div className="text-center py-4">Updating list...</div>
      )}

      <div className="space-y-4">
        {students.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No students found. {courseFilter && "Try a different filter."}
          </div>
        ) : (
          students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))
        )}
      </div>
    </div>
  );
}

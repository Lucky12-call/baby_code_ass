import { useStudents } from "../hooks/useStudents";
import { StudentForm } from "./StudentForm";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function AddStudent() {
  const { createStudent } = useStudents();
  const navigate = useNavigate();

  const handleSubmit = async (studentData) => {
    const result = await createStudent(studentData);
    if (result.success) {
      toast.success("Student added successfully!");
      navigate("/");
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Add New Student</h1>
      <div className="bg-white shadow sm:rounded-lg p-6">
        <StudentForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

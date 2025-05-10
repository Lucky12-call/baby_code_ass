import { useState, useEffect } from "react";
import {
  getStudents,
  addStudent,
  filterStudentsByCourse,
} from "../services/students";

export function useStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createStudent = async (student) => {
    setLoading(true);
    try {
      const response = await addStudent(student);
      setStudents((prev) => [...prev, response.data]);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const filterByCourse = async (course) => {
    setLoading(true);
    try {
      const response = await filterStudentsByCourse(course);
      setStudents(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return {
    students,
    loading,
    error,
    createStudent,
    filterByCourse,
    refetch: fetchStudents,
  };
}

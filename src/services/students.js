import axios from "axios";

const mockStudents = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    course: "Computer Science",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    course: "Mathematics",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    course: "Physics",
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice@example.com",
    course: "Computer Science",
  },
];

const api = axios.create({
  baseURL: "https://api.example.com", // This will be mocked
});

// Mock adapter setup
api.interceptors.response.use((response) => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 500);
  });
});

export async function getStudents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mockStudents });
    }, 800);
  });
}

export async function addStudent(student) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newStudent = {
        ...student,
        id: mockStudents.length + 1,
      };
      mockStudents.push(newStudent);
      resolve({ data: newStudent });
    }, 500);
  });
}

export async function filterStudentsByCourse(course) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = course
        ? mockStudents.filter((s) =>
            s.course.toLowerCase().includes(course.toLowerCase())
          )
        : mockStudents;
      resolve({ data: filtered });
    }, 300);
  });
}

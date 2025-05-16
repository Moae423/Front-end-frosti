import api from "@/lib/api";
import { Student } from "@/types/students";

export const getStudents = async (): Promise<Student[]> => {
  try {
    const res = await api.get("/students");
    return res.data;
  } catch (error) {
    console.log(`Cannot view data ${error}`);
    return [];
  }
};

export const addStudents = async (
  data: Omit<Student, "id">
): Promise<Student> => {
  try {
    const res = await api.post("/students", data);
    return res.data;
  } catch (error) {
    console.log(`Cannot Add data ${error}`);
    throw error;
  }
};

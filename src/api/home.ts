import axios from "axios";
import { CourseType } from "../components/Curriculum/courseData";
import { LoginProps } from "./auth";

// login: async ({ studentID, password }: LoginProps) => {
//     return await axios.post(`${baseURL}/user/auth/login`, { studentID, password });
//   },

const baseURL = process.env.SERVER_URL || "http://localhost:3000";

interface semesterProps {
  grade: string;
  semester: string;
  courseList: CourseType[];
}

const homeApi = {
  getDashboard: async ({ studentID, password }: LoginProps) => {
    return await axios.post(`${baseURL}/fixme`, { studentID, password });
  },
  getCourses: async (courseCondition: CourseType) => {
    return await axios.post(`${baseURL}/fixme`, { ...courseCondition });
  },
  setDashboard: async (dashboard: semesterProps[]) => {
    return await axios.post(`${baseURL}/fixme`, { ...dashboard });
  },
};

export default homeApi;

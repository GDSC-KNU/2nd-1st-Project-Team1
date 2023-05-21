import axios from "axios";
import {
  CourseQueryType,
  CourseType,
} from "../components/Curriculum/courseData";
import { LoginProps } from "./auth";

// login: async ({ studentID, password }: LoginProps) => {
//     return await axios.post(`${baseURL}/user/auth/login`, { studentID, password });
//   },

const baseURL = "https://canigraduate.duckdns.org" || "http://localhost:3000";

interface semesterProps {
  grade: string;
  semester: string;
  courseList: CourseType[];
}

const parseCourseQuery = (courseQuery: CourseQueryType) => {
  let query = "";
  const { name, code, type, grade, semester, credit, required, design } =
    courseQuery;
  query += `${name ? "&name=" + name : ""}`;
  query += `${code ? "&code=" + code : ""}`;
  query += `${type !== "-" ? "&type=" + type : ""}`;
  query += `${grade !== "-" ? "&grade=" + grade : ""}`;
  query += `${semester !== "-" ? "&semester=" + semester : ""}`;
  query += `${credit !== "-" ? "&credit=" + credit : ""}`;
  query += `${
    required !== "-"
      ? "&required=" + (required === "필수" ? "true " : "false")
      : ""
  }`;
  query += `${
    design !== "-" ? "&design=" + (design === "설계" ? "true" : "false") : ""
  }`;
  query += "&lectureYear=2022";
  return query;
};

const homeApi = {
  getDashboard: async ({ studentID, password }: LoginProps) => {
    return await axios.post(`${baseURL}/fixme`, { studentID, password });
  },
  getCourses: async ({ courseQuery }: { courseQuery: CourseQueryType }) => {
    const courseQueryURL = parseCourseQuery(courseQuery);

    return await axios.get(`${baseURL}/api/lectures?${courseQueryURL}`);
  },
  setDashboard: async (dashboard: semesterProps[]) => {
    return await axios.post(`${baseURL}/fixme`, { ...dashboard });
  },
};

export default homeApi;

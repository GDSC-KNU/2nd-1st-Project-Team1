import axios from "axios";
import { CourseType } from "../components/Curriculum/courseData";
import { LoginProps } from "./auth";
import clientApi from "./axios";

// login: async ({ studentID, password }: LoginProps) => {
//     return await axios.post(`${baseURL}/user/auth/login`, { studentID, password });
//   },

// const baseURL = process.env.SERVER_URL || "http://localhost:3000";

interface semesterProps {
  grade: string;
  semester: string;
  courseList: CourseType[];
}

const homeApi = {
  // getDashboard: async ({ studentID, password }: LoginProps) => {
  //   return await axios.post(`${baseURL}/fixme`, { studentID, password });
  // },
  // getCourses: async (courseCondition: CourseType) => {
  //   return await axios.post(`${baseURL}/fixme`, { ...courseCondition });
  // },
  // setDashboard: async (dashboard: semesterProps[]) => {
  //   return await axios.post(`${baseURL}/fixme`, { ...dashboard });
  // },

  // 강의 조회
  getCourses: async ({}: any) => {
    return await clientApi.get("/lectures?lectureYear=2022");
  },

  //유저에 해당하는 강의 조회
  getLectureForUser: async ({ id }: any) => {
    return await clientApi.get(`/letures/${id}`);
  },

  //유저 강의 삭제
  deleteLecture: async ({ id }: any) => {
    return await clientApi.post(`/userLecture/delete/${id}`);
  },

  //유저 강의 전체 삭제
  deleteAllLecture: async ({ token }: any) => {
    return await clientApi.post(`/userLecture/delte/all/${token}`);
  },

  //유저 강의 추가
  addLecture: async ({ token }: any) => {
    return await clientApi.post(`/userLecture/add/${token}`);
  },

  //엑셀 제출
  saveExcel: async ({ token }: any) => {
    return await clientApi.post(`/excel/read/${token}`);
  },

  //유저 강의 불러오기
  loadLecture: async ({ token }: any) => {
    return await clientApi.get(`/userLecture/${token}`);
  },

  //유저 특정 강의 불러오기? 이건 뭐지?
  loadSpecificLecture: async ({ token, LectureID }: any) => {
    return await clientApi.get(`/userLecture/${token}/${LectureID}`);
  },
};

export default homeApi;

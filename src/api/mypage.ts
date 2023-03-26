import axios from "axios";
import { LoginProps } from "./auth";

const baseURL = process.env.SERVER_URL || "http://localhost:3000";

interface PasswordProps {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

interface UserProps {
  name: string;
  studentID: string;
  major: string;
  grade: string;
  semester: string;
}

const summaryApi = {
  getUserInfo: async ({ studentID, password }: LoginProps) => {
    return await axios.post(`${baseURL}/fixme`, { studentID, password });
  },
  setUserInfo: async (user: UserProps) => {
    return await axios.post(`${baseURL}/fixme`, { ...user });
  },
  setPassword: async (password: PasswordProps) => {
    return await axios.post(`${baseURL}/fixme`, { ...password });
  },
};

export default summaryApi;

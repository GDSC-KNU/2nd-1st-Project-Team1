import axios from "axios";

const baseURL = process.env.SERVER_URL || "http://localhost:3000";

export interface LoginProps {
  studentID: string;
  password: string;
}

const authApi = {
  register: async (user: LoginProps) => {
    return await axios.post(`${baseURL}/fixme`, { ...user });
  },
  login: async (user: LoginProps) => {
    return await axios.post(`${baseURL}/fixme`, { ...user });
  },
};

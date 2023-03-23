import axios from "axios";
import { LoginProps } from "./auth";

const baseURL = process.env.SERVER_URL || "http://localhost:3000";

interface MiscellaneousProps {
  key: string;
  value: string;
}

const summaryApi = {
  getChartData: async ({ studentID, password }: LoginProps) => {
    return await axios.post(`${baseURL}/fixme`, { studentID, password });
  },
  getCredits: async ({ studentID, password }: LoginProps) => {
    return await axios.post(`${baseURL}/fixme`, { studentID, password });
  },
  getMiscellaneous: async ({ studentID, password }: LoginProps) => {
    return await axios.post(`${baseURL}/fixme`, { studentID, password });
  },
  setMiscellaneous: async ({ key, value }: MiscellaneousProps) => {
    return await axios.post(`${baseURL}/fixme`, { key, value });
  },
};

export default summaryApi;

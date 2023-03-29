import { useMutation } from "@tanstack/react-query";
import homeApi from "../api/home";

const useGetDashboard = () => {
  return useMutation(homeApi.getDashboard);
};

export default useGetDashboard;

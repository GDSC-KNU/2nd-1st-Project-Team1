import { useMutation } from "@tanstack/react-query";
import homeApi from "../api/home";

const useSetDashboard = () => {
  return useMutation(homeApi.setDashboard);
};

export default useSetDashboard;

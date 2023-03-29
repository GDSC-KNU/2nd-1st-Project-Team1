import { useMutation } from "@tanstack/react-query";
import homeApi from "../api/home";

const useGetCourses = () => {
  return useMutation(homeApi.getCourses);
};

export default useGetCourses;

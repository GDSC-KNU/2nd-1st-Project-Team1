import { useMutation, useQuery } from "@tanstack/react-query";
import homeApi from "../api/home";

const useGetCourses = () => {
  // return useMutation(homeApi.getCourses);
  const { data } = useQuery(["channelList"], homeApi.getCourses);
  console.log(data);
  return data;
};

export default useGetCourses;

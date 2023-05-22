import { useMutation, useQuery } from "@tanstack/react-query";
import homeApi from "../api/home";

const useLectures = () => {
  // return useMutation(homeApi.getCourses);
  const { data } = useQuery(["channelList"], homeApi.getLectures);
  console.log(data);
  return data;
};

export default useLectures;

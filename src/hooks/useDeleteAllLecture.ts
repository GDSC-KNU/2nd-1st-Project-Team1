import { useMutation } from "@tanstack/react-query";
import homeApi from "../api/home";

const useDeleteAllLecture = () => {
  return useMutation(homeApi.deleteAllLecture);
};

export default useDeleteAllLecture;

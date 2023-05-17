import { useMutation } from "@tanstack/react-query";
import homeApi from "../api/home";

const useDeleteLecture = () => {
  return useMutation(homeApi.deleteLecture);
};

export default useDeleteLecture;

import { useMutation } from "@tanstack/react-query";
import homeApi from "../api/home";

const useAddLecture = () => {
  return useMutation(homeApi.addLecture);
};

export default useAddLecture;

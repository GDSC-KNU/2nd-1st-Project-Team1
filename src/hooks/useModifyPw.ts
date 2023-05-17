import { useMutation } from "@tanstack/react-query";
import authApi from "../api/auth";

const useModifyPw = () => {
  return useMutation(authApi.modifyPw);
};

export default useModifyPw;

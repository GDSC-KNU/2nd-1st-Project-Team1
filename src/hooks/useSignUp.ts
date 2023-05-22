import { useMutation } from "@tanstack/react-query";
import authApi from "../api/auth";

const useSignUp = () => {
  return useMutation(authApi.signUp);
};

export default useSignUp;

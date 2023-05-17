import { useMutation } from "@tanstack/react-query";
import authApi from "../api/auth";

const useLogin = () => {
  return useMutation(authApi.login);
};

export default useLogin;

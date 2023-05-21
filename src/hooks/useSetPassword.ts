import { useMutation } from "@tanstack/react-query";
import summaryApi from "../api/mypage";
const useSetPassword = () => {
  return useMutation(summaryApi.setPassword);
};

export default useSetPassword;

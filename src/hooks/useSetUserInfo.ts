import { useMutation } from "@tanstack/react-query";
import summaryApi from "../api/mypage";

const useSetUserInfo = () => {
  return useMutation(summaryApi.setUserInfo);
};

export default useSetUserInfo;

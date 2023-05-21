import { useMutation } from "@tanstack/react-query";
import summaryApi from "../api/mypage";

const useGetUserInfo = () => {
  return useMutation(summaryApi.getUserInfo);
};

export default useGetUserInfo;

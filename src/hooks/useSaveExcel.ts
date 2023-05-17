import { useMutation } from "@tanstack/react-query";
import homeApi from "../api/home";

const useSaveExcel = () => {
  return useMutation(homeApi.saveExcel);
};

export default useSaveExcel;

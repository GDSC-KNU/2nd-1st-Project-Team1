import clientApi from "./axios";

export interface LoginProps {
  classID: string;
  userPW: string;
}

const authApi = {
  // 회원가입
  signUp: async ({ classId, userPw, name, department, token }: any) => {
    return await clientApi.post(`/user/signup`, {
      classId,
      userPw,
      name,
      department,
      token,
    });
  },
  // 로그인
  login: async (user: LoginProps) => {
    return await clientApi.post(`/user/login`, { user });
  },
  // 비밀번호 변경
  modifyPw: async ({ token, nowUserPw, updateUserPw, pwConfirm }: any) => {
    return await clientApi.post(`/user/login`, {
      token,
      nowUserPw,
      updateUserPw,
      pwConfirm,
    });
  },
  // 로그아웃
  logout: async ({}: any) => {
    return await clientApi.post(`/user/logout`);
  },
  // 인증?
};

export default authApi;

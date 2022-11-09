import { useSetRecoilState } from "recoil";
import { authenticated } from "../store";
import { callSocialLoginApi } from "../api";

const useSocialLogin = () => {
  const setIsAuthenticated = useSetRecoilState(authenticated);

  const login = (type) => () => {
    callSocialLoginApi(type);
    setIsAuthenticated(true);
  };

  return { login };
};

export default useSocialLogin;

import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userSelector, authenticated } from "../store";
import { callGetUserApi } from "../api";

const useUser = () => {
  const isAuthenticated = useRecoilValue(authenticated);
  const setUser = useSetRecoilState(userSelector);

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const response = await callGetUserApi();
        setUser(response.data);
      }
    })();
  }, [isAuthenticated]);

  return isAuthenticated;
};

export default useUser;

import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userSelector, authenticated } from "../store";
import { callGetUserApi } from "../api";

const useUser = () => {
  const isAuthenticated = useRecoilValue(authenticated);
  const setUser = useSetRecoilState(userSelector);

  const updateUserData = async () => {
    const response = await callGetUserApi();
    setUser(response.data);
  };

  useEffect(() => {
    (async () => {
      if (isAuthenticated) updateUserData();
    })();
  }, [isAuthenticated]);

  return { isAuthenticated, updateUserData };
};

export default useUser;

import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  authenticated,
  loginInputsSelector,
  loginValidationMessage,
} from "../store";
import { callLoginApi } from "../api";
import { validateLoginInput } from "../util";
import { validateErrorMessage } from "../constants";

const useLogin = () => {
  const setIsAuthenticated = useSetRecoilState(authenticated);
  const [loginInputs, setLoginInputs] = useRecoilState(loginInputsSelector);
  const [errorField, setErrorField] = useState({
    email: false,
    password: false,
  });
  const [validationMessage, setValidationMessage] = useRecoilState(
    loginValidationMessage
  );

  const login = async () => {
    const { errorField, errorMessage } = validateLoginInput(loginInputs);
    setErrorField(errorField);
    setValidationMessage(errorMessage);

    if (!errorMessage) {
      const status = await callLoginApi(loginInputs);
      if (status === 400) {
        setErrorField({ email: true, password: true });
        setValidationMessage(validateErrorMessage.loginFailed);
      } else {
        setIsAuthenticated(true);
      }
    }
  };

  return { errorField, validationMessage, login, setLoginInputs };
};

export default useLogin;

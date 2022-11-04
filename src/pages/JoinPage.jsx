import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { CancelJoinPopup, PageHeader, JoinForm } from "../components";
import { isJoinCompleted } from "../store";

function JoinPage() {
  const [isCompleted, setIsCompleted] = useRecoilState(isJoinCompleted);
  const [isGoBack, setIsGoBack] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isCompleted) {
      const timeOut = setTimeout(() => {
        setIsCompleted(false);
        navigate("../login");
      }, 1000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [isCompleted, navigate, setIsCompleted]);

  if (isCompleted) {
    return <div>회원가입이 완료되었습니다.</div>;
  }

  return (
    <>
      <PageHeader pageTitle="계정정보" />
      <JoinForm />
      {isGoBack && <CancelJoinPopup setIsGoBack={setIsGoBack} />}
    </>
  );
}

export default JoinPage;

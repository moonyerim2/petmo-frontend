import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import history from "history/browser";
import { JoinCancelPopup, PageHeader, JoinForm } from "../components";
import { PageWrapper } from "../styled";
import { isJoinCompleted } from "../store";

function JoinPage() {
  const [isCompleted, setIsCompleted] = useRecoilState(isJoinCompleted);
  const [isGoBack, setIsGoBack] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let unlisten = history.listen(() => {
      if (history.action === "POP") {
        navigate("../join");
        setIsGoBack(true);
      }
    });

    return () => {
      unlisten();
    };
  }, [history]);

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
    <PageWrapper>
      <PageHeader pageTitle="계정정보" />
      <JoinForm />
      {isGoBack && <JoinCancelPopup setIsGoBack={setIsGoBack} />}
    </PageWrapper>
  );
}

export default JoinPage;

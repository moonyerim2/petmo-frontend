import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Link to="../join">시작하기</Link>
      <div>이미 계정이 있나요?</div>
      <Link to="../login">로그인</Link>
    </>
  );
}

export default LandingPage;

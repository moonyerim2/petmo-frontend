import React from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const { userId } = useParams();

  return <div>프로필 {userId}</div>;
}

export default ProfilePage;

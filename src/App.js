import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  LandingPage,
  LoginPage,
  JoinPage,
  WritePostPage,
  PostViewPage,
  BookmarkPage,
  ProfilePage,
  NotFoundPage,
} from "./pages";
import { getCookie } from "./util";

function App() {
  const isLogin = getCookie("session");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogin ? <HomePage /> : <LandingPage />} />

        <Route path="login" element={<LoginPage />} />
        <Route path="join" element={<JoinPage />} />

        <Route path="post/:postId" element={<PostViewPage />} />

        <Route path="write" element={<WritePostPage />}>
          <Route path=":postId" element={<WritePostPage />} />
        </Route>

        <Route path="bookmark" element={<BookmarkPage />} />
        <Route path="profile/:userId" element={<ProfilePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

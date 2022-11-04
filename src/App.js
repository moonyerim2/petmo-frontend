import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authenticated } from "./store";
import { Reset } from "styled-reset";
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

function App() {
  const isAuthenticated = useRecoilValue(authenticated);

  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <LandingPage />}
        />

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

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";

import { useUser } from "./hooks";
import {
  HomePage,
  LandingPage,
  LoginPage,
  JoinPage,
  MyTownPage,
  WritePostPage,
  PostViewPage,
  BookmarkPage,
  ProfilePage,
  NotFoundPage,
} from "./pages";

function App() {
  const isAuthenticated = useUser();

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
        <Route path="mytown" element={<MyTownPage />} />

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

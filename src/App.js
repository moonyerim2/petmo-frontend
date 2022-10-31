import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  AuthPage,
  LoginPage,
  JoinPage,
  WritePostPage,
  PostViewPage,
  BookmarkPage,
  ProfilePage,
  NotFoundPage,
} from "./pages";

function App() {
  const isLogin = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLogin ? <HomePage /> : <Navigate to="login" />}
        />

        <Route path="auth" element={<AuthPage />} />
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

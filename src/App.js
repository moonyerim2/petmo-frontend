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
  MyPetPage,
  WritePostPage,
  PostViewPage,
  BookmarkPage,
  ProfilePage,
  NotFoundPage,
  NavigationOutlet,
} from "./pages";

function App() {
  const isAuthenticated = useUser();

  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        {isAuthenticated ? (
          <Route element={<NavigationOutlet />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        ) : (
          <Route path="/" element={<LandingPage />} />
        )}

        <Route element={<NavigationOutlet />}>
          <Route path="bookmark" element={<BookmarkPage />} />
          <Route path="profile/:userId" element={<ProfilePage />} />
        </Route>

        <Route path="login" element={<LoginPage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="mytown" element={<MyTownPage />} />
        <Route path="mypet" element={<MyPetPage />} />

        <Route path="post/:postId" element={<PostViewPage />} />

        <Route path="write" element={<WritePostPage />}>
          <Route path=":postId" element={<WritePostPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

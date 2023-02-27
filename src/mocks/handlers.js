import {
  authHandler,
  boardHandler,
  usersHandler,
  imageHandler,
  commentsHandler,
} from "../mocks";

export const handlers = [
  ...authHandler,
  ...usersHandler,
  ...boardHandler,
  ...imageHandler,
  ...boardHandler,
  ...commentsHandler,
];

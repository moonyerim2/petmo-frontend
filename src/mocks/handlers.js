import {
  authHandler,
  boardHandler,
  usersHandler,
  imageHandler,
} from "../mocks";

export const handlers = [
  ...authHandler,
  ...usersHandler,
  ...boardHandler,
  ...imageHandler,
  ...boardHandler,
];

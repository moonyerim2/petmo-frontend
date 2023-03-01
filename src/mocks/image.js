import { rest } from "msw";
import { BASE_URL } from "../constants";
import uuid from "react-uuid";

export const imageHandler = [
  rest.post(`${BASE_URL}/image/upload`, async (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        createImages: [
          {
            id: uuid(),
            imageFilePath:
              "https://w.namu.la/s/33f2ba37cdd6ee00c42561185b80e21cb9df2b5ffa7f3d0a2856fc09ccc808d08747a7c97e68ad8275844e0dd47944bdc3ee1a1d94008526dd25e3e7847833324d65e000647005fcc55cc1bb92c6060d4ed689cacb2b22d04775c3e0f37db3c3a823f06b3959485ceb8c39756630d786",
          },
        ],
      })
    );
  }),

  rest.get(`${BASE_URL}/image/:id`, async (req, res, ctx) => {
    return res(
      ctx.json({
        imagePath:
          "https://w.namu.la/s/33f2ba37cdd6ee00c42561185b80e21cb9df2b5ffa7f3d0a2856fc09ccc808d08747a7c97e68ad8275844e0dd47944bdc3ee1a1d94008526dd25e3e7847833324d65e000647005fcc55cc1bb92c6060d4ed689cacb2b22d04775c3e0f37db3c3a823f06b3959485ceb8c39756630d786",
      })
    );
  }),
];

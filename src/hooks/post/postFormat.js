import { callMultipleImageUrlApi } from "../../api";
import { calcElapsedTime } from "../../util";

export const postDataFormat = ({
  boardId,
  username,
  boardAddress,
  boardAnimalTypes,
  categoryType,
  elapsedTime,
  images,
  content,
  likeCount,
  likeCheck,
  bookmarkCount,
  bookmarkCheck,
  viewCount,
}) => {
  return {
    boardId: boardId,
    contentText: content,
    postData: {
      userBadgeData: {
        userName: username,
        //api에서 데이터 빠져서 임의로 이미지 넣은 링크
        imgSrc:
          "http://petmo-storybook.site/static/media/avatar_no_img.deb0da5a.png",
        address: boardAddress,
        elapsedTime: elapsedTime,
      },
      mainTag: categoryType,
      subTags: boardAnimalTypes,
      images: images,
    },
    postFooterData: {
      likeCount,
      likeCheck,
      bookmarkCount,
      bookmarkCheck,
      viewCount,
    },
  };
};

export const imageDataFormat = async (imageIds) => {
  const imageResponses = await callMultipleImageUrlApi(imageIds);
  const images = imageResponses.map(({ data }, i) => {
    return {
      id: imageIds[i],
      src: data.imagePath,
      alt: "게시물 이미지",
    };
  });
  return images;
};

export const createPost = async (postData) => {
  const images = await imageDataFormat(postData.imageIds);
  const elapsedTime = calcElapsedTime(postData.createdDate);
  const post = postDataFormat({ ...postData, elapsedTime, images });
  return post;
};

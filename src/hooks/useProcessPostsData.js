import { useState, useEffect } from "react";
import { callMultipleImageUrlApi } from "../api";
import { calcElapsedTime } from "../util";

function useProcessPostsData(postList) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const posts = await processPostsData(postList);
      setPosts(posts);
    })();
  }, [postList]);

  const postDataFormat = ({
    boardId,
    nickname,
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
          userName: nickname,
          //api에서 데이터 빠져서 임의로 이미지 넣은 링크
          imgSrc:
            "http://petmo-storybook.site/static/media/avatar_no_img.deb0da5a.png",
          address: boardAddress,
          elapsedTime: elapsedTime,
        },
        mainTag: categoryType,
        subTags: boardAnimalTypes,
        isSummary: true,
        images: images,
        imageType: "image",
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

  const imageDataFormat = async (imageIds) => {
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

  const createPost = async (postData) => {
    const images = await imageDataFormat(postData.imageIds);
    const elapsedTime = calcElapsedTime(postData.createdDate);
    const post = postDataFormat({ ...postData, elapsedTime, images });
    return post;
  };

  const processPostsDataReducer = async (posts, postData) => {
    const post = await createPost(postData);
    return [...(await posts), post];
  };

  const processPostsData = async (postList) =>
    postList.reduce(processPostsDataReducer, []);

  return posts;
}

export default useProcessPostsData;

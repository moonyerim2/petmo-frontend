import React from "react";
import ProfileBoard from "../components/Profile/ProfileBoard";
import ProfileHeader from "../components/Profile/ProfileHeader";

const profileDummyData = {
  username: "username",
  profile: "profile",
  regionDepth2: "강남구",
  animals: ["강아지", "고양이"],
};

const postsDummyData = [
  {
    id: 1,
    author: "각이",
    village: "시흥시",
    time: "3분전",
    content: {
      text: "강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?",
      image: [
        {
          id: 1,
          src: "http://placeimg.com/320/220/animals",
        },
        {
          id: 2,
          src: "http://placeimg.com/320/220/animals",
        },
        {
          id: 3,
          src: "http://placeimg.com/320/220/animals",
        },
      ],
    },
    myLike: true,
    myBookmark: false,
    likeNumber: 2,
    bookmarkNumber: 3,
    commentNumber: 6,
    categoryTag: "축하해요",
    animalTag: [
      {
        tagName: "강아지",
        id: 1,
      },
      {
        tagName: "고양이",
        id: 2,
      },
    ],
  },
  {
    id: 2,
    author: "챌이",
    village: "남양주시",
    time: "5분전",
    content: {
      text: "강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?",
      image: [
        {
          id: 1,
          src: "http://placeimg.com/320/220/animals",
        },
        {
          id: 2,
          src: "http://placeimg.com/320/220/animals",
        },
        {
          id: 3,
          src: "http://placeimg.com/320/220/animals",
        },
      ],
    },
    myLike: false,
    myBookmark: true,
    likeNumber: 2,
    bookmarkNumber: 3,
    commentNumber: 6,
    categoryTag: "축하해요",
    animalTag: [
      {
        tagName: "강아지",
        id: 1,
      },
      {
        tagName: "고양이",
        id: 2,
      },
    ],
  },
  {
    id: 3,
    author: "림",
    village: "대구시",
    time: "9분전",
    content: {
      text: null,
      image: [{ id: 3, src: "http://placeimg.com/346/223/animals" }],
    },
    myLike: false,
    myBookmark: true,
    likeNumber: 4,
    bookmarkNumber: 1,
    commentNumber: 8,
    categoryTag: "축하해요",
    animalTag: [
      {
        tagName: "강아지",
        id: 1,
      },
      {
        tagName: "고양이",
        id: 2,
      },
    ],
  },
  {
    id: 4,
    author: "민",
    village: "대구시",
    time: "9분전",
    content: {
      text: "강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?",
      image: null,
    },
    myLike: false,
    myBookmark: true,
    likeNumber: 4,
    bookmarkNumber: 1,
    commentNumber: 8,
    categoryTag: "축하해요",
    animalTag: [
      {
        tagName: "강아지",
        id: 1,
      },
      {
        tagName: "고양이",
        id: 2,
      },
    ],
  },
];

const userCommentsData = [
  {
    commentId: 1,
    categoryTag: "축하해요",
    animalTag: [
      {
        tagName: "강아지",
        id: 1,
      },
      {
        tagName: "고양이",
        id: 2,
      },
    ],
    author: "username",
    commentContent:
      "오 프로필 좋네요(그 뒤의 내용은 엄청청ㅁ처엋엋머처청머어청멍청ㅁ엄청엄청처멍ㅁ매우매우매우매앰우ㅐㅁ우ㅐ무우매우매우매우매우매우매우매우 깁니다",
    createdDate: "2022-11-18 19:00:25",
    postContent:
      "강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?",
  },
  {
    commentId: 2,
    categoryTag: "축하해요",
    animalTag: [
      {
        tagName: "강아지",
        id: 1,
      },
      {
        tagName: "고양이",
        id: 2,
      },
    ],
    author: "username",
    commentContent:
      "오 프로필 좋네요(그 뒤의 내용은 엄청청ㅁ처엋엋머처청머어청멍청ㅁ엄청엄청처멍ㅁ매우매우매우매앰우ㅐㅁ우ㅐ무우매우매우매우매우매우매우매우 깁니다",
    createdDate: "2022-11-18 19:00:25",
    postContent:
      "강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?강아지가 사람을 좋아하고 따른다는 것은 쉽게 알 수 있어요. 하지만 강아지가 우리에게 '고마움'을 느끼는 건 쉽게 알기 어려운데요. 과연 강아지는 보호자에게 고마움을 느낄까요? 그렇다면, 강아지가 고마워할 때 보이는 행동은 어떤 것이 있을까요?",
  },
];

function ProfilePage() {
  return (
    <>
      <ProfileHeader />
      <ProfileBoard
        userProfile={profileDummyData}
        userPosts={postsDummyData}
        userComments={userCommentsData}
      />
    </>
  );
}

export default ProfilePage;

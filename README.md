# 펫모
지역기반 반려동물 커뮤니티 펫모입니다.
![Frame 55](https://user-images.githubusercontent.com/75062526/232320173-95bfc59e-5606-43fd-b7ce-41e2f95c1871.png)

## 프로젝트 실행
```
npm i
npm run dev
```

## WIKI
프로젝트의 정보는 [WIKI](https://github.com/moonyerim2/petmo-frontend/wiki)에서 확인하실 수 있습니다.
- [Git](https://github.com/moonyerim2/petmo-frontend/wiki/Git)
- [유저스토리](https://github.com/moonyerim2/petmo-frontend/wiki/%EC%9C%A0%EC%A0%80%EC%8A%A4%ED%86%A0%EB%A6%AC)
- [유저플로우](https://github.com/moonyerim2/petmo-frontend/wiki/%EC%9C%A0%EC%A0%80%ED%94%8C%EB%A1%9C%EC%9A%B0)

## 디자인 시스템
컴포넌트 문서화를 위해 디자인 시스템을 개발 중입니다.
- [디자인 시스템 프로젝트 저장소](https://github.com/moonyerim2/petmo-design-system)
- [디자인 시스템 문서](http://petmo-storybook.site/)
- [디자인 시스템 npm 라이브러리 배포](https://www.npmjs.com/package/petmo-design-system)



## 디렉토리 구조
```
└─ src
  ├─ api              - 서버 연결 api 함수 관련 디렉토리
  ├─ components        - 컴포넌트 관련 디렉토리
  ├─ constants         - 상수를 모아둔 디렉토리
  ├─ hooks             - 커스텀 훅을 모아둔 컴포넌트
  ├─ mocks             - mock api 관련 디렉토리
  ├─ pages             - 페이지 컴포넌트 디렉토리
  ├─ store             - 데이터 가공, 상태 관련 디렉토리
  ├─ styled            - styled-component로 선언한 컴포넌트 관련 디렉토리
  ├─ util              - 유틸 함수 관련 디렉토리
  ├─ App.js
  ├─ index.js
  └─ ...
```

## 사용 기술
### 클라이언트
- react
- recoil
- styled-components
- mui
- msw
- prop-types
- axios
### 디자인 시스템
- react
- typescript
- storybook
- netlify
- npm
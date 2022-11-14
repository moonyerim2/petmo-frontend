import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Pretendard';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
      font-weight: 500;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
      font-weight: 700;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  body {
    background-color: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.black};
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,"Malgun Gothic","맑은 고딕",helvetica,"Apple SD Gothic Neo",sans-serif;
    font-weight: 400;
  }

  ol, ul {
    list-style: none;
  }

  button {
    background-color: transparent;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 400;
  }

  a, a:hover, a:active {
    color: ${({ theme: { colors } }) => colors.black};
    text-decoration: none;
  }

  input, textarea {
    outline: none;
  }

  textarea::-webkit-scrollbar{
    display: none;
  }
  
  input::placeholder, textarea::placeholder {
    color: ${({ theme: { colors } }) => colors.gray600};
  }
`;

export default GlobalStyle;

export const getCookie = (key) => {
  const cookies = document.cookie.split(";");

  return cookies.some((cookie) => {
    const [cookieKey] = cookie.trim().split("=");

    if (cookieKey === key) {
      return true;
    }
  });
};

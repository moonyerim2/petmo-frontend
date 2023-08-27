export const getCookie = (key) => {
  const cookies = document.cookie.split(";");
  // return cookies.some((cookie) => {
  for (let cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.trim().split("=");
    if (cookieKey === key) {
      return cookieValue;
    }
  }
};
//Cookie.get('csrftoken')

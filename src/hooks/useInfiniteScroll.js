import { useEffect } from "react";
import { throttle } from "../util";

function useInfiniteScroll(fetchData) {
  useEffect(() => {
    const onScrollHandler = throttle(() => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchData();
      }
    }, 300);

    window.addEventListener("scroll", onScrollHandler);

    return () => window.removeEventListener("scroll", onScrollHandler);
  }, []);
}

export default useInfiniteScroll;

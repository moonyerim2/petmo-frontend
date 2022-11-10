import { useState, useEffect } from "react";
import { callGetIpApi } from "../api";

const useIp = () => {
  const [ip, setIp] = useState();

  useEffect(() => {
    (async () => {
      const ip = await callGetIpApi();
      setIp(ip);
    })();
  }, [ip]);

  return ip;
};

export default useIp;
